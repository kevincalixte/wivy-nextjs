import Link from 'next/link'
import { FiSearch, FiUsers, FiHeart, FiMessageCircle, FiMessageSquare, FiHome } from 'react-icons/fi';
import { IoMdSync } from "react-icons/io";

function NavbarBottom() {
  return (
    <>
      <nav className='= items-center justify-between p-3 fixed bottom-0 w-full h-15  bg-black/85 text-white'>
        <ul className='flex gap-3 justify-evenly w-full text-2xl'>
          <li><Link href={""} className="flex items-center gap-1"><FiHome /></Link></li>
          <li><Link href={""} className="flex items-center gap-1"><FiMessageSquare /></Link></li>
          <li><Link href={""} className="flex items-center gap-1"><FiSearch /></Link></li>
          <li><Link href={""} className="flex items-center gap-1">< IoMdSync /></Link></li>
        </ul>
      </nav>
    </>
  )
}

export default NavbarBottom