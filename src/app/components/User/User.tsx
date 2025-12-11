import React, { useState } from 'react'
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

function User() {
    const [showProfile, setShowProfile] = useState(false);
    return (
        <>
            {showProfile && <UserProfile onClose={() => setShowProfile(false)} />}
            <div onClick={() => setShowProfile(true)} id='User' className='flex flex-col items-center mt-18 mb-22'>

                <article className='flex w-[90%] h-34 m-3 rounded-2xl overflow-hidden bg-white/10'>
                    <div className='relative w-3/4 h-full rounded-2xl'>
                        <img className='absolute w-4 h-4 bottom-2 left-2' src="/img/user/user-connected.svg" alt="" />
                        <FaStar className='absolute bottom-2 left-7 text-blue-400' />
                        <img className='w-full h-full object-cover' src="/img/home/album-meet/meet1.jpg" alt="" />
                    </div>

                    <div className='flex flex-col justify-center gap-3 pl-4 pt-1'>
                        <h2 className='flex items-center gap-2'>Theo,<span>25 </span> <span><GiAries /></span> <span className='flex justify-end w-full gap-1 p-2'></span></h2>
                        <p className='text-sm'>Lorem ipsum dolor sit, amet consectetur adipisicing elit...</p>
                        <div className='flex gap-2'>
                            <Tag>Music</Tag>
                            <Tag>Cat</Tag>
                            <Tag>Tattoo</Tag>
                        </div>
                    </div>
                </article>
                <article className='flex w-[90%] h-34 m-3 rounded-2xl overflow-hidden bg-white/10'>
                    <div className='relative w-3/4 h-full rounded-2xl'>
                        <img className='absolute w-4 h-4 bottom-2 left-2' src="/img/user/user-connected.svg" alt="" />
                        <FaStar className='absolute bottom-2 left-7 text-blue-400' />
                        <img className='w-full h-full object-cover' src="/img/home/album-meet/meet1.jpg" alt="" />
                    </div>

                    <div className='flex flex-col justify-center gap-3 pl-4 pt-1'>
                        <h2 className='flex items-center gap-2'>Theo,<span>25 </span> <span><GiAries /></span> <span className='flex justify-end w-full gap-1 p-2'></span></h2>
                        <p className='text-sm'>Lorem ipsum dolor sit, amet consectetur adipisicing elit...</p>
                        <div className='flex gap-2'>
                            <Tag>Music</Tag>
                            <Tag>Cat</Tag>
                            <Tag>Tattoo</Tag>
                        </div>
                    </div>
                </article>
                <article className='flex w-[90%] h-34 m-3 rounded-2xl overflow-hidden bg-white/10'>
                    <div className='relative w-3/4 h-full rounded-2xl'>
                        <img className='absolute w-4 h-4 bottom-2 left-2' src="/img/user/user-connected.svg" alt="" />
                        <FaStar className='absolute bottom-2 left-7 text-blue-400' />
                        <img className='w-full h-full object-cover' src="/img/home/album-meet/meet1.jpg" alt="" />
                    </div>

                    <div className='flex flex-col justify-center gap-3 pl-4 pt-1'>
                        <h2 className='flex items-center gap-2'>Theo,<span>25 </span> <span><GiAries /></span> <span className='flex justify-end w-full gap-1 p-2'></span></h2>
                        <p className='text-sm'>Lorem ipsum dolor sit, amet consectetur adipisicing elit...</p>
                        <div className='flex gap-2'>
                            <Tag>Music</Tag>
                            <Tag>Cat</Tag>
                            <Tag>Tattoo</Tag>
                        </div>
                    </div>
                </article>
                <article className='flex w-[90%] h-34 m-3 rounded-2xl overflow-hidden bg-white/10'>
                    <div className='relative w-3/4 h-full rounded-2xl'>
                        <img className='absolute w-4 h-4 bottom-2 left-2' src="/img/user/user-connected.svg" alt="" />
                        <FaStar className='absolute bottom-2 left-7 text-blue-400' />
                        <img className='w-full h-full object-cover' src="/img/home/album-meet/meet1.jpg" alt="" />
                    </div>

                    <div className='flex flex-col justify-center gap-3 pl-4 pt-1'>
                        <h2 className='flex items-center gap-2'>Theo,<span>25 </span> <span><GiAries /></span> <span className='flex justify-end w-full gap-1 p-2'></span></h2>
                        <p className='text-sm'>Lorem ipsum dolor sit, amet consectetur adipisicing elit...</p>
                        <div className='flex gap-2'>
                            <Tag>Music</Tag>
                            <Tag>Cat</Tag>
                            <Tag>Tattoo</Tag>
                        </div>
                    </div>
                </article>
                <article className='flex w-[90%] h-34 m-3 rounded-2xl overflow-hidden bg-white/10'>
                    <div className='relative w-3/4 h-full rounded-2xl'>
                        <img className='absolute w-4 h-4 bottom-2 left-2' src="/img/user/user-connected.svg" alt="" />
                        <FaStar className='absolute bottom-2 left-7 text-blue-400' />
                        <img className='w-full h-full object-cover' src="/img/home/album-meet/meet1.jpg" alt="" />
                    </div>

                    <div className='flex flex-col justify-center gap-3 pl-4 pt-1'>
                        <h2 className='flex items-center gap-2'>Theo,<span>25 </span> <span><GiAries /></span> <span className='flex justify-end w-full gap-1 p-2'></span></h2>
                        <p className='text-sm'>Lorem ipsum dolor sit, amet consectetur adipisicing elit...</p>
                        <div className='flex gap-2'>
                            <Tag>Music</Tag>
                            <Tag>Cat</Tag>
                            <Tag>Tattoo</Tag>
                        </div>
                    </div>
                </article>
                <article className='flex w-[90%] h-34 m-3 rounded-2xl overflow-hidden bg-white/10'>
                    <div className='relative w-3/4 h-full rounded-2xl'>
                        <img className='absolute w-4 h-4 bottom-2 left-2' src="/img/user/user-connected.svg" alt="" />
                        <FaStar className='absolute bottom-2 left-7 text-blue-400' />
                        <img className='w-full h-full object-cover' src="/img/home/album-meet/meet1.jpg" alt="" />
                    </div>

                    <div className='flex flex-col justify-center gap-3 pl-4 pt-1'>
                        <h2 className='flex items-center gap-2'>Theo,<span>25 </span> <span><GiAries /></span> <span className='flex justify-end w-full gap-1 p-2'></span></h2>
                        <p className='text-sm'>Lorem ipsum dolor sit, amet consectetur adipisicing elit...</p>
                        <div className='flex gap-2'>
                            <Tag>Music</Tag>
                            <Tag>Cat</Tag>
                            <Tag>Tattoo</Tag>
                        </div>
                    </div>
                </article>
                <article className='flex w-[90%] h-34 m-3 rounded-2xl overflow-hidden bg-white/10'>
                    <div className='relative w-3/4 h-full rounded-2xl'>
                        <img className='absolute w-4 h-4 bottom-2 left-2' src="/img/user/user-connected.svg" alt="" />
                        <FaStar className='absolute bottom-2 left-7 text-blue-400' />
                        <img className='w-full h-full object-cover' src="/img/home/album-meet/meet1.jpg" alt="" />
                    </div>

                    <div className='flex flex-col justify-center gap-3 pl-4 pt-1'>
                        <h2 className='flex items-center gap-2'>Theo,<span>25 </span> <span><GiAries /></span> <span className='flex justify-end w-full gap-1 p-2'></span></h2>
                        <p className='text-sm'>Lorem ipsum dolor sit, amet consectetur adipisicing elit...</p>
                        <div className='flex gap-2'>
                            <Tag>Music</Tag>
                            <Tag>Cat</Tag>
                            <Tag>Tattoo</Tag>
                        </div>
                    </div>
                </article>
                <article className='flex w-[90%] h-34 m-3 rounded-2xl overflow-hidden bg-white/10'>
                    <div className='relative w-3/4 h-full rounded-2xl'>
                        <img className='absolute w-4 h-4 bottom-2 left-2' src="/img/user/user-connected.svg" alt="" />
                        <FaStar className='absolute bottom-2 left-7 text-blue-400' />
                        <img className='w-full h-full object-cover' src="/img/home/album-meet/meet1.jpg" alt="" />
                    </div>

                    <div className='flex flex-col justify-center gap-3 pl-4 pt-1'>
                        <h2 className='flex items-center gap-2'>Theo,<span>25 </span> <span><GiAries /></span> <span className='flex justify-end w-full gap-1 p-2'></span></h2>
                        <p className='text-sm'>Lorem ipsum dolor sit, amet consectetur adipisicing elit...</p>
                        <div className='flex gap-2'>
                            <Tag>Music</Tag>
                            <Tag>Cat</Tag>
                            <Tag>Tattoo</Tag>
                        </div>
                    </div>
                </article>
                <article className='flex w-[90%] h-34 m-3 rounded-2xl overflow-hidden bg-white/10'>
                    <div className='relative w-3/4 h-full rounded-2xl'>
                        <img className='absolute w-4 h-4 bottom-2 left-2' src="/img/user/user-connected.svg" alt="" />
                        <FaStar className='absolute bottom-2 left-7 text-blue-400' />
                        <img className='w-full h-full object-cover' src="/img/home/album-meet/meet1.jpg" alt="" />
                    </div>

                    <div className='flex flex-col justify-center gap-3 pl-4 pt-1'>
                        <h2 className='flex items-center gap-2'>Theo,<span>25 </span> <span><GiAries /></span> <span className='flex justify-end w-full gap-1 p-2'></span></h2>
                        <p className='text-sm'>Lorem ipsum dolor sit, amet consectetur adipisicing elit...</p>
                        <div className='flex gap-2'>
                            <Tag>Music</Tag>
                            <Tag>Cat</Tag>
                            <Tag>Tattoo</Tag>
                        </div>
                    </div>
                </article>
                <article className='flex w-[90%] h-34 m-3 rounded-2xl overflow-hidden bg-white/10'>
                    <div className='relative w-3/4 h-full rounded-2xl'>
                        <img className='absolute w-4 h-4 bottom-2 left-2' src="/img/user/user-connected.svg" alt="" />
                        <FaStar className='absolute bottom-2 left-7 text-blue-400' />
                        <img className='w-full h-full object-cover' src="/img/home/album-meet/meet1.jpg" alt="" />
                    </div>

                    <div className='flex flex-col justify-center gap-3 pl-4 pt-1'>
                        <h2 className='flex items-center gap-2'>Theo,<span>25 </span> <span><GiAries /></span> <span className='flex justify-end w-full gap-1 p-2'></span></h2>
                        <p className='text-sm'>Lorem ipsum dolor sit, amet consectetur adipisicing elit...</p>
                        <div className='flex gap-2'>
                            <Tag>Music</Tag>
                            <Tag>Cat</Tag>
                            <Tag>Tattoo</Tag>
                        </div>
                    </div>
                </article>
            </div>
        </>
    )
}

export default User