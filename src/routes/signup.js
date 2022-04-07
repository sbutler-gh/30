// import supabase from "$lib/db"
import { variables } from '$lib/variables';

import { createClient } from '@supabase/supabase-js'

const supabase = createClient( import.meta.env.VITE_SUPABASE_URL,
    import.meta.env.VITE_SUPABASE_ANON_KEY, { fetch: (...args) => fetch(...args) })

    export async function post({ request }) {
      const body = await await request.formData();

      // const text = await request.text();

      // console.log(text);

      console.log(...body);
      console.log(body.get('id'));
    
      const parsed = { ...body }

      console.log(parsed);
    
      const { data, error } = await supabase
      .from('signups')
      .insert({ id: body.get('id'), name: body.get('name'), email: body.get('email'), phone: body.get('phone'), city: body.get('city'), state: body.get('state'), country: body.get('country'), postal: body.get('postal'), coordinates: JSON.parse(body.get('coordinates')), pledge: body.get('pledge') },)
    
    if (error) {
    return {
        status: 500,
        body: error
      }
    }
    else {
    
    return {
        status: 200,
        body: {
          data
        }
      }
    }
    
    }