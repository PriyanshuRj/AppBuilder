import React, { useState } from 'react'
import Dropdown from '../UI/Dropdown'

import { AiFillCaretRight, AiOutlineTable } from "react-icons/ai";
import {BiChevronDown} from 'react-icons/bi';
const zoomArray = ["10", "20", "30", "40", "50", "60", "70", "80", "82.2", "90", "100"];
const DragOptions = [
  {
    icon: 'Aa',
    title:'Text Input',
    subTitle:'Supports Markdown or HTML.'
  },
  {
    icon:  <p className=" bg-blue-500  text-slate-100 px-1.5 py-0.5 rounded m-auto flex items-center justify-center text-[9px] font-medium">
    ACTION
  </p>,
    title:'Button',
    subTitle:'Trigger actions like run queries, export data etc.'
  },
  {
    icon: <div className="w-5 h-5 bg-slate-900 text-slate-100 rounded flex items-center justify-center">
    <BiChevronDown />
  </div>,
    title:'Dropdown',
    subTitle:'Select from a set of options, with a dropdown.'
  },
  {
    icon: <div className="rounded flex items-center justify-center text-[#8A9097]">
    <AiOutlineTable className="w-6 h-6"/>
  </div>,
    title:'Table',
    subTitle:'Display tabular data with pagination.'
  }
];
export default function EditorPicker() {
  const [zoom, setZoom] = useState(zoomArray[8]);
  return (
    <div className='w-[22rem] h-full bg-[#f9fbfc] flex flex-col py-4'>
      <div className='flex flex-row justify-end px-4'>
        <Dropdown selected={zoom} setSelected={setZoom} inputList={zoomArray} />
        <button className="ml-3 px-3 py-1 bg-[#DEE7FE] text-[#5147E4] flex justify-center items-center rounded ">
          <AiFillCaretRight className='mr-1' />
          <p>Preview</p>
        </button>
      </div>
      <div className="mt-10 flex flex-col items-start  gap-4">
        <div className='px-4 w-full'>
        <div className="border border-[#D9E0E6] rounded-md flex w-full ">
          <div>
            <div className="w-full relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute top-0 bottom-0 w-6 h-6 my-auto text-slate-900 left-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                type="text"
                placeholder="Search Components"
                className="w-full py-2 pl-12 pr-4 border-none rounded-md outline-none "
                name="searchValue"
              />

            </div>
          </div>
        </div>
        </div>
        <div className='flex flex-col'>
          <span className='px-4 text-gray-500 font-semibold mb-4'> Components </span>
          {
            DragOptions.map((option,index)=>{
              return <div className='px-4  hover:bg-gray-200 ease-in-out duration-200'> 
                <div
              className="px-4 flex gap-4 border-b border-b-[#A0B8C789] py-4 cursor-pointer"
              key={index}
            >
              <div className="w-16 h-16 min-w-[4rem] rounded font-medium flex items-center justify-center  bg-white drop-shadow-lg shadow  ">
                {option.icon}
              </div>
              <div className="text-start flex-grow">
                <p className="font-semibold text-[#1A1A1A]">{option.title}</p>
                <p className="text-[#707880]">
                  {option.subTitle}
                </p>
              </div>
            </div>
            </div>
            })
          }
        </div>
      </div>
    </div>
  )
}
