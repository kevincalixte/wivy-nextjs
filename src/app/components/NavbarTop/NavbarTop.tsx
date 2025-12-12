'use client';
import Link from 'next/link';
import { useState } from 'react';

import { PiSignInLight } from "react-icons/pi";
import { usePathname } from 'next/navigation';
import { FaRegEye, FaStar } from "react-icons/fa";
import { FiSearch, FiArrowLeft } from 'react-icons/fi';
import { GiAries } from 'react-icons/gi';

function NavbarTop() {
  // Changer le style de la NavbarTop en fonction de la page
  const pathname = usePathname();
  const isWelcome = pathname === '/welcome';
  const isMessages = pathname === '/messages';
  const isAccount = pathname === '/account';
  const isFavorites = pathname === '/favorites';
  const isChat = pathname === '/chat';

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
                  : isChat
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

        {/* Page Chat */}
        <Link href={'/'} className=''>
          {isChat ?
            <div className='p-5'>
              <div className='flex overflow-hidden rounded-2xl bg-white/20'>
                <div className='relative w-1/3'>
                  <img className='w-full h-15 object-cover rounded-l-2xl' src="/img/home/album-meet/meet2.jpg" alt="" />
                </div>
                <div className='relative flex items-center w-full ml-3 gap-1.5'>
                  <div>
                    <img className='w-4 h-4 left-2 bottom-2' src="/img/user/user-connected.svg" alt="" />
                  </div>
                  <h2 className='flex items-center gap-2'>Justine,<span>25 </span> <span><GiAries /></span></h2>
                  <FaStar className='text-blue-400' />
                  <Link href={'/messages'} className='absolute right-3 text-2xl'><FiArrowLeft /></Link>
                </div>
              </div>
            </div>
            : ''}
        </Link>

        <Link href={'/'} className='flex-1 z-10'>
          {/* Ne pas afficher le logo pour ces pages */}
          {!(isWelcome || isMessages || isAccount || isFavorites || isChat) && (
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