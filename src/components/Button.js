import React from 'react'

// sm, md, lg, xl, 2xl

const Button = ({
  text,
  color = 'blue',
  onClick,
}) => {
  const colors = {
    red: "bg-red-400 hover:bg-red-500",
    green: "bg-green-400 hover:bg-green-500",
    blue: "bg-blue-400 hover:bg-blue-500",
  }

  return (
    <div
      onClick={onClick}
      className={"sm:w-72 w-full text-center text-white py-4 rounded-full text-md cursor-pointer " + colors[color]}
    >
      {text}
    </div>
  )
}

export default Button
