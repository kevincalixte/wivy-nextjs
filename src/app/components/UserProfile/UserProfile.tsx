import React, { useEffect } from 'react'
import NavbarBottom from '../NavbarBottom/NavbarBottom'
import { IoIosCloseCircle } from "react-icons/io";

function UserProfile({ onClose }: { onClose: () => void }) {
  // Bloque le scroll au montage de la modale et masque la navbar top
  // A modifier en UseState
  useEffect(() => {
    document.body.classList.add('overflow-hidden');
    document.getElementById('navbartop')?.classList.remove('flex');
    document.getElementById('navbartop')?.classList.add('hidden');
    document.getElementById('User')?.classList.remove('mt-18');
    return () => document.body.classList.remove('overflow-hidden');
  }, []);
  return (
    <div className='z-10 fixed h-full w-full bg-black  '>
      {/* Image + boutons navbar bottom + logo fav + block + infos */}
      <img className='absolute h-full w-full object-cover' src="/img/home/album-meet/meet1.jpg" alt="" />
      <div className='relative flex items-center justify-between p-5'>
        <h1 className='flex flex-col text-xl font-bold '>Theo, 25 <span className='text-xs'>1.8 miles away</span></h1>
        <IoIosCloseCircle onClick={onClose} className='text-3xl'></IoIosCloseCircle>
      </div>
      <div className='mx-auto relative top-90 p-5 h-[20%] w-[80%]  bg-black/50 backdrop-blur rounded-2xl   '>
        <p className='text-sm text-center '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit mollitia accusantium perspiciatis molestias laudantium nostrum laborum, distinctio facere totam alias.</p>
      </div>
      <NavbarBottom></NavbarBottom>
    </div>

  )
}

export default UserProfile