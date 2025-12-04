import Link from 'next/link'
import { FiSearch, FiUsers, FiHeart } from 'react-icons/fi';
import Button from '../Button/Button';

function NavbarTop() {
  return (
    <>
      <nav className=' flex items-center p-5 text-white absolute w-full bg-linear-to-b from-black/70 to-transparent'>
        <Link href={""} className='flex-1 z-10'><img className='w-10' src="/img/logos/wivy-app-logo-transparent.png" alt="" /></Link>
        <ul className='flex gap-3 z-10 [&>li>a]:flex [&>li>a]:items-center [&>li>a]:gap-1 '>
          <li><Link href={('')} ><FiSearch />Meet</Link></li>
          <li><Link href={('')} ><FiUsers />Friends</Link></li>
          <li><Link href={('')} ><FiHeart />Love</Link></li>
        </ul>
      </nav>
    </>
  )
}

export default NavbarTop