import { createClient, type SupabaseClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://tpnnoqheuwibflctpqdd.supabase.co";

const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRwbm5vcWhldXdpYmZsY3RwcWRkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjI1OTkwMDksImV4cCI6MjAzODE3NTAwOX0.3cgoPG4fwLwpmYA9eartysxXSuFUqr9ROoVeqf-n3QI";

const supabase: SupabaseClient = createClient(supabaseUrl, supabaseKey);

export default supabase;
