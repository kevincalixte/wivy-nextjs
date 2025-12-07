'use client'
import React, { useEffect } from 'react'
import NavbarBottom from '../components/NavbarBottom/NavbarBottom';

function welcome() {
  // Retire la classe 'absolute' de la navbar
  useEffect(() => {
    const navbartop = document.getElementById('navbartop');
    const navbartopcontainer = document.getElementById('navbartopcontainer');
    navbartop?.classList.remove('absolute', 'bg-linear-to-b', 'from-black', 'to-transparent','w-full');
    navbartop?.classList.add('fixed', 'bg-white/10','rounded-4xl','h-12','w-[90%]', 'justify-center');
    // navbartopcontainer?.classList.add('flex','justify-center');
  }, []);
  return (
    <>
      <div className='text-white'>
        {/* Configuration du profil */}
        {/* Page principale 'if last_mode is list'*/}
        {/* Load account (navbartop: profile picture..., navbarbottom: messages, notifications,...) */}
        {/* Load profiles (cards)*/}
        {/* Load */}
      </div>
      <NavbarBottom></NavbarBottom>
    </>
  )
}

export default welcome