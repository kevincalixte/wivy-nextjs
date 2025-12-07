'use client'
import React, { useEffect } from 'react'
import NavbarBottom from '../components/NavbarBottom/NavbarBottom';

function welcome() {
  // Retire la classe 'absolute' de la navbar
  useEffect(() => {
    const navbartop = document.getElementById('navbartop');
    navbartop?.classList.remove('absolute', 'bg-linear-to-b', 'from-black', 'to-transparent');
    navbartop?.classList.add('fixed', 'bg-white/10');
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