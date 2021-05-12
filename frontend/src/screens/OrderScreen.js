import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { detailOrder } from '../actions/orderActions'
import LoadingBox from '../components/LoadingBox'
import MessageBox from '../components/MessageBox'

export default function OrderScreen(props) {
  const orderId = props.match.params.id
  const dispatch = useDispatch()
  const orderDetails = useSelector(state => state.orderDetails)
  const {order, loading, error} = orderDetails
  useEffect(() => {
    dispatch(detailOrder(orderId))
  }, [dispatch, orderId])
  return loading ? (<LoadingBox />) : error ? (<MessageBox message={error} />) : (
    <div>
      <h1>订单 {order._id}</h1>
      <div className="row top">
        <div className="col-2">
          <ul>
            <li>
              <div className="card card-body">
                <h2>配送</h2>
                <p>
                  <strong>姓名: </strong> {order.shippingAddress.fullName}<br />
                  <strong>地址</strong> {order.shippingAddress.address},
                  {order.shippingAddress.city}, {order.shippingAddress.postalCode},
                  {order.shippingAddress.country}
                </p>
                {order.isDelivered ? <MessageBox message={`配送时间${order.deliveredAt}`} /> : 
                <MessageBox message="没有配送" />}
              </div>
            </li>
            <li>
              <div className="card card-body">
                <h2>支付</h2>
                <p>
                  <strong>支付方式: </strong> {order.paymentMethod}<br />
                </p>
                {order.isPaid ? <MessageBox message={`支付时间${order.paidAt}`} /> : 
                <MessageBox message="未支付" />}
              </div>
            </li>
            <li>
              <div className="card card-body">
                <h2>订单内容</h2>
                <ul>
                {
                  order.orderItems.map(cartItem => (
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
                    {order.itemsPrice.toFixed(2)}元
                  </div>
                </div>
              </li>
              <li>
                <div className="row">
                  <div>
                    配送
                  </div>
                  <div>
                    {order.shippingPrice.toFixed(2)}元
                  </div>
                </div>
              </li>
              <li>
                <div className="row">
                  <div>
                    税费
                  </div>
                  <div>
                    {order.taxPrice.toFixed(2)}元
                  </div>
                </div>
              </li>
              <li>
                <div className="row">
                  <div>
                    <strong>总计</strong>
                  </div>
                  <div>
                    <strong>{order.totalPrice.toFixed(2)}元</strong>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}