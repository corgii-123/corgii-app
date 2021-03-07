import React from 'react'
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Redirect, Switch, Link } from 'react-router-dom'
import CartScreen from './screens/CartScreen';
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'

function App() {
  const cart = useSelector(state => state.cart)
  const { cartItems } = cart
  
  return (
    <Router>
      <div className="grid-container">
        <header className="row">
          <div>
            <Link to="/index" className="brand">🛫 amazona</Link>
          </div>
          <div>
            <Link to="/cart">购物车{cartItems.length > 0 &&
              (
              <span className="badge">{cartItems.length}</span>
            )}</Link>
            <Link to="/signin">登录</Link>
          </div>
        </header>
        <main>
          <Switch>
            <Route exact path="/" component={HomeScreen} />
            <Route path="/product/:id" component={ProductScreen} />
            <Route path="/cart/:id?" component={CartScreen} />
            <Redirect to="/" />
          </Switch>
        </main>
        <footer className="row center">
          All right reserved.
        </footer>
      </div>
    </Router>
  );
}

export default App;
