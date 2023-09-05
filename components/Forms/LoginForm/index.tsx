import PrimaryButton from '@/components/Buttons/PrimaryButton';
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import axios from 'axios';
import { cookies } from 'next/headers';
import React, { FC } from 'react'

interface LoginFormProps {
  
}
const LoginForm: FC<LoginFormProps> = async({  }) => {
  const loginHandler = async( formData: FormData) => {
    "use server";
    const email = String(formData.get('email'))
    const password = String(formData.get('password'))
    const supabase = createRouteHandlerClient({ cookies })
    try{

      const data = await supabase.auth.signInWithPassword({
        email,
        password,
      })
    }catch(err){
      console.log(err)
    }
  
  }
  return (
    <form action={loginHandler} method='post' className='w-full h-max flex flex-col items-center gap-6 bg-transparent'>
        <input name='email' type='text' placeholder='e-mail' className='placeholder:font-medium bg-transparent w-full border text-black py-1 px-2 focus:outline-primaryColor/80 rounded-sm'></input>
        <input name='password'type='password' placeholder='password' className='placeholder:font-medium bg-transparent w-full border text-black py-1 px-2 focus:outline-primaryColor/80 rounded-sm'></input>
        <PrimaryButton type='submit' text='Login' className='font-medium'/>
    </form>
  )
}

export default LoginForm;