import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = 'https://badztcmwftexfhbigcfb.supabase.co'
const SUPABASE_KEY = 'sb_publishable_9m6Xvy618h7c_LFYn12fJw_Lvm-xtWu'

export const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY)

