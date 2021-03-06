import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Product from '../components/Product'
import MessageBox from '../components/MessageBox'
import LoadingBox from '../components/LoadingBox'

export default function HomeScreen() {
  const [products, setProducts] = useState([])
  const [error, setError] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const getProducts = async () => {
    setIsLoading(true)
    try {
      const {data} = await axios.get('/api/products')
      setProducts(data)
      setIsLoading(false)
    } catch (err) {
      setError(err.message)
      setIsLoading(false)
    }
  }
  useEffect(() => {
      getProducts()
  }, [])
  return (
    <>
      
      {
        isLoading ? <LoadingBox /> :
        error ? <MessageBox message={error} /> :
          <div className="row center">
            {products.map(product => (
              <Product key={product._id} product={product} />
            ))}
          </div>
      }
      
    </>
  )
}