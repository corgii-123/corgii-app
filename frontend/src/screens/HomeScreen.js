import React, { useEffect } from 'react'
import Product from '../components/Product'
import MessageBox from '../components/MessageBox'
import LoadingBox from '../components/LoadingBox'
import { useDispatch, useSelector } from 'react-redux'
import { listProducts } from '../actions/productActions'

export default function HomeScreen() {
  const productList = useSelector(state => state.productList)
  const { loading, error, products} = productList
  const dispatch = useDispatch()
  useEffect(() => {
      dispatch(listProducts())
  }, [dispatch])
  return (
    <>
      {
        loading ? <LoadingBox /> :
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