import React, { FC } from 'react'
import { Logo } from '../Icons/Logo';
import Link from 'next/link';
import { Basket } from '../Icons/Basket';
import { Profile } from '../Icons/Profile';
import { HamburgerIcon } from '../Icons/HamburgerIcon';
import { HeaderNavs } from './constants';

interface HeaderProps {
  
}

const Header: FC<HeaderProps> = ({  }) => {
  return (
    <header className='w-full flex justify-center py-4 md:py-8 border-b-2 border-[#F3F3F3] abs'>
        <div className='w-full max-w-screen-xl mx-5 md:mx-20 flex items-center justify-between'>
            <div className='flex gap-3 items-center w-40'>
                <Logo />
                <h1 className='text-black text-2xl font-bold'>Lalasia</h1>
            </div>
            <nav className=' gap-14 hidden md:flex'>
                {HeaderNavs.map((el,_i)=> <Link key={_i} href={el.href} className='text-black font-medium'>{el.value}</Link>)}
            </nav>
            <div className='gap-6 w-40 justify-end hidden md:flex'> 
                <Basket />
                <Profile />
            </div>
            <div className='flex md:hidden'>
                <HamburgerIcon />
            </div>
        </div>
    </header>
  )
}

export default Header; 