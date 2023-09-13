import React, {useState} from 'react'
import Dropdown from '../UI/Dropdown'

import { AiFillCaretRight } from "react-icons/ai";
const zoomArray = ["10", "20", "30", "40", "50", "60", "70", "80", "82.2", "90", "100"]
export default function EditorPicker() {
  const [zoom, setZoom] = useState(zoomArray[8]);
  return (
    <div className='w-64 h-full bg-[#f9fbfc] flex flex-col p-4'>
      <div className='flex flex-row justify-end'>
        <Dropdown selected={zoom} setSelected={setZoom} inputList={zoomArray}/>
        <button className="ml-3 bg-[#DEE7FE] text-[#5147E4] flex items-center justify-center px-3 py-1 rounded ">
        <AiFillCaretRight className='mr-1' />
        <p>Preview</p>
      </button>
      </div>
    </div>
  )
}
