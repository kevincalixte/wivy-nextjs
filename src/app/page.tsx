import { FiFacebook, FiInstagram } from "react-icons/fi";
import { FaLinkedin, FaSnapchatGhost, FaTwitter } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import Link from "next/link";
import Button from './components/Button/Button';
import Pricing from "./components/Pricing/Pricing";
export default function Home() {

  return (
    <>
      <header className="w-full min-h-screen bg-cover bg-center bg-[url('/img/home/home.jpg')] flex justify-center">
        <div className='text-white flex flex-col justify-end items-center '>
          <h1 className='text-2xl font-thin flex text-center lg:text-4xl '>Discover WIVY, where every conversation counts.</h1>
          <Button className="flex justify-center lg:hidden mt-10 bg-white/90 text-black " >Sign in</Button>
          <Link href={''}>
            <IoIosArrowDown className="m-10 text-4xl animate-fade-repeat" />
          </Link>
        </div>
      </header>

      <main className='flex flex-col items-center w-full text-white bg-[#070301]'>
        <Pricing />
      </main>

     
    </>
  );
}
