'use client';
import Link from 'next/link';

import { PiSignInLight } from "react-icons/pi";
import { usePathname } from 'next/navigation';
import { FaRegEye } from "react-icons/fa";
import { FiSearch } from 'react-icons/fi';

function NavbarTop() {
  // Changer le style de la NavbarTop en fonction de la page
  const pathname = usePathname();
  const isWelcome = pathname === '/welcome';
  const isMessages = pathname === '/messages';
  const isAccount = pathname === '/account';
  const isFavorites = pathname === '/favorites';
  return (

    <div id='navbartop-container' className='flex justify-center'>
      <nav
        id='navbartop'
        className={
          isWelcome
            ? 'fixed z-10 flex items-center w-[90%] h-10 mt-5 p-3 rounded-4xl backdrop-blur bg-white/20 text-white'
            : isMessages
              ? 'absolute w-full'
              : isAccount
                ? 'absolute w-full'
                : isFavorites
                  ? 'absolute w-full'
                  : 'absolute w-full flex items-center p-5 bg-linear-to-b from-black to-transparent text-white'
        }
      >
        {/* Page Welcome */}
        <Link href={'/'} className=''>
          {isWelcome ?
            <span className='flex items-center gap-1.5'>
              <FiSearch />
              <p className='text-sm opacity-50'>What are you looking for today ?</p>
            </span>
            : ''}
        </Link>

        {/* Page Messages */}
        <Link href={'/'} className=''>
          {isMessages ?
            <div className='flex justify-evenly p-5'>
              <span className='text-xl'>Messages</span>
            </div>
            : ''}
        </Link>

        {/* Page Account */}
        <Link href={'/'} className=''>
          {isAccount ?
            <div className='flex justify-evenly p-5'>
              <span className='text-xl'>Account</span>
            </div>
            : ''}
        </Link>

        {/* Page Favorites */}
        <Link href={'/'} className=''>
          {isFavorites ?
            <div className='flex justify-evenly p-5'>
              <span className='text-xl'>Favorites</span>
            </div>
            : ''}
        </Link>

        <Link href={'/'} className='flex-1 z-10'>
          {/* Ne pas afficher le logo pour ces pages */}
          {!(isWelcome || isMessages || isAccount || isFavorites) && (
            <img className='w-10' src="/img/logos/wivy-app-logo-transparent.png" alt="" />
          )}
        </Link>
        <Link href={''} className='hidden lg:flex items-center gap-1 text-[1.2rem]'>Sign Up <PiSignInLight /></Link>
        {/* Si Welcome: logo visites */}
        {isWelcome ? <FaRegEye /> : null}
      </nav>
    </div>
  );
}

export default NavbarTop;