import React from 'react'

export default function Button({ element }) {
  const borderRadius = `${element?.borderRadius}px`;
  const backgroundColor = `${element?.backgroundColor}`;
  const textColor = `${element?.textColor}`;
  const buttonStyle = {
    borderRadius: borderRadius,
    backgroundColor: backgroundColor,
    color: textColor
  };

  return (
    <button
      className={`text-slate-50 font-semibold tracking-wider w-full h-full hover:cursor-pointer`}
      style={buttonStyle}
    >
      {element.value}
    </button>
  );
};

