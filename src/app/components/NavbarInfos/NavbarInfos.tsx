'use client';
import React, { useState, useEffect } from 'react'

function NavbarInfos() {
    // Animation de la navbarinfos
    const [isVisible, setIsVisible] = useState(false);
    const REPEAT_INTERVAL = 15000; // 15 secondes repeat a supprimer
    const DISPLAY_DURATION = 5000; // 5 secondes d'affichage

    useEffect(() => {
     
        const showNotification = () => {
            setIsVisible(true);
        
            setTimeout(() => {
                setIsVisible(false);
            }, DISPLAY_DURATION);
        };

        showNotification(); 

        const interval = setInterval(showNotification, REPEAT_INTERVAL);

        return () => clearInterval(interval);
    }, []);

    return (
        <div id='navbarinfos-container' className='flex justify-center'>
            <nav
                id='navbarinfos'
                className={`
                    flex items-center justify-between pr-6 fixed w-[70%] rounded-4xl mt-20 h-10 bg-white/20 text-white z-10 backdrop-blur
                    transition-all duration-500 ease-in-out
                    ${isVisible 
                        ? 'opacity-100 translate-y-0' 
                        : 'opacity-0 -translate-y-4 pointer-events-none'
                    }
                `}
            >
                <div className='rounded-l-2xl w-1/4 overflow-hidden'><img className='w-full h-10 object-cover' src="/img/home/album-meet/meet2.jpg" alt="" /></div>
                <p className='text-xs w-3/4 text-center'>Justine visited your profile</p>
            </nav>
        </div>
    )
}

export default NavbarInfos