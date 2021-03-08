import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { addToCart, removeFromCart } from '../actions/cartActions'
import MessageBox from '../components/MessageBox'

export default function CartScreen(props) {
  const productId = props.match.params.id
  // 查询值返回
  const qty = props.location.search
    ? Number(props.location.search.split('=')[1])
    : 1
  const cart = useSelector(state => state.cart)
  const {cartItems} = cart
  const dispatch = useDispatch()
  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty))
    }
  }, [productId, dispatch, qty])
  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id))
  }
  const checkoutHandler = () => {
    props.history.push('/signin?redirect=/shipping')
  }
  return (
    <div className="row top">
      <div className="col-2">
        <h1>购物车</h1>
        {
          cartItems.length === 0 ?
            <MessageBox message="购物车为空" >
              <Link to="/">返回首页</Link>
            </MessageBox>
            :
            <ul>
              {
                cartItems.map(cartItem => (
                  <li key={cartItem.product} className="row">
                    <div>
                      <img src={cartItem.image} alt={cartItem.name} className="small" />
                    </div>
                    <div className="min-30">
                      <Link to={`/product/${cartItem.product}`}>{cartItem.name}</Link>
                    </div>
                    <div>
                      <select value={cartItem.qty} onChange={e => {
                        dispatch(addToCart(cartItem.product, Number(e.target.value)))
                        }
                      }>
                        {
                          [...new Array(cartItem.countInStock).keys()].map(
                            x => (
                              <option key={x} value={x + 1}>{x + 1}</option>
                            )
                          )
                        }
                      </select>
                    </div>
                    <div>{cartItem.price}元</div>
                    <div>
                      <button onClick={() => removeFromCartHandler(cartItem.product)}>
                        删除
                      </button>
                    </div>
                  </li>
                ))
              }
            </ul>

        }
      </div>
      <div className="col-1">
        <div className="card card-body">
          <ul>
            <li>
              <h2>
                总计: {cartItems.reduceRight((total, current) => (total + current.qty), 0)}件，共{cartItems.reduceRight((total, current) => (total + current.qty*current.price), 0)}元
              </h2>
            </li>
            <li>
              <button type="button" onClick={checkoutHandler} className="primary block" disabled={cartItems.length === 0}>
                结算
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}