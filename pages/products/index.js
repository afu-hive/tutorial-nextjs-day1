import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Product from '../../src/components/Product'

const index = () => {
  const [products, setProducts] = useState([])
  // component mount ให้ทำอะไร
  // component unmount ให้ทำอะไร
  // component state X change ให้ทำอะไร

  const getProducts = () => {
    axios.get('https://jsonplaceholder.typicode.com/photos').then((data) => {
      setProducts(data.data)
    }).catch((e) => {
      console.log('e:', e)
    })
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
        {products.map(({ title, id, thumbnailUrl, url }) => (
          <Product
            key={id}
            name={title}
            thumbnailUrl={thumbnailUrl}
            url={url}
            id={id}
          />
        ))}
      </div>
    </div>
  )
}

export default index
