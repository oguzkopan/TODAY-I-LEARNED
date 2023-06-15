import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://znpizmmmgkumeuwmfpln.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpucGl6bW1tZ2t1bWV1d21mcGxuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODYzODM5MzgsImV4cCI6MjAwMTk1OTkzOH0.5uzyboAMctTBFZq5b9FOfzYcGRSO5QljjI2ERKJz3Mc";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
