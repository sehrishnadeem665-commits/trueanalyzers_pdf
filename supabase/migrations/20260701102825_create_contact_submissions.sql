/*
# Create contact_submissions table (single-tenant, no auth)

## Purpose
Stores messages submitted through the public contact form on the
True Analyzers marketing site. The site has no sign-in screen, so the
anon-key frontend must be able to INSERT rows. Reads/updates/deletes are
restricted to the service role (server-side / dashboard) only.

## 1. New Tables
- `contact_submissions`
  - `id` (uuid, primary key, default gen_random_uuid())
  - `name` (text, not null) — submitter's full name
  - `email` (text, not null) — submitter's email address
  - `subject` (text, not null) — short subject line
  - `plan` (text, nullable) — which pricing plan they're interested in (basic/standard/premium), optional
  - `message` (text, not null) — the body of the enquiry
  - `status` (text, not null, default 'new') — lifecycle: new | read | replied | archived
  - `created_at` (timestamptz, default now()) — when the submission was received

## 2. Indexes
- `contact_submissions_created_at_idx` on `created_at DESC` — for dashboard listing by recency.
- `contact_submissions_status_idx` on `status` — for filtering by lifecycle state.

## 3. Security (RLS)
- Enable RLS on `contact_submissions`.
- INSERT policy for `anon, authenticated` so the public contact form can submit.
  The form is intentionally public; anyone can submit an enquiry. We do NOT add a
  SELECT/UPDATE/DELETE policy for anon, so the anon role cannot read or modify
  submissions — only the service role (which bypasses RLS) can manage them.

## 4. Important Notes
1. This is a single-tenant, no-auth app. The frontend uses the anon key, so the
   INSERT policy MUST include `anon` or the contact form will silently fail.
2. No SELECT policy is defined for anon — submitters cannot read back their own
   or anyone else's submissions. Only the service role can read them.
3. The `status` column is included so a future admin dashboard can triage
   enquiries without schema changes.
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  subject text NOT NULL,
  plan text,
  message text NOT NULL,
  status text NOT NULL DEFAULT 'new',
  created_at timestamptz DEFAULT now()
);

CREATE INDEX IF NOT EXISTS contact_submissions_created_at_idx
  ON contact_submissions (created_at DESC);

CREATE INDEX IF NOT EXISTS contact_submissions_status_idx
  ON contact_submissions (status);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- INSERT only: the public contact form needs to submit enquiries.
-- No SELECT/UPDATE/DELETE policies for anon — only the service role can read/manage.
DROP POLICY IF EXISTS "anon_insert_contact_submissions" ON contact_submissions;
CREATE POLICY "anon_insert_contact_submissions"
ON contact_submissions FOR INSERT
TO anon, authenticated
WITH CHECK (true);
