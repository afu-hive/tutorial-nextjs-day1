import React from 'react'

const Input = ({
  label,
  placeholder,
  error,
  type = "text",
  onChange,
  value,
}) => {
  return (
    <div className="text-md sm:w-6/12 w-full">
      <label className="font-medium w-full">
        {label}
      </label>
      <div>
        <input
          className="w-full mt-2 p-2 rounded-md border border-gray-400"
          type={type}
          onChange={onChange}
          placeholder={placeholder}
          value={value}
        />
      </div>
      <p class="text-red-500 text-xs italic mt-1 ml-2">
        {error}
      </p>
    </div>
  )
}

export default Input
