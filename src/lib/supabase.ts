import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://zhytwqnrxeifmvhwpvkx.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpoeXR3cW5yeGVpZm12aHdwdmt4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE3NjY5MDAsImV4cCI6MjA1NzM0MjkwMH0.qzwxP7pa26kdkb1Lbdppcqd9DPXszcBJBOwjLgYj-0g'

export const supabase = createClient(supabaseUrl, supabaseKey)
