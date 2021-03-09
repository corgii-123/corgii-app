import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { saveShippingAddress } from '../actions/cartActions'
import CheckoutSteps from '../components/CheckoutSteps'

export default function ShippingAddressScreen(props) {
  const {shippingAddress} = useSelector(state => state.cart)
  const [fullName, setFullName] = useState(shippingAddress.fullName)
  const [address, setAddress] = useState(shippingAddress.address)
  const [city, setCity] = useState(shippingAddress.city)
  const [postalCode, setPostalCode] = useState(shippingAddress.postalCode)
  const [country, setCountry] = useState(shippingAddress.country)
  const dispatch = useDispatch()
  const userSignin = useSelector(state => state.userSignin)
  const { userInfo } = userSignin
  if (!userInfo) {
    props.history.push('/signin')
  }

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(saveShippingAddress({ fullName, address, city, postalCode, country }))
    props.history.push('/payment')
  }
  return (
    <div>
      <CheckoutSteps step1 step2 />
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1>配送地址</h1>
        </div>
        <div>
          <label htmlFor="fullName">全名</label>
          <input
            type="text"
            value={fullName}
            id="fullName"
            placeholder="输入全名"
            onChange={e => setFullName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="address">地址</label>
          <input
            type="text"
            value={address}
            id="address"
            placeholder="输入地址"
            onChange={e => setAddress(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="city">城市</label>
          <input
            type="text"
            value={city}
            id="city"
            placeholder="输入城市"
            onChange={e => setCity(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="postalCode">邮编</label>
          <input
            type="text"
            value={postalCode}
            id="postalCode"
            placeholder="输入邮编"
            onChange={e => setPostalCode(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="country">国家</label>
          <input
            type="text"
            value={country}
            id="country"
            placeholder="输入国家"
            onChange={e => setCountry(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor=""></label>
          <button className="primary" type="submit">下一步</button>
        </div>
      </form>
    </div>
  )
}