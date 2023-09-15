import {  AiOutlineTable } from "react-icons/ai";
import {BiChevronDown} from 'react-icons/bi';
const zoomArray = ["10", "20", "30", "40", "50", "60", "70", "80", "82.2", "90", "100"];
const DragOptions = [
  {
    icon: 'Aa',
    title:'Text Input',
    subTitle:'Supports Markdown or HTML.',
    element : "input"
  },
  {
    icon:  <p className=" bg-blue-500  text-slate-100 px-1 py-0.5 rounded m-auto flex items-center justify-center text-[7px] ">
    ACTION
  </p>,
    title:'Button',
    subTitle:'Trigger actions like run queries, export data etc.',
    element : "button"
  },
  {
    icon: <div className="w-5 h-5 bg-slate-900 text-slate-100 rounded flex items-center justify-center">
    <BiChevronDown />
  </div>,
    title:'Dropdown',
    subTitle:'Select from a set of options, with a dropdown.',
    element : "dropdown"
  },
  {
    icon: <div className="rounded flex items-center justify-center text-[#8A9097]">
    <AiOutlineTable className="w-6 h-6"/>
  </div>,
    title:'Table',
    subTitle:'Display tabular data with pagination.',
    element : "table"
  }
];
const gridItemWidth = 20;
const gridItemHeight = 20;
const gridCols = 20;
export {zoomArray, DragOptions, gridItemWidth, gridItemHeight,gridCols };