import Link from 'next/link'
import React from 'react'
import userAvater from '@/assets/user.png'
import Image from 'next/image'
import NavLink from './NavLink'
const Navbar = () => {
  return (
    <div className='flex justify-between container mx-auto'>
        <div></div>
        <ul className='flex justify-between items-center gap-4'>
          <li>
            <NavLink href={'/'}>Home</NavLink>
            </li>
          <li>
            <NavLink href={'/about'}>About</NavLink>
            </li>
          <li>
            <NavLink href={'/career'}>Career</NavLink>
            </li>
        </ul>
      <div className='flex gap-4'>
        <Image src={userAvater} alt="User Avata" />
        <button className='btn bg-gray-900 text-white px-7'><Link href={'/login'}>Login</Link></button>
      </div>
    </div>
  )
}

export default Navbar
