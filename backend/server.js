import express from 'express'
import mongoose from 'mongoose'
import userRouter from './routers/userRouter.js'
import productRouter from './routers/productRouter.js'
import dotenv from 'dotenv'
import orderRouter from './routers/orderRouter.js'

dotenv.config()

const app = express()

app.use(express.json())
app.use(express.urlencoded({
  extended: true
}))

mongoose.connect(process.env.MONGODB_URL || 'mongodb://root:root@localhost:27017/amazona?authSource=admin', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
})

// 使用数据库
app.use('/api/users', userRouter)
app.use('/api/products', productRouter)
app.use('/api/orders', orderRouter)

// 错误处理中间件
app.use((err, req, res, next) => {
  res.status(400).send({message: err.message})
})

app.get('/', (req, res) => {
  res.send('server is ready')
})

const port = process.env.PORT || 5000

app.listen(port, () => {
  console.log('server is ok http://localhost:' + port);
})