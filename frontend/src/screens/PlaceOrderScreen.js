import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import CheckoutSteps from '../components/CheckoutSteps'

export default function PlaceOrderScreen(props) {
  const cart = useSelector(state => state.cart)
  if (!cart.paymentMethod) {
    props.history.push('/payment')
  }
  const toPrice = (num) => (Number(num.toFixed(2)))
  cart.itemsPrice = toPrice(cart.cartItems.reduce((x, y) => x + y.qty * y.price, 0))
  cart.shipping = cart.itemsPrice > 100 ? toPrice(0) : toPrice(10)
  cart.taxPrice = toPrice(0.15 * cart.itemsPrice)
  cart.totalPrice = cart.itemsPrice + cart.shipping + cart.taxPrice

  const placeOrderHandler = () => {
    
  }
  return (
    <div>
      <CheckoutSteps step1 step2 step3 step4 />
      <div className="row top">
        <div className="col-2">
          <ul>
            <li>
              <div className="card card-body">
                <h2>配送</h2>
                <p>
                  <strong>姓名: </strong> {cart.shippingAddress.fullName}<br />
                  <strong>地址</strong> {cart.shippingAddress.address},
                  {cart.shippingAddress.city}, {cart.shippingAddress.postalCode},
                  {cart.shippingAddress.country}
                </p>
              </div>
            </li>
            <li>
              <div className="card card-body">
                <h2>支付</h2>
                <p>
                  <strong>支付方式: </strong> {cart.paymentMethod}<br />
                </p>
              </div>
            </li>
            <li>
              <div className="card card-body">
                <h2>订单内容</h2>
                <ul>
                {
                  cart.cartItems.map(cartItem => (
                    <li key={cartItem.product} className="row">
                      <div>
                        <img src={cartItem.image} alt={cartItem.name} className="small" />
                      </div>
                      <div className="min-30">
                        <Link to={`/product/${cartItem.product}`}>{cartItem.name}</Link>
                      </div>
                      <div>{cartItem.price}元 × {cartItem.qty} = {cartItem.price * cartItem.qty}元</div>
                    </li>
                  ))
                }
              </ul>
              </div>
            </li>
          </ul>
        </div>
        <div className="col-1">
          <div className="card card-body">
            <ul>
              <li>
                <h2>
                  汇总
                </h2>
              </li>
              <li>
                <div className="row">
                  <div>
                    商品
                  </div>
                  <div>
                    {cart.itemsPrice.toFixed(2)}元
                  </div>
                </div>
              </li>
              <li>
                <div className="row">
                  <div>
                    配送
                  </div>
                  <div>
                    {cart.shipping.toFixed(2)}元
                  </div>
                </div>
              </li>
              <li>
                <div className="row">
                  <div>
                    税费
                  </div>
                  <div>
                    {cart.taxPrice.toFixed(2)}元
                  </div>
                </div>
              </li>
              <li>
                <div className="row">
                  <div>
                    <strong>总计</strong>
                  </div>
                  <div>
                    <strong>{cart.totalPrice.toFixed(2)}元</strong>
                  </div>
                </div>
              </li>
              <li>
                <button
                  type="button"
                  onClick={placeOrderHandler}
                  className="primary block"
                  disabled={cart.cartItems.length === 0}
                >
                  提交订单
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}