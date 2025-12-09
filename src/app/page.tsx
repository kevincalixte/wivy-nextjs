"use client";
import React, { useState, useEffect } from 'react';
import { FiFacebook, FiInstagram } from "react-icons/fi";
import { FaLinkedin, FaSnapchatGhost, FaTwitter } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import Link from "next/link";
import Button from './components/Button/Button';
import Pricing from "./components/Pricing/Pricing";
import Preview from "./components/Preview/Preview";
import Feedback from "./components/Feedback/Feedback";
import Contact from "./components/Contact/Contact";
import Signin from "./components/Signin/Signin";

export default function Home() {
  const [showSignin, setShowSignin] = useState(false);
  const handlerSignIn = () => {
    setShowSignin(true);
  }
  return (
    <div className='w-screen'>
      <header className="min-h-screen bg-cover bg-center bg-[url('/img/home/home.jpg')] flex justify-center">
        <div className={`text-white flex flex-col justify-end items-center ${showSignin ? 'hidden' : ''}`}>
          <h1 className='text-2xl font-thin flex text-center lg:text-4xl '>Discover WIVY, where every conversation counts.</h1>
          <Button className="flex justify-center lg:hidden mt-10 bg-white/90 text-black " onClick={handlerSignIn} >Sign Up</Button>
          <Link href={''}>
            <IoIosArrowDown className="m-10 text-4xl animate-fade-repeat" />
          </Link>
        </div>
        {showSignin && <Signin />}
      </header>

      <main className='flex flex-col items-center text-white '>
        {/* <Preview /> */}
        <Pricing />
        <Feedback />
        <Contact />
      </main>

      <footer className='flex flex-col gap-3 justify-center items-center h-50 bg-black text-white p-10'>
        <span className="flex justify-center gap-1.5 text-2xl" >
          <p className="mb-5 text-[1.2rem]">Socials :</p>
          <Link href={''}><FiFacebook className="hover:text-blue-600" /></Link>
          <Link href={''}><FiInstagram className="hover:text-orange-600" /></Link>
          <Link href={''}><FaSnapchatGhost className="hover:text-yellow-300" /></Link>
          <Link href={''}><FaTwitter className="hover:text-blue-400" /></Link>
          <Link href={''}><FaLinkedin className="hover:text-blue-700" /></Link>
        </span>
        <span className="flex gap-1.5 [&__>a]:hover:underline">
          <Link href={''}>Terms - </Link>
          <Link href={''}>Privacy Setting - </Link>
          <Link href={''}>Cookie policy</Link>
        </span>
        <span>© 2025 Wivy. All Rights Reserved</span>
      </footer>
    </div>
  );
}
