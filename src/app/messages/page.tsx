import React from 'react'
import NavbarBottom from '../components/NavbarBottom/NavbarBottom';
import UserMessage from '../components/UserMessage/UserMessage';

function messages() {
  return (
    <div className='w-full min-h-screen flex flex-col items-center '>
      {/* Navbartop messages + favs */}
      <UserMessage/>
      <NavbarBottom />
    </div>
  )
}

export default messages