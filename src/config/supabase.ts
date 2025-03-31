import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://dpbctcgeydubqpjqmvcz.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRwYmN0Y2dleWR1YnFwanFtdmN6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE3OTIzOTUsImV4cCI6MjA1NzM2ODM5NX0.sV56dSbiBUFfwskPrSo1XmUYaONSzqfuKTfoB6Zs3FE';

export const supabase = createClient(supabaseUrl, supabaseKey);
