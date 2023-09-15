import React from 'react'
import { GiHamburgerMenu } from 'react-icons/gi';
export default function Header() {
  return (
    <div className='flex flex-row  items-center px-8 py-5'>
      <GiHamburgerMenu className='h-6 w-6' />
      <span className='font-semibold text-sm ml-4'> Design Board</span>
      <span className='font-semibold text-sm ml-1 text-[#ACB0BC]'> (Draft)</span>
    </div>
  )
}
