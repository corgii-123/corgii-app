import express from 'express'
import User from '../models/userModel.js'
import data from '../data.js'
import expressAsyncHandler from 'express-async-handler'
import bcrypt from 'bcryptjs'
import { generateToken } from '../utils.js'

const userRouter = express.Router()

// 生成初始数据
// userRouter.get('/seed', expressAsyncHandler(async (req, res) => {
//   await User.remove()
//   const createUsers = await User.insertMany(data.users)
//   res.send({createUsers})
// })
// )

userRouter.post('/signin', expressAsyncHandler(async (req, res) => {
  const user = await User.findOne({ email: req.body.email })
  if (user) {
    // 检查密码的正确性
    if (bcrypt.compareSync(req.body.password, user.password)) {
      res.send({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        token: generateToken(user)
      })
      return
    }
  }
  res.status(401).send({message: '密码或邮箱错误'})
}))

userRouter.post('/register', expressAsyncHandler(async (req, res) => {
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 8)
  })
  const createdUser = await user.save()
  res.send({
    _id: createdUser._id,
    name: createdUser.name,
    email: createdUser.email,
    isAdmin: createdUser.isAdmin,
    token: generateToken(createdUser)
  })
}))

export default userRouter