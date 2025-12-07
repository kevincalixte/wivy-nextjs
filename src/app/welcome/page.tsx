'use client'
import React, { useEffect } from 'react'
import NavbarBottom from '../components/NavbarBottom/NavbarBottom';

function welcome() {
  // Retire la classe 'absolute' de la navbar
  useEffect(() => {
    const navbartop = document.getElementById('navbartop');
    navbartop?.classList.remove('absolute');
  }, []);
  return (
    <>
      <div className='w-full min-h-screen bg-black z-50 text-red-500'>
        
      </div>
      <NavbarBottom></NavbarBottom>
    </>
  )
}

export default welcome