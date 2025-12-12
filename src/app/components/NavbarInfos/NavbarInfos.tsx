import React from 'react'

function NavbarInfos() {
    return (
        <div id='navbarinfos-container' className='flex justify-center'>
            <nav
                id='navbarinfos'
                className=
                'flex items-center justify-between pr-6 fixed w-[70%] rounded-4xl mt-20 h-10 bg-white/20 text-white z-10 backdrop-blur'
            >
                <div className='rounded-l-2xl w-1/4 overflow-hidden'><img className='w-full h-10 object-cover' src="/img/home/album-meet/meet2.jpg" alt="" /></div>
                <p className='text-xs w-3/4 text-center'>Justine visited your profile</p>
            </nav>
        </div>
    )
}

export default NavbarInfos