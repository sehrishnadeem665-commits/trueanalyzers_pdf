import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL || '';
const supabaseAnonKey =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || process.env.SUPABASE_ANON_KEY || '';

// Do not throw at module import time to avoid build-time prerender failures
// when environment variables are not available. Initialize the client lazily
// on the browser where these public vars are expected to exist.
let _supabase: ReturnType<typeof createClient> | null = null;

function createSupabaseClient() {
  if (_supabase) return _supabase;
  if (!supabaseUrl || !supabaseAnonKey) {
    // Log a clear warning for maintainers/builds; actual component code
    // should handle absence of `supabase` at runtime.
    // Avoid throwing here so prerendering won't fail.
    // eslint-disable-next-line no-console
    console.warn(
      'Missing Supabase environment variables. NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY are not set.'
    );
    return null;
  }

  _supabase = createClient(supabaseUrl, supabaseAnonKey);
  return _supabase;
}

export const supabase = ((): ReturnType<typeof createClient> | null => {
  // Only initialize on the client side (browser). Server-side code should
  // avoid calling Supabase during prerender unless env vars are available.
  if (typeof window === 'undefined') return null;
  return createSupabaseClient();
})();
