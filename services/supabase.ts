import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://aecizubgvmruxzglnkdo.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFlY2l6dWJndm1ydXh6Z2xua2RvIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2NjgxNzkyOSwiZXhwIjoyMDgyMzkzOTI5fQ.8KOQYiyAIIqJzSGRy7NAuds35hSD7Q2pS'
export const supabase = createClient(supabaseUrl, supabaseKey)
