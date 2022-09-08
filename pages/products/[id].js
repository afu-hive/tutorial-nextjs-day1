import axios from 'axios'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../../src/firebase'
import getImage from '../../src/functions/getImage'

const Product = () => {
  const router = useRouter()
  const [product, setProduct] = useState({})
  const { id } = router.query

  const getSingleProduct = async () => {
    if (id) {
      const docRef = doc(db, 'products', id)
      const docSnap = await getDoc(docRef)
      if (docSnap.exists()) {
        setProduct({ id, ...docSnap.data() })
      } else {
        console.log("No such document!")
      }
    }
    // axios.get(`https://jsonplaceholder.typicode.com/photos/${id}`).then((data) => {
    //   setProduct(data.data)
    // }).catch((e) => {
    //   console.log('e:', e)
    // })
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
          <div className="text-gray-600 font-bold">name:</div>
          <p className="text-gray-600 mb-5">{product.name}</p>
          <div className="text-gray-600 font-bold">price:</div>
          <p className="text-gray-600 mb-5">{product.price}</p>
          <div className="bg-gray-200 rounded-lg">
            <img className="mx-auto object-fill w-8/12" src={getImage(product.id)} />
          </div>
        </>
      )}
    </div>
  )
}

export default Product
