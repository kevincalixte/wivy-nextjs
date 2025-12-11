"use client";

import React, { useState } from 'react';
import Link from "next/link";

import { FiFacebook, FiInstagram } from "react-icons/fi";
import { FaLinkedin, FaSnapchatGhost, FaTwitter } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

import Button from './components/Button/Button';
import Contact from "./components/Contact/Contact";
import Feedback from "./components/Feedback/Feedback";
import Preview from "./components/Preview/Preview";
import Pricing from "./components/Pricing/Pricing";
import SignUp from "./components/SignUp/SignUp"

export default function Home() {
  // Affiche la modale d'inscription/connexion
  const [showSignUp, setShowSignUp] = useState(false);
  return (
    <>
      <header className="min-h-screen flex justify-center bg-cover bg-center bg-[url('/img/home/home.jpg')]">
        <div className={`flex flex-col justify-end items-center text-white ${showSignUp ? 'hidden' : ''}`}>
          <h1 className='flex text-center text-2xl lg:text-4xl font-thin'>Discover WIVY, where every conversation counts.</h1>
          <Button className="flex justify-center mt-10 lg:hidden bg-white/90 text-black" onClick={() => setShowSignUp(true)} >Sign Up</Button>
          <Link href={''}><IoIosArrowDown className="my-10 text-4xl animate-fade-repeat" /></Link>
        </div>
        {showSignUp && <SignUp onClose={()=> setShowSignUp(false)}/>}
      </header>

      <main className='flex flex-col items-center text-white'>
        {/* <Preview /> */}
        <Pricing />
        <Feedback />
        <Contact />
      </main>

      <footer className='flex flex-col justify-center items-center gap-3 h-50 p-10 bg-black text-white'>
        <span className="flex justify-center gap-1.5 text-2xl">
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
    </>
  );
}
