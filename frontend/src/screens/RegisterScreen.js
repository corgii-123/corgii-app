import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { register} from '../actions/userActions'
import LoadingBox from '../components/LoadingBox'
import MessageBox from '../components/MessageBox'

export default function Register(props) {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

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
    if (confirmPassword !== password) {
      alert('请输入相同的密码')
      return
    }
    dispatch(register(name, email, password))
  }
  return (
    <div>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1>注册</h1>
        </div>
        {loading && <LoadingBox />}
        {error && <MessageBox message={error} />}
        <div>
          <label htmlFor="name">用户名</label>
          <input
            type="name"
            id="name"
            placeholder="请输入用户名"
            required
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </div>
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
          <label htmlFor="confirm-password">确认密码</label>
          <input
            type="confirm-password"
            id="confirm-password"
            placeholder="请再次输入密码"
            required
            value={confirmPassword}
            onChange={e => setConfirmPassword(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor=""></label>
          <button className="primary" type="submit">
            注册
          </button>
        </div>
        <div>
          <label htmlFor=""></label>
          <div>
            已有帐号？
            <Link to={`/signin?redirect=${redirect}`} >登录</Link>
          </div>
        </div>
      </form>
    </div>
  )
}