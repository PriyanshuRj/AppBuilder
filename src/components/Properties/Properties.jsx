import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { selectElement } from '../../redux/slices/canvas.slice';
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai';
export default function Properties({ elementProperties }) {
    const dispatch = useDispatch();

    function setElementProperties(value) {
        dispatch(selectElement(value));
    }

    if (elementProperties.component === "button") {
        return (

            <div className='flex flex-col w-full'>
                <div className='flex flex-row w-full px-4 justify-between mb-2 items-center'>
                    <label className='text-gray-500 text-sm text-medium'>
                        Button Color
                    </label>
                    <input className='px-2 py-2 bg-gray-50 rounded-lg' value={elementProperties.backgroundColor} onChange={(e) => setElementProperties({ ...elementProperties, backgroundColor: e.target.value })} />
                </div>
                <div className='flex flex-row w-full px-4 justify-between mb-2 items-center'>
                    <label className='text-gray-500 text-sm text-medium'>
                        Text Color
                    </label>
                    <input className='px-2 py-2 bg-gray-50 rounded-lg' value={elementProperties.textColor} onChange={(e) => setElementProperties({ ...elementProperties, textColor: e.target.value })} />
                </div>
                <div className='flex flex-row w-full px-4 justify-between mb-2 items-center'>
                    <label className='text-gray-500 text-sm text-medium'>
                        Border Radius
                    </label>
                    <input className='px-2 py-2 bg-gray-50 rounded-lg' value={elementProperties.borderRadius} onChange={(e) => setElementProperties({ ...elementProperties, borderRadius: e.target.value })} />
                </div>
                <div className='flex flex-row w-full px-4 justify-between mb-2 items-center'>
                    <label className='text-gray-500 text-sm text-medium'>
                        Value
                    </label>
                    <input className='px-2 py-2 bg-gray-50 rounded-lg' value={elementProperties.value} onChange={(e) => setElementProperties({ ...elementProperties, value: e.target.value })} />
                </div>
            </div>
        )
    }

    if (elementProperties.component === "input") {
        return (

            <div className='flex flex-col w-full'>
                <div className='flex flex-row w-full px-4 justify-between mb-2 items-center'>
                    <label className='text-gray-500 text-sm text-medium'>
                        Placeholder
                    </label>
                    <input className='px-2 py-2 bg-gray-50 rounded-lg' value={elementProperties.placeholder} onChange={(e) => setElementProperties({ ...elementProperties, placeholder: e.target.value })} />
                </div>
                <div className='flex flex-row w-full px-4 justify-between mb-2 items-center'>
                    <label className='text-gray-500 text-sm text-medium'>
                        Background Color
                    </label>
                    <input className='px-2 py-2 bg-gray-50 rounded-lg' value={elementProperties.backgroundColor} onChange={(e) => setElementProperties({ ...elementProperties, backgroundColor: e.target.value })} />
                </div>
                <div className='flex flex-row w-full px-4 justify-between mb-2 items-center'>
                    <label className='text-gray-500 text-sm text-medium'>
                        Text Color
                    </label>
                    <input className='px-2 py-2 bg-gray-50 rounded-lg' value={elementProperties.textColor} onChange={(e) => setElementProperties({ ...elementProperties, textColor: e.target.value })} />
                </div>
                <div className='flex flex-row w-full px-4 justify-between mb-2 items-center'>
                    <label className='text-gray-500 text-sm text-medium'>
                        Border Radius
                    </label>
                    <input className='px-2 py-2 bg-gray-50 rounded-lg' value={elementProperties.borderRadius} onChange={(e) => setElementProperties({ ...elementProperties, borderRadius: e.target.value })} />
                </div>
            </div>
        )
    }

    if (elementProperties.component === "dropdown") {
        function updateOption(value, index) {
            var options = [...elementProperties.options];
            options[index] = value;

            setElementProperties({ ...elementProperties, options });
        }
        function addOption() {
            var options = [...elementProperties.options];
            options.push("");

            setElementProperties({ ...elementProperties, options });
        }
        return (

            <div className='flex flex-col w-full'>
                <div className='flex flex-row w-full px-4 justify-between mb-2 items-center'>
                    <label className='text-gray-500 text-sm text-medium'>
                        Background Color
                    </label>
                    <input className='px-2 py-2 bg-gray-50 rounded-lg' value={elementProperties.backgroundColor} onChange={(e) => setElementProperties({ ...elementProperties, backgroundColor: e.target.value })} />
                </div>
                <div className='flex flex-row w-full px-4 justify-between mb-2 items-center'>
                    <label className='text-gray-500 text-sm text-medium'>
                        Text Color
                    </label>
                    <input className='px-2 py-2 bg-gray-50 rounded-lg' value={elementProperties.textColor} onChange={(e) => setElementProperties({ ...elementProperties, textColor: e.target.value })} />
                </div>

                {elementProperties.options.map((opt, index) => {
                    return <div key={index} className='flex flex-row w-full px-4 justify-between mb-2 items-center'>
                        <label className='text-gray-500 text-sm text-medium'>
                            Option {index + 1}
                        </label>
                        <input className='px-2 py-2 bg-gray-50 rounded-lg' value={opt} onChange={(e) => updateOption(e.target.value, index)} />
                    </div>
                })}
                <div className='mx-4 mb-4 flex flex-row justify-between'>
                    Add Option
                    <AiOutlinePlusCircle className='text-green-500 w-5 h-5' onClick={addOption} />
                </div>

            </div>
        )
    }
    
    if (elementProperties.component === "table") {
        function updateOption(value, index) {
            var headings = [...elementProperties.headings];
            headings[index] = value;

            setElementProperties({ ...elementProperties, headings });
        }
        function addOption() {
            var headings = [...elementProperties.headings];
            headings.push("");

            setElementProperties({ ...elementProperties, headings });
        }

        function changeRow(value) {
            var rows = elementProperties.rows + value;
            setElementProperties({ ...elementProperties, rows })
        }
        return (

            <div className='flex flex-col w-full'>
                <div className='flex flex-row w-full px-4 justify-between mb-2 items-center'>
                    <label className='text-gray-500 text-sm text-medium'>
                        Background Color
                    </label>
                    <input className='px-2 py-2 bg-gray-50 rounded-lg' value={elementProperties.backgroundColor} onChange={(e) => setElementProperties({ ...elementProperties, backgroundColor: e.target.value })} />
                </div>
                <div className='flex flex-row w-full px-4 justify-between mb-2 items-center'>
                    <label className='text-gray-500 text-sm text-medium'>
                        Text Color
                    </label>
                    <input className='px-2 py-2 bg-gray-50 rounded-lg' value={elementProperties.textColor} onChange={(e) => setElementProperties({ ...elementProperties, textColor: e.target.value })} />
                </div>
                {elementProperties.headings.map((hed, index) => {
                    return <div key={index} className='flex flex-row w-full px-4 justify-between mb-2 items-center'>
                        <label className='text-gray-500 text-sm text-medium'>
                            Head {index + 1}
                        </label>
                        <input className='px-2 py-2 bg-gray-50 rounded-lg' value={hed} onChange={(e) => updateOption(e.target.value, index)} />
                    </div>
                })}
                <div className='mx-4 mb-4 flex flex-row justify-between'>
                    Add Column
                    <AiOutlinePlusCircle className='text-green-500 w-5 h-5' onClick={addOption} />
                </div>

                <div className='mx-4 mb-4 flex flex-row justify-between'>
                    Rows
                    <div className='flex flex-row items-center'>

                        <AiOutlinePlusCircle className='text-green-500 w-5 h-5 mr-2' onClick={(e) => changeRow(1)} />
                        {elementProperties.rows}
                        <AiOutlineMinusCircle className='text-red-500 w-5 h-5 ml-2' onClick={(e) => changeRow(-1)} />
                    </div>
                </div>

            </div>
        )
    }

}
