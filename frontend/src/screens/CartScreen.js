import React from 'react'

export default function CartScreen(props) {
  const productId = props.match.params.id
  // 查询值返回
  console.log(props.location);
  const qty = props.location.search
    ? Number(props.location.search.split('=')[1])
    : 1
  return (
    <div>
      <h1>
        购物车页面
      </h1>
      <p>添加至购物车: {productId} 数量: {qty}</p>
    </div>
  )
}