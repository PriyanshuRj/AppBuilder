import React from 'react'

export default function Text({element}) {
  const borderRadius = `${element?.borderRadius}px`;
  const backgroundColor = `${element?.backgroundColor}`;
  const textColor = `${element?.textColor}`;
  const inputStyle = {
    borderRadius: borderRadius,
    backgroundColor: backgroundColor,
    color : textColor
  };
  return (
    <div style={inputStyle} className='cursor-pointer flex gap-4 w-full h-full items-center justify-center'>
    <input style={inputStyle} type="text" placeholder={element.placeholder} className='w-full h-full bg-gray-50 rounded-lg p-4'/>
  </div>
  )
}
