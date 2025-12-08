'use client';

import Link from 'next/link';
import { PiSignInLight } from "react-icons/pi";
import { usePathname } from 'next/navigation';
import { FaRegEye } from "react-icons/fa";
import { FiSearch } from 'react-icons/fi';

function NavbarTop() {
  const pathname = usePathname();
  const isWelcome = pathname === '/welcome';
  return (
    <div id='navbartop-container' className='flex justify-center'>
      <nav
        id='navbartop'
        className={
          isWelcome
            ? 'flex items-center p-3 fixed w-[90%] backdrop-blur rounded-4xl mt-5 h-10 bg-white/20 text-white z-10'
            : 'flex items-center p-5 text-white absolute w-full bg-linear-to-b from-black to-transparent'
        }
      >
        <Link href={'/'} className=''>{isWelcome ?
          <span className='flex items-center gap-1.5 '>
            <FiSearch></FiSearch>
            <p className='text-xs opacity-50'>What are you looking for today ? </p>
          </span>
          : ''}</Link>
        <Link href={'/'} className='flex-1 z-10'><img className='w-10' src={isWelcome ? undefined : "/img/logos/wivy-app-logo-transparent.png"} alt="" /></Link>
        <Link href={''} className='hidden lg:flex items-center gap-1 text-[1.2rem]'>Sign Up <PiSignInLight /></Link>
        {isWelcome ? <FaRegEye /> : null}
      </nav>
    </div>
  );
}

export default NavbarTop;