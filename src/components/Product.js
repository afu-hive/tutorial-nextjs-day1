import { useRouter } from 'next/router'
import React from 'react'

const Product = ({
  name,
  thumbnailUrl,
  url,
  id,
  price,
}) => {
  const router = useRouter()
  const openProduct = () => {
    router.push(`/products/${id}`)
  }

  return (
    <div onClick={openProduct} class="cursor-pointer max-w-sm rounded overflow-hidden shadow-lg">
      <div className="h-48 bg-gray-200 m-auto flex flex-col justify-center items-center">
        <img class="object-cover w-full" src={thumbnailUrl} />
      </div>
      <div class="px-6 py-4">
        <p class="text-gray-700 text-base font-medium">
          {name}
        </p>
        <div className="h-1" />
        <p class="text-gray-700 font-normal text-xs">
          {price} ฿
        </p>
      </div>
    </div>
  )
}

export default Product
