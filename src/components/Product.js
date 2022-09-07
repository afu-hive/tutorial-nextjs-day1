import React from 'react'

const Product = ({
  name,
}) => {
  return (
    <div className="w-full p-2 h-56">
      <div className="w-full h-full bg-gray-300 rounded-md">
        {name}
      </div>
    </div>
  )
}

export default Product
