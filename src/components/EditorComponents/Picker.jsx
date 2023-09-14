import React, { useState } from 'react'
import Dropdown from '../UI/Dropdown'
import { addNewElement } from '../service/canvas.service';
import { AiFillCaretRight } from "react-icons/ai";

import { useDispatch, useSelector } from 'react-redux';
import { zoomArray, DragOptions } from '../helpers/constants';

export default function EditorPicker() {
  const [zoom, setZoom] = useState(zoomArray[8]);
  const [searchQuery, setSearchQuery] = useState("");
  const elements = useSelector((state)=>state.canvas.elements);
  const dispatch = useDispatch();

  function filterComponents(option){
    return option.title.toLowerCase().includes(searchQuery.toLowerCase());
  }
  return (
    <div className='w-[19rem] h-full bg-[#F9FBFC] flex flex-col py-4'>
      <div className='flex flex-row justify-end px-4'>
        <Dropdown selected={zoom} setSelected={setZoom} inputList={zoomArray} />
        <button className="ml-3 px-3 py-1 bg-[#DEE7FE] text-[#5147E4] flex justify-center items-center rounded ">
          <AiFillCaretRight className='mr-1 text-sm' />
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
                className="w-full py-[0.65rem] pl-12 pr-4 border-none rounded-md outline-none text-sm"
                name="search"
                onChange={(e)=>setSearchQuery(e.target.value)}
              />

            </div>
          </div>
        </div>
        </div>
        <div className='flex flex-col'>
          <span className='mt-2 px-4 text-gray-500 font-semibold text-sm'> Components </span>
          {
            DragOptions.filter(filterComponents).map((option,index)=>{
              return <div key={index} className='px-4  hover:bg-gray-200 ease-in-out duration-200'
                onClick={() => addNewElement(option.element, dispatch, elements.length)}
              > 
                <div
              className="px-4 flex gap-4 border-b border-b-[#A0B8C789] py-4 cursor-pointer"
              key={index}
            >
              <div className="h-12 min-w-[3rem] rounded flex items-center justify-center text-[1.25rem]  bg-white drop-shadow-xl shadow  font-bold">
                {option.icon}
              </div>
              <div className="text-start flex-grow">
                <p className="font-semibold text-[#1A1A1A] text-sm">{option.title}</p>
                <p className="text-[#707880] text-[0.825rem]">
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
