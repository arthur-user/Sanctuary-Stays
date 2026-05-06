import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = 'https://badztcmwftexfhbigcfb.supabase.co'
const SUPABASE_KEY = 'sb_publishable_9m6Xvy618h7c_LFYn12fJw_Lvm-xtWu'

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY)

export default supabase;