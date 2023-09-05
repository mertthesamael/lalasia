import PrimaryButton from '@/components/Buttons/PrimaryButton';
import React, { FC } from 'react'
import axios from 'axios'
import { url } from 'inspector';
interface SignupFormProps {
  
}

const SignupForm: FC<SignupFormProps> = ({  }) => {

  const signupHandler = async( formData: FormData) => {
    "use server";
    const email = formData.get('email')
    const {data:test} = await axios.post(`http://localhost:3000/api/auth/signup`,formData,{url:'http://localhost:3000/auth/signup'})
    console.log(test)
    
  }
  return (
    <form action={signupHandler} className='w-full h-max flex flex-col items-center gap-6 bg-transparent'>
        <input type='text' name='email' placeholder='e-mail' className='placeholder:font-medium bg-transparent w-full border text-black py-1 px-2 focus:outline-primaryColor/80 rounded-sm'></input>
        <input type='password' name='password' placeholder='password' className='placeholder:font-medium bg-transparent w-full border text-black py-1 px-2 focus:outline-primaryColor/80 rounded-sm'></input>
        <input type='text' placeholder='password' className='placeholder:font-medium bg-transparent w-full border text-black py-1 px-2 focus:outline-primaryColor/80 rounded-sm'/>
        <PrimaryButton type='submit' text='Signup' className='font-medium'/>
    </form>
  )
}

export default SignupForm;