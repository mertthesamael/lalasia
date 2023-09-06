"use client"
import { loginHandler } from '@/actions/auth';
import PrimaryButton from '@/components/Buttons/PrimaryButton';
import { toast } from 'react-toastify';
import React, { FC } from 'react'
import { useUserStore } from '@/store/useUserStore';
interface LoginFormProps {
  
}

const LoginForm: FC<LoginFormProps> = ({  }) => {

  const { handleUser,user } = useUserStore()
  const clientAction = async(formData:FormData) => {
    const data = await loginHandler(formData)
    //BURAYA BAKCAM ??
      if(data){
        data.error ? toast.error(data.error) : handleUser(data.user)
      }

  }

  return (
    <form action={clientAction}  className='w-full h-max flex flex-col items-center gap-6 bg-transparent'>
        <input name='email' type='text' placeholder='e-mail' className='placeholder:font-medium bg-transparent w-full border text-black py-1 px-2 focus:outline-primaryColor/80 rounded-sm'></input>
        <input name='password'type='password' placeholder='password' className='placeholder:font-medium bg-transparent w-full border text-black py-1 px-2 focus:outline-primaryColor/80 rounded-sm'></input>
        <PrimaryButton type='submit' text='Login' className='font-medium'/>
    </form>
  )
}

export default LoginForm;