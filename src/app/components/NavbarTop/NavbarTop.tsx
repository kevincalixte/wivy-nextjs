'use client';

import Link from 'next/link';
import { PiSignInLight } from "react-icons/pi";
import { usePathname } from 'next/navigation';

function NavbarTop() {
  const pathname = usePathname();
  const isWelcome = pathname === '/welcome';
  return (
    <div id='navbartop-container' className='flex justify-center'>
      <nav
        id='navbartop'
        className={
          isWelcome
            ? 'flex items-center p-5 text-white fixed bg-white/10 rounded-4xl h-12 w-[90%] mt-5 justify-center'
            : 'flex items-center p-5 text-white absolute w-full bg-linear-to-b from-black to-transparent'
        }
      >
        <Link href={''} className={isWelcome ? 'flex' : 'hidden'}>
          <div className='rounded-full w-10 h-10 overflow-hidden'><img className='w-full h-full object-cover  ' src="/img/home/album-meet/meet1.jpg" alt="" /></div>
          <p></p>
        </Link>
        <Link href={'/'} className='flex-1 z-10'><img className='w-10' src={isWelcome ? '' : "/img/logos/wivy-app-logo-transparent.png"} alt="" /></Link>
        <Link href={''} className="hidden lg:flex items-center gap-1 text-[1.2rem]">Sign in <PiSignInLight /></Link>
      </nav>
    </div>
  );
}

export default NavbarTop;