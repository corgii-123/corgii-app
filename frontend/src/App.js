import React from 'react'
import data from './data'

function App() {
  function getStar(num) {
    const result = []
    for (let i = 0; i < num; i++) {
      result.push(<span><i className="iconfont icon-star"></i></span>)
    }
    for (let i = num; i < 5; i++) {
      result.push(<span><i className="iconfont icon-star-o"></i></span>)
    }
    return result
  }
  return (
    <div className="grid-container">
    <header className="row">
      <div>
        <a href="index.html" className="brand">🛫 amazona</a>
      </div>
      <div>
        <a href="cart.html">购物车</a>
        <a href="signin.html">登录</a>
      </div>
    </header>
    <main>
      <div className="row center">
        {data.products.map(product => (
          <div className="card">
          <a href={`product/${product._id}`}>
            <img className="medium" src={product.image} alt={product.name} />
          </a>
          <div className="card-body">
            <a href={`product/${product._id}`}>
              <h2>{product.name}</h2>
            </a>
            <div className="rating">
                {getStar(product.rating)}
            </div>
              <div className="price">{product.price}</div>
          </div>
        </div>
        ))}
      </div>
    </main>
    <footer className="row center">
      All right reserved.
    </footer>
  </div>
  );
}

export default App;
