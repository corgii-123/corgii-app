import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Link} from 'react-router-dom'
import { signin } from '../actions/userActions'
import LoadingBox from '../components/LoadingBox'
import MessageBox from '../components/MessageBox'

export default function SigninScreen(props) {
  const [email, setEmail] = useState('admin@example.com')
  const [password, setPassword] = useState('123')
  const dispatch = useDispatch()
  const redirect = props.location.search ?
    props.location.search.split('=')[1] :
    '/'
  const { userInfo, loading, error } = useSelector(state => state.userSignin)
  
  useEffect(() => {
    if (userInfo) {
      props.history.push(redirect)
    }
  }, [userInfo, redirect, props.history])

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(signin(email, password))
  }
  return (
    <div>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1>登录</h1>
        </div>
        {loading && <LoadingBox />}
        {error && <MessageBox message={error} />}
        <div>
          <label htmlFor="email">邮箱</label>
          <input
            type="email"
            id="eamil"
            placeholder="请输入邮箱"
            required
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">密码</label>
          <input
            type="password"
            id="password"
            placeholder="请输入密码"
            required
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor=""></label>
          <button className="primary" type="submit">
            登录
          </button>
        </div>
        <div>
          <label htmlFor=""></label>
          <div>
            没有账号？
            <Link to="/register" >注册新用户</Link>
          </div>
        </div>
      </form>
    </div>
  )
}