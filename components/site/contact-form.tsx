'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Loader2, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { supabase } from '@/lib/supabase/client';

const schema = z.object({
  name: z
    .string()
    .min(2, 'Please enter your name (at least 2 characters).')
    .max(80, 'Name must be 80 characters or fewer.'),
  email: z
    .string()
    .min(1, 'Please enter your email address.')
    .email('Please enter a valid email address.'),
  subject: z
    .string()
    .min(3, 'Please add a short subject (at least 3 characters).')
    .max(120, 'Subject must be 120 characters or fewer.'),
  plan: z.string().optional(),
  message: z
    .string()
    .min(10, 'Please tell us a bit more (at least 10 characters).')
    .max(2000, 'Message must be 2000 characters or fewer.'),
});

type FormValues = z.infer<typeof schema>;

const planOptions = [
  { value: '', label: 'Not sure yet' },
  { value: 'basic', label: 'Basic — £30' },
  { value: 'standard', label: 'Standard — £40' },
  { value: 'premium', label: 'Premium — £50' },
];

export function ContactForm() {
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { name: '', email: '', subject: '', plan: '', message: '' },
  });

  async function onSubmit(values: FormValues) {
    setServerError(null);
    setSubmitting(true);
    try {
      if (!supabase) {
        throw new Error('Supabase is not configured. Please set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY.');
      }

      const sb: any = supabase;
      const { error } = await sb.from('contact_submissions').insert({
        name: values.name.trim(),
        email: values.email.trim(),
        subject: values.subject.trim(),
        plan: values.plan || null,
        message: values.message.trim(),
      });
      if (error) throw error;
      setSuccess(true);
      reset();
    } catch (err) {
      setServerError(
        'Something went wrong while sending your message. Please try again, or email us directly at info@trueanalyzers.com.'
      );
    } finally {
      setSubmitting(false);
    }
  }

  if (success) {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-brand-100 bg-white p-10 text-center shadow-soft">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-100 text-brand-600">
          <CheckCircle2 className="h-8 w-8" />
        </span>
        <h3 className="mt-5 font-display text-2xl font-bold text-foreground">Message sent</h3>
        <p className="mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">
          Thanks for getting in touch. A real person will reply to you within one business day —
          usually much faster.
        </p>
        <Button
          type="button"
          variant="outline"
          className="mt-6 border-brand-200 bg-white text-brand-700 hover:bg-brand-50"
          onClick={() => setSuccess(false)}
        >
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="rounded-2xl border border-brand-100 bg-white p-6 shadow-soft sm:p-8"
      aria-label="Contact form"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full name" htmlFor="name" error={errors.name?.message} required>
          <Input
            id="name"
            autoComplete="name"
            placeholder="Jane Doe"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? 'name-error' : undefined}
            {...register('name')}
          />
        </Field>
        <Field label="Email address" htmlFor="email" error={errors.email?.message} required>
          <Input
            id="email"
            type="email"
            autoComplete="email"
            placeholder="jane@company.com"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? 'email-error' : undefined}
            {...register('email')}
          />
        </Field>
      </div>

      <div className="mt-5 grid gap-5 sm:grid-cols-2">
        <Field label="Subject" htmlFor="subject" error={errors.subject?.message} required>
          <Input
            id="subject"
            placeholder="How can we help?"
            aria-invalid={!!errors.subject}
            aria-describedby={errors.subject ? 'subject-error' : undefined}
            {...register('subject')}
          />
        </Field>
        <Field label="Which plan are you interested in?" htmlFor="plan" error={undefined}>
          <select
            id="plan"
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            {...register('plan')}
          >
            {planOptions.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <div className="mt-5">
        <Field label="Message" htmlFor="message" error={errors.message?.message} required>
          <Textarea
            id="message"
            rows={5}
            placeholder="Tell us what you're working on, what you need, and any questions you have."
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? 'message-error' : undefined}
            {...register('message')}
          />
        </Field>
      </div>

      {serverError && (
        <div
          role="alert"
          className="mt-5 flex items-start gap-3 rounded-lg border border-destructive/30 bg-destructive/5 p-4 text-sm text-destructive"
        >
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
          <p>{serverError}</p>
        </div>
      )}

      <div className="mt-6 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-muted-foreground">
          By submitting, you agree to be contacted about your enquiry. We never share your details.
        </p>
        <Button
          type="submit"
          size="lg"
          disabled={submitting}
          className="w-full bg-gradient-to-r from-brand-500 to-brand-600 text-white shadow-brand hover:from-brand-600 hover:to-brand-700 sm:w-auto"
        >
          {submitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Sending...
            </>
          ) : (
            <>
              <Send className="mr-2 h-4 w-4" />
              Send message
            </>
          )}
        </Button>
      </div>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  error,
  required,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-2">
      <Label htmlFor={htmlFor} className="text-sm font-medium text-foreground">
        {label}
        {required && <span className="ml-1 text-brand-500">*</span>}
      </Label>
      {children}
      {error && (
        <p id={`${htmlFor}-error`} className="text-sm font-medium text-destructive">
          {error}
        </p>
      )}
    </div>
  );
}
