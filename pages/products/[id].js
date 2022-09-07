import axios from 'axios'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

const Product = () => {
  const router = useRouter()
  const [product, setProduct] = useState({})
  const { id } = router.query

  const getSingleProduct = () => {
    axios.get(`https://jsonplaceholder.typicode.com/photos/${id}`).then((data) => {
      setProduct(data.data)
    }).catch((e) => {
      console.log('e:', e)
    })
  }

  useEffect(() => {
    getSingleProduct()
  }, [id])

  return (
    <div>
      {Object.keys(product).length === 0 ? (
        <div>Loading...</div>
      ) : (
        <>
          <div className="mb-2 font-bold">id: {product.id}</div>
          <div className="text-gray-600 font-bold">Description:</div>
          <p className="text-gray-600 mb-5">{product.title}</p>
          <div class="bg-gray-200 rounded-lg">
            <img className="mx-auto object-fill w-96" src={product.url} />
          </div>
        </>
      )}
    </div>
  )
}

export default Product
