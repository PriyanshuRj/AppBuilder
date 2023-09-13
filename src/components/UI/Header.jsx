import React from 'react'
import {GiHamburgerMenu} from 'react-icons/gi';
export default function Header() {
  return (
    <div className='flex flex-row  items-center px-5 py-3'>
      <GiHamburgerMenu  className='h-6 w-6'/>
      <span className='font-semibold text-lg ml-4'> Design Board</span>
      <span className='font-semibold text-xl ml-1 text-[#ACB0BC]'> (Draft)</span>
    </div>
  )
}
