import React, { FC } from 'react'
import { Logo } from '../Icons/Logo';
import Link from 'next/link';
import { Basket } from '../Icons/Basket';
import { Profile } from '../Icons/Profile';
import { HamburgerIcon } from '../Icons/HamburgerIcon';
import { HeaderNavs } from './constants';
import Brand from '../Brand';
import HeaderNav from '../Navs/HeaderNav';

interface HeaderProps {
  
}

const Header: FC<HeaderProps> = ({  }) => {
  return (
    <header className='w-full flex justify-center py-4 md:py-8 border-b-2 border-[#F3F3F3] relative'>
        <div className='w-full max-w-screen-xl mx-5 md:mx-20 flex items-center justify-between'>
            <Link href={'/'}>
                <Brand />
            </Link>
            <nav className=' gap-14 hidden lg:flex'>
                {HeaderNavs.map((el,_i)=> <HeaderNav key={_i} value={el.value} id={el.id} href={el.href}/>)}
            </nav>
            <div className='gap-6 w-40 justify-end hidden lg:flex'> 
                <Basket />
                <Profile />
            </div>
            <div className='flex lg:hidden'>
                <HamburgerIcon />
            </div>
        </div>
    </header>
  )
}

export default Header; 