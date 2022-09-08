import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import Product from '../../src/components/Product'
import { db } from '../../src/firebase'
import getImage from '../../src/functions/getImage'

const index = () => {
  const [products, setProducts] = useState([])
  // component mount ให้ทำอะไร
  // component unmount ให้ทำอะไร
  // component state X change ให้ทำอะไร

  const getProducts = async () => {
    // axios.get('https://jsonplaceholder.typicode.com/photos').then((data) => {
    //   setProducts(data.data)
    // }).catch((e) => {
    //   console.log('e:', e)
    // })
    const querySnapshot = await getDocs(collection(db, 'products'))
    const productData = []
    querySnapshot.forEach((doc) => {
      productData.push({ id: doc.id, ...doc.data() })
    })
    setProducts(productData)
  }

  useEffect(() => {
    getProducts()

    return () => {
      console.log('unmount')
    }
  }, [])

  return (
    <div>
      <div className="grid xl:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4">
        {products.map(({ id, name, price }) => (
          <Product
            key={id}
            name={name}
            price={price}
            id={id}
            url={getImage(id)}
            thumbnailUrl={getImage(id)}
          />
        ))}
      </div>
    </div>
  )
}

export default index
