import React from 'react'
import NavbarBottom from '../components/NavbarBottom/NavbarBottom'

function page() {
  return (
    <>
      <div className='h-screen w-screen p-5 flex'>
        <div className='bg-white/10 backdrop-blur rounded-2xl w-screen h-[80%] mt-11' >
        </div>
      </div>
      <NavbarBottom></NavbarBottom>
    </>
  )
}

export default page