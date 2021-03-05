import React from 'react'

const Rating = ({ data }) => {
  const {rating, numReviews} = data
  function getStar(num) {
    const result = []
    for (let i = 0; i < num; i++) {
      result.push(<span key={i}><i className="iconfont icon-star"></i></span>)
    }
    for (let i = num; i < 5; i++) {
      result.push(<span key={i}><i className="iconfont icon-star-o"></i></span>)
    }
    return result
  }
  return (
    <div className="rating">
      {getStar(rating)}
      <span key={6}>{numReviews}次浏览</span>
    </div>
  )
}

export default Rating