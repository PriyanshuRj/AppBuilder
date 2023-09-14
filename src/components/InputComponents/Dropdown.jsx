import React from 'react'

export default function Dropdown({ element }) {
  return (
    <div className="w-full h-full rounded-lg flex items-center justify-center bg-white p-2  hover:cursor-pointer">
    <select className="h-full z-50 w-full border-none bg-transparent focus:outline-none hover:cursor-pointer">
      <option
        className="flex items-center justify-center bg-slate-50 m-auto w-full h-full"
        selected
      >
        <div className="flex items-center justify-center bg-slate-50 m-auto w-full h-full">
          <span className="label-text">{element?.label}</span>
        </div>
      </option>
      {element.options?.map((option,index)=>{
         return <option
         key={index}
         className="flex items-center justify-center bg-slate-50 m-auto w-full h-full"
       >
         <div className="flex items-center justify-center bg-slate-50 m-auto w-full h-full">
           <span className="label-text">{option}</span>
         </div>
       </option>
      })}
    </select>
  </div>
  )
}
