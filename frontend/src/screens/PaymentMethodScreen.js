import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { savePaymentMethod } from '../actions/cartActions'
import CheckoutSteps from '../components/CheckoutSteps'

export default function PaymentMethodScreen(props) {
  const [paymentMethod, setPaymentMethod] = useState('Paypal')
  const dispatch = useDispatch()
  const { shippingAddress } = useSelector(state => state.cart)
  if (Object.keys(shippingAddress).length === 0) {
    props.history.push('/shipping')
  }

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(savePaymentMethod(paymentMethod))
    props.history.push('/placeorder')
  }
  return (
    <div>
      <CheckoutSteps step1 step2 step3 />
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1>支付方式</h1>
        </div>
        <div>
          <div>
            <input
              type="radio"
              id="paypal"
              name="paymentMethod"
              value="Palpay"
              required
              checked
              onChange={e => setPaymentMethod(e.target.value)}
            />
            <label htmlFor="paypal">Paypal</label>
          </div>
          <div>
            <input
              type="radio"
              id="stripe"
              name="paymentMethod"
              value="Stripe"
              required
              onChange={e => setPaymentMethod(e.target.value)}
            />
            <label htmlFor="stripe">Stripe</label>
          </div>
          <div>
            <button className="primary block" type="submit">
              下一步
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}