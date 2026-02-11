import { createClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPBASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPBASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export type Feedback = {
  id: string
  name: string
  message: string
  rating: number
  created_at: string
}
