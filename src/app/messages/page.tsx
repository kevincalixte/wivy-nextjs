import React from 'react'
import NavbarBottom from '../components/NavbarBottom/NavbarBottom';
import UserMessage from '../components/UserMessage/UserMessage';

function messages() {
  return (
    <div className='w-full flex flex-col'>
      <UserMessage/>
      <NavbarBottom />
    </div>
  )
}

export default messages