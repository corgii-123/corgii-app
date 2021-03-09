import React from 'react'

export default function CheckoutSteps(props) {
  return (
    <div className="row checkout-steps">
      <div className={props.step1 ? 'active' : ''}>登录/注册</div>
      <div className={props.step2 ? 'active' : ''}>添加购物车</div>
      <div className={props.step3 ? 'active' : ''}>支付</div>
      <div className={props.step4 ? 'active' : ''}>订单详情</div>
    </div>
  )
}