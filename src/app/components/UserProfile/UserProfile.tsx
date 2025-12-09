import React, { useEffect } from 'react'
import NavbarBottom from '../NavbarBottom/NavbarBottom'

function UserProfile() {
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
    <div className='z-10 fixed h-full w-full bg-black '>
      {/* Image + boutons navbar bottom + logo fav + block + infos */}
      <img className='h-full w-full object-cover' src="/img/home/album-meet/meet1.jpg" alt="" />
      <h1 className=''>Name</h1>
      <NavbarBottom></NavbarBottom>
    </div>

  )
}

export default UserProfile