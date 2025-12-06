import React from 'react'
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import Button from '../Button/Button';

function Pricing() {
    return (
        <section className='min-h-screen flex flex-col justify-evenly items-center  '>
            <h2 className='font-thin text-[1.5rem]'>Unlock More Features</h2>

            <div className='flex flex-wrap justify-center gap-5 [&_li]:flex [&_li]:items-center [&_li]:gap-1.5 [&_li]:mb-2 '>
                <article className="flex flex-col gap-5 bg-white/8 px-15 py-3 rounded-2xl ">
                    <h3 className='text-[1.2rem]'>Free</h3>
                    <ul>
                        <li>
                            <IoMdCheckmarkCircleOutline className="text-green-500" />
                            <span>Unlimited chat</span>
                        </li>
                        <li>
                            <IoMdCheckmarkCircleOutline className="text-gray-400" />
                            <span>Unlimited swipes</span>
                        </li>
                        <li>
                            <IoMdCheckmarkCircleOutline className="text-gray-400" />
                            <span>See who visited you</span>
                        </li>
                        <li>
                            <IoMdCheckmarkCircleOutline className="text-gray-400" />
                            <span>Ghost mode</span>
                        </li>
                        <li>
                            <IoMdCheckmarkCircleOutline className="text-gray-400" />
                            <span>Basic matching</span>
                        </li>
                    </ul>
                </article>
                <article className="flex flex-col gap-5 bg-white/8 px-15 py-3 rounded-2xl ">
                    <h3 className='text-[1.2rem]'>Premium</h3>
                    <ul>
                        <li>
                            <IoMdCheckmarkCircleOutline className="text-green-500" />
                            <span>All Free features</span>
                        </li>
                        <li>
                            <IoMdCheckmarkCircleOutline className="text-green-500" />
                            <span>See who liked you</span>
                        </li>
                        <li>
                            <IoMdCheckmarkCircleOutline className="text-green-500" />
                            <span>Profile boost</span>
                        </li>
                        <li>
                            <IoMdCheckmarkCircleOutline className="text-green-500" />
                            <span>Incognito mode</span>
                        </li>
                        <li>
                            <IoMdCheckmarkCircleOutline className="text-green-500" />
                            <span>Ad-free experience</span>
                        </li>
                    </ul>
                </article>
            </div>

            {/* <Button className="bg-white/8 ">Learn More</Button> */}
        </section>
    )
}

export default Pricing