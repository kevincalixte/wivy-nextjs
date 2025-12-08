import React from 'react'
import NavbarBottom from '../components/NavbarBottom/NavbarBottom';

function messages() {
  return (
    <div className='w-full min-h-screen flex flex-col items-center '>
      {/* Navbartop messages + favs */}
      <NavbarBottom />
    </div>
  )
}

export default messages