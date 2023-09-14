import React from 'react'

export default function Text({element}) {
  return (
    <div className=' bg-transparent cursor-pointer flex gap-4 w-full h-full items-center justify-center'>
    <input type="text" placeholder={element.placeholder} className='w-full h-full bg-gray-50 rounded-lg p-4'/>
  </div>
  )
}
