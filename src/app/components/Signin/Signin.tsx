import React from 'react'
import Link from 'next/link';
import { IoMdClose } from "react-icons/io";
import Button from '../Button/Button';

function Signin() {

    return (
        <div className='flex flex-col w-full h-screen bg-black/60 fixed z-10'>
            <Link href={''} className='self-end m-5 text-3xl'><IoMdClose /></Link>
            <form action='' className='flex flex-col items-center gap-3 [&_div]:p-2 [&_input]:focus:outline-0 [&_input]:border-b-2 [&_input]:border-b-gray-400 [&_textarea]:focus:outline-0'>
                <div className='flex gap-10'>
                    <input type='text' name='name' placeholder='Your name' className='w-38' />
                </div>
                <div>
                    <input type='number' name='age' placeholder='Your Age' className='w-38' />
                </div>
                <div>
                    <input type='number' name='phone' placeholder='Your Phone Number' className='w-38' />
                </div>
                <div>
                    <Button className=' bg-white text-black rounded'>Create</Button>
                </div>
                <div>
                    <Button className=' bg-white text-black rounded'>Sign In</Button>
                </div>
            </form>
        </div>
    )
}

export default Signin