import PrimaryButton from '@/components/Buttons/PrimaryButton';
import React, { FC } from 'react'

interface LoginFormProps {
  
}

const LoginForm: FC<LoginFormProps> = ({  }) => {
  return (
    <form className='w-full h-max flex flex-col items-center gap-6 bg-transparent'>
        <input type='text' placeholder='e-mail' className='placeholder:font-medium bg-transparent w-full border text-black py-1 px-2 focus:outline-primaryColor/80 rounded-sm'></input>
        <input type='password' placeholder='password' className='placeholder:font-medium bg-transparent w-full border text-black py-1 px-2 focus:outline-primaryColor/80 rounded-sm'></input>
        <PrimaryButton type='submit' text='Login' className='font-medium'/>
    </form>
  )
}

export default LoginForm;