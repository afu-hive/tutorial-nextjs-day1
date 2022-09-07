import { useRouter } from 'next/router'

const Product = () => {
  const router = useRouter()
  const { name } = router.query

  return <p>Product: {name}</p>
}

export default Product
