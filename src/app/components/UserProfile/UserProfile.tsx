import React, { useEffect } from 'react'
import NavbarBottom from '../NavbarBottom/NavbarBottom'
import { IoIosCloseCircle } from "react-icons/io";

function UserProfile({ onClose }: { onClose: () => void }) {
  // A faire : Bloque le scroll au montage de la modale et masque la navbar top (overflow hidden sur body)
  return (
    <div className='fixed z-10 w-full h-full bg-black'>

      <div>
        <img className='absolute w-full h-full object-cover' src="/img/home/album-meet/meet1.jpg" alt="" />
      </div>

      <div className='relative'>
        <div className='flex items-center justify-between p-5'>
          <h1 className='flex flex-col font-bold text-xl'>Theo, 25 <span className='text-xs'>1.8 miles away</span></h1>
          <IoIosCloseCircle onClick={onClose} className='text-3xl' />
        </div>
      </div>

      <div className='relative w-full h-[20%]'>
        <div>
          {/* Informations */}
        </div>
      </div>

      <NavbarBottom onProfile={true}></NavbarBottom>
    </div>


  )
}

export default UserProfile