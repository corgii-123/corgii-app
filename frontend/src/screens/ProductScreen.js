import React from 'react'
import data from '../data'
import Rating from '../components/Rating'
import {Link} from 'react-router-dom'

export default function HomeScreen(props) {
  const product = data.products.find(product => (product._id === props.match.params.id))
  return (
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
  )
}