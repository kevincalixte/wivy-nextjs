'use client';
import React, { useState, useEffect, useRef } from 'react'
import Tag from '../Tag/Tag';
import {
    GiAries,
    GiTaurus,
    GiGemini,
    GiCancer,
    GiLeo,
    GiVirgo,
    GiLibra,
    GiScorpio,
    GiSagittarius,
    GiCapricorn,
    GiAquarius,
    GiPisces
} from "react-icons/gi";
import { FaStar, FaHeart } from "react-icons/fa";
import UserProfile from '../UserProfile/UserProfile';
import NavbarTop from '../NavbarTop/NavbarTop';

// Composant pour une card individuelle avec swipe (Hammer.js)
function UserCard({ onLike }: { onLike?: () => void }) {
    const cardRef = useRef<HTMLDivElement>(null);
    const [dragX, setDragX] = useState(0);
    const [isLiked, setIsLiked] = useState(false);
    const [isDragging, setIsDragging] = useState(false);

    useEffect(() => {
        if (!cardRef.current || typeof window === 'undefined') return;

        let hammer: HammerManager | null = null;

        // Import dynamique de Hammer.js côté client uniquement
        import('hammerjs').then((module) => {
            const Hammer = module.default;
            if (!cardRef.current) return;

            hammer = new Hammer(cardRef.current);

            // Active uniquement le pan horizontal
            hammer.get('pan').set({ direction: Hammer.DIRECTION_HORIZONTAL });

            // Pendant le swipe
            hammer.on('panmove', (e) => {
                if (e.deltaX > 0) { // Uniquement vers la droite
                    setDragX(e.deltaX);
                    setIsDragging(true);
                }
            });

            // Fin du swipe
            hammer.on('panend', (e) => {
                setIsDragging(false);
                const cardWidth = cardRef.current?.offsetWidth || 0;
                const threshold = cardWidth * 0.25; // 25% pour confirmer le like

                if (e.deltaX > threshold) {
                    // Like confirmé
                    setIsLiked(true);
                    if (onLike) onLike();
                }

                // Retour à la position initiale
                setDragX(0);
            });
        });

        // Nettoyage
        return () => {
            if (hammer) {
                hammer.destroy();
            }
        };
    }, [onLike]);

    return (
        <article
            ref={cardRef}
            style={{
                transform: `translateX(${dragX}px)`,
                transition: isDragging ? 'none' : 'transform 0.3s ease-out',
            }}
            className={`
                flex w-[90%] h-34 m-3 rounded-2xl overflow-hidden cursor-grab active:cursor-grabbing
                transition-colors duration-200
                ${dragX > 50 ? 'bg-fuchsia-500' : 'bg-white/10'}
            `}
        >
            <div className='relative w-3/4 h-full rounded-2xl'>
                <img className='w-full h-full object-cover' src="/img/home/album-meet/meet1.jpg" alt="" />
                <img className='absolute w-4 h-4 bottom-2 left-2' src="/img/user/user-connected.svg" alt="" />
                <FaStar className='absolute bottom-2 left-7 text-blue-400' />
            </div>

            <div className='flex flex-col justify-center gap-3 pl-4 pt-1'>
                <div className='flex items-center justify-between'>
                    <h2 className='flex items-center gap-2'>
                        Theo,<span>25 </span> <span><GiAries /></span>
                    </h2>
                    {isLiked && <FaHeart className='mr-5 text-fuchsia-600' />}
                </div>
                <p className='text-sm'>Lorem ipsum dolor sit, amet consectetur adipisicing elit...</p>
                <div className='flex gap-2'>
                    <Tag>Music</Tag>
                    <Tag>Cat</Tag>
                    <Tag>Tattoo</Tag>
                </div>
            </div>
        </article>
    );
}

function User() {
    const [showProfile, setShowProfile] = useState(false);
    const [showNavBarTop, setShowNavBarTop] = useState(false);

    return (
        <>
            {showNavBarTop && <NavbarTop />}
            {showProfile && <UserProfile onClose={() => { setShowProfile(false); setShowNavBarTop(true); }} />}
            <div id='User' className='flex flex-col items-center mt-18 mb-22'>
               
                <UserCard />
                <UserCard />
                <UserCard />
                <UserCard />
                <UserCard />
                <UserCard />


            </div>
        </>
    )
}

export default User