// page.server.js
import { supabase } from '$lib/supabaseClient';

export async function post({ body }) {
  const { email, password } = body;

  try {
    const { user, error } = await supabase.auth.signIn({
      email,
      password
    });
    
    if (error) {
      console.error('Login error:', error.message);
      return {
        status: 400,
        body: { error: 'Invalid credentials' }
      };
    } else if(user) {
      console.log('Login Succesfull');
    }

    return {
      status: 200,
      body: { user }
    };
  } catch (error) {
    console.error('Server error:', error.message);
    return {
      status: 500,
      body: { error: 'Server error' }
    };
  }
}
