import { useRouter } from 'next/router'
import React from 'react'

const Product = ({
  name,
  thumbnailUrl,
  url,
  id,
}) => {
  const router = useRouter()
  const openProduct = () => {
    router.push(`/products/${id}`)
  }

  return (
    <div onClick={openProduct} class="cursor-pointer max-w-sm rounded overflow-hidden shadow-lg">
      <img class="w-full" src={thumbnailUrl} />
      <div class="px-6 py-4">
        <p class="text-gray-700 text-base">
          {name}
        </p>
      </div>
    </div>
  )
}

export default Product
