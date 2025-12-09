import React from 'react'
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
    return (
        <>
            <div id='User' className='mt-18 mb-22 flex flex-col items-center'>
                <article className='flex w-[90%] h-34 bg-white/15 m-3 rounded-2xl overflow-hidden'>
                    <div className='w-3/4 h-full rounded-2xl relative '>
                        <img className='w-4 h-4 absolute bottom-2 left-2' src="/img/user/user-connected.svg" alt="" />
                        <img className='w-full h-full object-cover' src="/img/home/album-meet/meet1.jpg" alt="" />
                    </div>

                    <div className=' flex flex-col gap-3 pl-4 pt-1'>
                        <h2 className='flex gap-2 items-center'>Theo,<span>25 </span> <span>  <GiAries /></span> <span className=' w-full flex gap-1 justify-end p-2'><FaStar className='text-blue-400'></FaStar></span></h2>
                        <p className='text-sm'>Lorem ipsum dolor sit, amet consectetur adipisicing elit...</p>

                        <div className='flex gap-2'>
                            <Tag>Music</Tag>
                            <Tag>Cat</Tag>
                            <Tag>Tattoo</Tag>
                        </div>
                    </div>
                </article>
                <article className='flex w-[90%] h-34 bg-white/15 m-3 rounded-2xl overflow-hidden'>
                    <div className='w-3/4 h-full rounded-2xl relative '>
                        <img className='w-4 h-4 absolute bottom-2 left-2' src="/img/user/user-connected.svg" alt="" />
                        <img className='w-full h-full object-cover' src="/img/home/album-meet/meet2.jpg" alt="" />
                    </div>

                    <div className=' flex flex-col  gap-3 pl-4 pt-1'>
                        <h2 className='flex gap-2 items-center'>Justine,<span>25 </span> <span>  <GiTaurus /></span> <span className=' w-full flex gap-1 justify-end p-2'><FaStar className='text-blue-400'></FaStar></span></h2>
                        <p className='text-sm'>Lorem ipsum dolor sit, amet consectetur adipisicing elit...</p>

                        <div className='flex gap-2'>
                            <Tag>Music</Tag>
                            <Tag>Cat</Tag>
                            <Tag>Tattoo</Tag>
                        </div>
                    </div>
                </article>
                <article className='flex w-[90%] h-34 bg-white/15 m-3 rounded-2xl overflow-hidden'>
                    <div className='w-3/4 h-full rounded-2xl relative '>
                        <img className='w-4 h-4 absolute bottom-2 left-2' src="/img/user/user-busy.svg" alt="" />
                        <img className='w-full h-full object-cover' src="/img/home/album-meet/meet1.jpg" alt="" />
                    </div>

                    <div className=' flex flex-col  gap-3 pl-4 pt-1'>
                        <h2 className='flex gap-2 items-center'>Theo,<span>25 </span> <span>  <GiGemini /></span> <span className=' w-full flex gap-1 justify-end p-2'><FaStar className='text-blue-400'></FaStar></span></h2>
                        <p className='text-sm'>Lorem ipsum dolor sit, amet consectetur adipisicing elit...</p>

                        <div className='flex gap-2'>
                            <Tag>Music</Tag>
                            <Tag>Cat</Tag>
                            <Tag>Tattoo</Tag>
                        </div>
                    </div>
                </article>
                <article className='flex w-[90%] h-34 bg-white/15 m-3 rounded-2xl overflow-hidden'>
                    <div className='w-3/4 h-full rounded-2xl relative '>
                        <img className='w-4 h-4 absolute bottom-2 left-2' src="/img/user/user-away.svg" alt="" />
                        <img className='w-full h-full object-cover' src="/img/home/album-meet/meet1.jpg" alt="" />
                    </div>

                    <div className=' flex flex-col  gap-3 pl-4 pt-1'>
                        <h2 className='flex gap-2 items-center'>Theo,<span>25 </span> <span>  <GiAries /></span> <span className=' w-full flex gap-1 justify-end p-2'><FaStar className='text-blue-400'></FaStar></span></h2>
                        <p className='text-sm'>Lorem ipsum dolor sit, amet consectetur adipisicing elit...</p>

                        <div className='flex gap-2'>
                            <Tag>Music</Tag>
                            <Tag>Cat</Tag>
                            <Tag>Tattoo</Tag>
                        </div>
                    </div>
                </article>
                <article className='flex w-[90%] h-34 bg-white/15 m-3 rounded-2xl overflow-hidden'>
                    <div className='w-3/4 h-full rounded-2xl relative '>
                        <img className='w-4 h-4 absolute bottom-2 left-2' src="/img/user/user-away.svg" alt="" />
                        <img className='w-full h-full object-cover' src="/img/home/album-meet/meet1.jpg" alt="" />
                    </div>

                    <div className=' flex flex-col  gap-3 pl-4 pt-1'>
                        <h2 className='flex gap-2 items-center'>Theo,<span>25 </span> <span>  <GiAries /></span> <span className=' w-full flex gap-1 justify-end p-2'><FaStar className='text-blue-400'></FaStar></span></h2>
                        <p className='text-sm'>Lorem ipsum dolor sit, amet consectetur adipisicing elit...</p>

                        <div className='flex gap-2'>
                            <Tag>Music</Tag>
                            <Tag>Cat</Tag>
                            <Tag>Tattoo</Tag>
                        </div>
                    </div>
                </article>
                <article className='flex w-[90%] h-34 bg-white/15 m-3 rounded-2xl overflow-hidden'>
                    <div className='w-3/4 h-full rounded-2xl relative '>
                        <img className='w-4 h-4 absolute bottom-2 left-2' src="/img/user/user-offline.svg" alt="" />
                        <img className='w-full h-full object-cover' src="/img/home/album-meet/meet1.jpg" alt="" />
                    </div>

                    <div className=' flex flex-col  gap-3 pl-4 pt-1'>
                        <h2 className='flex gap-2 items-center'>Theo,<span>25 </span> <span>  <GiAries /></span> <span className=' w-full flex gap-1 justify-end p-2'><FaStar className='text-blue-400'></FaStar></span></h2>
                        <p className='text-sm'>Lorem ipsum dolor sit, amet consectetur adipisicing elit...</p>

                        <div className='flex gap-2'>
                            <Tag>Music</Tag>
                            <Tag>Cat</Tag>
                            <Tag>Tattoo</Tag>
                        </div>
                    </div>
                </article>
                <article className='flex w-[90%] h-34 bg-white/15 m-3 rounded-2xl overflow-hidden'>
                    <div className='w-3/4 h-full rounded-2xl relative '>
                        <img className='w-4 h-4 absolute bottom-2 left-2' src="/img/user/user-offline.svg" alt="" />
                        <img className='w-full h-full object-cover' src="/img/home/album-meet/meet1.jpg" alt="" />
                    </div>

                    <div className=' flex flex-col  gap-3 pl-4 pt-1'>
                        <h2 className='flex gap-2 items-center'>Theo,<span>25 </span> <span>  <GiAries /></span> <span className=' w-full flex gap-1 justify-end p-2'><FaStar className=''></FaStar></span></h2>
                        <p className='text-sm'>Lorem ipsum dolor sit, amet consectetur adipisicing elit...</p>

                        <div className='flex gap-2'>
                            <Tag>Music</Tag>
                            <Tag>Cat</Tag>
                            <Tag>Tattoo</Tag>
                        </div>
                    </div>
                </article>
                <article className='flex w-[90%] h-34 bg-white/15 m-3 rounded-2xl overflow-hidden'>
                    <div className='w-3/4 h-full rounded-2xl relative '>
                        <img className='w-4 h-4 absolute bottom-2 left-2' src="/img/user/user-offline.svg" alt="" />
                        <img className='w-full h-full object-cover' src="/img/home/album-meet/meet1.jpg" alt="" />
                    </div>

                    <div className=' flex flex-col  gap-3 pl-4 pt-1'>
                        <h2 className='flex gap-2 items-center'>Theo,<span>25 </span> <span>  <GiAries /></span> <span className=' w-full flex gap-1 justify-end p-2'><FaStar className=''></FaStar></span></h2>
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