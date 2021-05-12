import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Redirect, Switch, Link } from 'react-router-dom'
import { signout } from './actions/userActions';
import CartScreen from './screens/CartScreen';
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import SigninScreen from './screens/SigninScreen'
import RegisterScreen from './screens/RegisterScreen'
import ShippingAddressScreen from './screens/ShippingAddressScreen';
import PaymentMethodScreen from './screens/PaymentMethodScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import OrderScreen from './screens/OrderScreen';

function App() {
  const cart = useSelector(state => state.cart)
  const { cartItems } = cart
  const {userInfo} = useSelector(state => state.userSignin)
  const dispatch = useDispatch()

  const signoutHandler = () => {
    dispatch(signout())
  }
  return (
    <Router>
      <div className="grid-container">
        <header className="row">
          <div>
            <Link to="/index" className="brand">🛫 Corgii购物网</Link>
          </div>
          <div>
            <Link to="/cart">购物车{cartItems.length > 0 &&
              (
              <span className="badge">{cartItems.length}</span>
              )}
            </Link>
            {
              userInfo ?
                (
                  <div className="dropdown">
                    <Link to="#">
                      {userInfo.name} <i className="iconfont icon-down"></i>
                    </Link>
                    <ul className="dropdown-content">
                      <Link to="#signout" onClick={signoutHandler}>退出登录</Link>
                    </ul>
                  </div>
                ) :
                <Link to="/signin">登录</Link>
            }
          </div>
        </header>
        <main>
          <Switch>
            <Route exact path="/" component={HomeScreen} />
            <Route path="/product/:id" component={ProductScreen} />
            <Route path="/cart/:id?" component={CartScreen} />
            <Route path="/signin" component={SigninScreen} />
            <Route path="/register" component={RegisterScreen} />
            <Route path="/shipping" component={ShippingAddressScreen} />
            <Route path="/payment" component={PaymentMethodScreen} />
            <Route path="/placeorder" component={PlaceOrderScreen} />
            <Route path="/order/:id" component={OrderScreen} />
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
