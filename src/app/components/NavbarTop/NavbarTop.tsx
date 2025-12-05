import Link from 'next/link'
import { PiSignInLight } from "react-icons/pi";

function NavbarTop() {
  return (
    <>
      <nav className=' flex items-center p-5 text-white absolute w-full bg-linear-to-b from-[#070301]/80 to-transparent'>
        <Link href={""} className='flex-1 z-10'><img className='w-10' src="/img/logos/wivy-app-logo-transparent.png" alt="" /></Link>
         <Link href={''} className="hidden lg:flex items-center gap-1 text-[1.2rem]">Sign in <PiSignInLight></PiSignInLight></Link>
      </nav>
    </>
  )
}

export default NavbarTop