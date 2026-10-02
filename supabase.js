"use strict";

const SUPABASE_URL = "https://zfyupsynynjnyhmaspwp.supabase.co";

const SUPABASE_PUBLISHABLE_KEY =
  "sb_publishable_zLGYifhWlDpdSxJk5QfQng_ys9xFKsv";

const supabaseClient = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_PUBLISHABLE_KEY,
  {
    auth: {
      persistSession: true,
      autoRefreshToken: true,
      detectSessionInUrl: true,
    },
  },
);
