import React from 'react'
import Link from 'next/link';
import { IoMdClose } from "react-icons/io";

function Signin() {

    return (
        <div className='flex flex-col w-full h-screen bg-black/60 fixed z-10'>
            <Link href={''} className='self-end m-5 text-3xl'><IoMdClose /></Link>
        </div>
    )
}

export default Signin