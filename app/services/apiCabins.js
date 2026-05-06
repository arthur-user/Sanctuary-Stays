import supabase from "./supabase"


export async function getCabin(){
let { data, error } = await supabase
  .from('cabins')
  .select('*');
  if(error){
    console.error('Cabins unable to load')
    throw new Error('Cabins unable to load')
  }
  return data;
}