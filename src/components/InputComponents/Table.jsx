import React from 'react'

export default function Table({element}) {
  return (
    <div className="w-full h-full rounded-lg flex items-center justify-center bg-white p-2  hover:cursor-pointer">
      <table className='w-full h-full table-auto'>
      <thead>
  <tr>
    {element.headings?.map((heading, index)=>{
      return <th key={index} className='border'>{heading}</th>
    })}
  </tr>
  </thead>
  <tbody>
    {[...Array(element.rows)].map((e,index)=>{
      return   <tr key={index }>
      {element.headings?.map((heading, index)=>{
        return <td key={index}  className='text-center border '>{heading}</td>
      })}
    </tr>
    })}

    </tbody>
  </table>
      </div>
  )
}
