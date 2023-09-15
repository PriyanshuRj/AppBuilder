import React from 'react'

export default function Table({ element }) {
  const backgroundColor = `${element?.backgroundColor}`;
  const textColor = `${element?.textColor}`;
  const tableStyle = {
    backgroundColor: backgroundColor,
    color: textColor
  };

  return (
    <div style={tableStyle} className="w-full h-full rounded-lg flex items-center justify-center p-2  hover:cursor-pointer">
      <table className='w-full h-full table-auto'>
        <thead>
          <tr>
            {element.headings?.map((heading, index) => {
              return <th key={index} className='border'>{heading}</th>
            })}
          </tr>
        </thead>
        <tbody>
          {[...Array(element.rows)].map((e, index) => {
            return <tr key={index}>
              {element.headings?.map((heading, index) => {
                return <td key={index} className='text-center border '>{heading}</td>
              })}
            </tr>
          })}

        </tbody>
      </table>
    </div>
  )
}
