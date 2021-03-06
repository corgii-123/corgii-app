import React, { useEffect } from 'react'
import Rating from '../components/Rating'
import {Link} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import MessageBox from '../components/MessageBox'
import LoadingBox from '../components/LoadingBox'
import { detailsProduct } from '../actions/productActions'

export default function HomeScreen(props) {
  const productDetails = useSelector(state => state.productDetails)
  const productId = props.match.params.id
  const {product, loading, error} = productDetails
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(detailsProduct(productId))
  }, [dispatch, productId])
  return (
    <>
      {
        loading ? <LoadingBox /> :
        error ? <MessageBox message={error} /> :
        <div>
          <Link to='/'>返回</Link>
          <div className="row top">
            <div className="col-2">
              <img className="large" src={product.image} alt={product.name}/>
            </div>
            <div className="col-1">
              <ul>
                <li>
                  <h1>{product.name}</h1>  
                </li>
                <li>
                  <Rating data={{rating: product.rating, numReviews: product.numReviews}} />
                </li>
                <li>
                  价格: {product.price}元
                </li>
                <li>
                  产品描述
                  <p>{product.description}</p>
                </li>
              </ul>
            </div>
            <div className="col-1">
              <div className="card card-body">
                <ul>
                  <li>
                    <div className="row">
                      <div>价格</div>
                      <div className="price">￥{product.price}</div>
                    </div>
                  </li>
                  <li>
                    <div className="row">
                      <div>状态</div>
                      <div>
                        {product.countInStock > 0 ? <span className="success">有货</span> : 
                        <span className="danger">无货</span>}
                      </div>
                    </div>
                  </li>
                  <li>
                    <button className="primary block">添加至购物车</button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      }
    </>
  )
}