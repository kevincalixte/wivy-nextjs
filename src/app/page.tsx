import { FiFacebook, FiInstagram } from "react-icons/fi";
import { FaLinkedin, FaSnapchatGhost, FaTwitter } from "react-icons/fa";
import Button from './components/Button/Button';
import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";

export default function Home() {

  return (
    <>
      <header className="w-full h-[70vh] bg-cover bg-center bg-[url('/img/home/home.jpg')] flex justify-center">
        <div className='text-white flex flex-col justify-end '>
          <h1 className='text-2xl font-thin flex text-center lg:text-4xl'>Discover WIVY, where every conversation counts.</h1>
          <Button className="flex justify-center pt-10 lg:hidden" >Sign in</Button>
        </div>
      </header>

      <main className=' flex justify-center w-full h-screen bg-[#070301]'>
        <IoIosArrowDown className="mt-20 text-white text-4xl"></IoIosArrowDown>
      </main>

      <footer className='flex flex-col gap-3 justify-center items-center w-full h-50 bg-black/90 text-white p-10'>
        <span className="flex justify-center gap-1.5 text-2xl" >
          <p className="mb-5 text-[1.2rem]">Socials :</p>
          <Link href={''}> <FiFacebook className="hover:text-blue-600"></FiFacebook></Link>
          <Link href={''}> <FiInstagram className="hover:text-orange-600"></FiInstagram></Link>
          <Link href={''}><FaSnapchatGhost className="hover:text-yellow-300"></FaSnapchatGhost></Link>
          <Link href={''}> <FaTwitter className="hover:text-blue-400"></FaTwitter></Link>
          <Link href={''}><FaLinkedin className="hover:text-blue-700"></FaLinkedin></Link>
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
