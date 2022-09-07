import React from 'react'
import Product from '../../src/components/Product'

const productList = []
for (let i = 0; i < 100; i++) {
  productList.push({ name: `product-${i}`, id: i })
}

const index = () => {
  return (
    <div>
      <div className="grid xl:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4">
        {productList.map(({ name, id }) => (
          <Product key={id} name={name} />
        ))}
      </div>
    </div>
  )
}

export default index
