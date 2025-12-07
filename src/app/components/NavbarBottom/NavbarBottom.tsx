import Link from 'next/link'
import { FiSearch, FiUsers, FiHeart, FiMessageCircle, FiMessageSquare, FiHome, FiUser } from 'react-icons/fi';
import { IoMdSync } from "react-icons/io";

function NavbarBottom() {
  return (
    <div className='flex justify-center'>
      <nav className=' flex items-center p-3 fixed w-[90%] rounded-4xl bottom-0 mb-5 h-15 bg-white/10 text-white'>
        <ul className='flex gap-3 justify-evenly w-full text-2xl'>
          <li><Link href={""} className="flex items-center gap-1"><FiHome /></Link></li>
          <li><Link href={""} className="flex items-center gap-1"><FiMessageSquare /></Link></li>
          <li><Link href={""} className="flex items-center gap-1"><FiSearch /></Link></li>
          <li><Link href={""} className="flex items-center gap-1">< IoMdSync /></Link></li>
          <li><Link href={""} className="flex items-center gap-1">< FiUser /></Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default NavbarBottom