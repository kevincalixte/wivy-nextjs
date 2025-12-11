import React from 'react'
import Link from 'next/link';

import { IoMdClose } from "react-icons/io";

import Button from '../Button/Button';

// Modale d'inscription/connexion
// onClose: fonction pour fermer la modale
function SignUp({ onClose }: { onClose: () => void }) {
    return (
        <div className='fixed z-10 flex flex-col w-screen h-screen bg-black/60'>
            <Link href={''} className='self-end m-5 text-3xl' onClick={onClose}><IoMdClose /></Link>
            <form action='' className='flex flex-col items-center gap-3 m-10 p-5 bg-black/50 rounded-md [&_div]:p-2 [&_input]:focus:outline-0 [&_input]:border-b-2 [&_input]:border-b-gray-400 [&_textarea]:focus:outline-0'>
                <h2 className='text-[1.2rem]'>Sign Up</h2>
                <div className='flex gap-10'>
                    <input type='text' name='name' placeholder='Your name' className='w-46' />
                </div>
                <div>
                    <input type='text' name='age' placeholder='Your Birth Day' className='w-46' />
                </div>
                <div>
                    <input type='number' name='phone' placeholder='Your Phone Number' className='w-46' />
                </div>
                <div>
                    <input type='pass' name='phone' placeholder='Your Password' className='w-46' />
                </div>
                <div className="flex flex-col items-center w-full gap-2 mt-4">
                    <Button className="bg-white/90 text-black">Create Account</Button>
                    <div className="flex items-center w-full">
                        <hr className="grow border-t border-gray-400" />
                        <span className="mx-5 font-bold text-gray-300">OR</span>
                        <hr className="grow border-t border-gray-400" />
                    </div>
                    <Link href={'/welcome'}><Button className="w-40 border text-white">Sign In</Button></Link>
                </div>
            </form>
        </div>
    )
}

export default SignUp