import React from 'react'
import Link from 'next/link';
import { IoMdClose } from "react-icons/io";
import Button from '../Button/Button';

function Signin() {

    return (
        <div className='flex flex-col w-full h-screen bg-black/60 fixed z-10'>
            <Link href={''} className='self-end m-5 text-3xl'><IoMdClose /></Link>
            <form action='' className='flex flex-col bg-black/50 p-5 m-10 rounded-3xl items-center gap-3 [&_div]:p-2 [&_input]:focus:outline-0 [&_input]:border-b-2 [&_input]:border-b-gray-400 [&_textarea]:focus:outline-0'>
                <div className='flex gap-10'>
                    <input type='text' name='name' placeholder='Your name' className='w-46' />
                </div>
                <div>
                    <input type='number' name='age' placeholder='Your Age' className='w-46' />
                </div>
                <div>
                    <input type='number' name='phone' placeholder='Your Phone Number' className='w-46' />
                </div>
                <div className="flex flex-col items-center gap-2 w-full mt-4">
                    <Button className=" bg-white/90 text-black ">Create Account</Button>
                    <div className="flex items-center w-full">
                        <hr className="grow border-t border-gray-400" />
                        <span className="mx-5 text-gray-300 font-bold">OR</span>
                        <hr className="grow border-t border-gray-400" />
                    </div>
                    <Button className="w-40 border text-white ">Sign In</Button>
                </div>
            </form>
        </div>
    )
}

export default Signin