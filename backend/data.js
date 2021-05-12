import bcrypt from 'bcryptjs'
const data = {
  users: [
    {
      name: 'Corgi',
      email: 'admin@example.com',
      password: bcrypt.hashSync('123', 8),
      isAdmin: true
    },
    {
      name: 'Haski',
      email: 'user@example.com',
      password: bcrypt.hashSync('123', 8),
      isAdmin: false
    }
  ],
  products: [
    {
      name: '男士修身T恤',
      category: 'T恤',
      image: '/images/p1.jpg',
      price: 120,
      brand: '优衣库',
      countInStock: 10,
      rating: 4,
      numReviews: 10,
      description: '高质量修身简洁款'
    },
    {
      
      name: 'Adidas运动T恤',
      category: 'T恤',
      image: '/images/p2.jpg',
      price: 100,
      brand: 'Adidas',     
      countInStock: 20,
      rating: 5,
      numReviews: 12,
      description: '纯棉运动款'
    },
    {
    
      name: '男士宽松衬衫',
      category: '衬衫',
      image: '/images/p3.jpg',
      price: 220,
      brand: '鳄鱼',
      countInStock: 50,
      rating: 3,
      numReviews: 3,
      description: '宽松款'
    },
    {
      
      name: '男士修身裤子',
      category: '裤子',
      image: '/images/p4.jpg',
      price: 155,
      brand: '优衣库',
      countInStock: 12,
      rating: 4,
      numReviews: 40,
      description: '修身西裤'
    },
    {
    
      name: '彪马运动裤',
      category: 'T恤运动裤',
      image: '/images/p5.jpg',
      price: 190,
      brand: '彪马',
      countInStock: 30,
      rating: 5,
      numReviews: 42,
      description: '运动裤'
    },
    {
   
      name: 'Adidas运动裤',
      category: '运动裤',
      image: '/images/p6.jpg',
      price: 199,
      brand: 'Adidas',
      countInStock: 0,
      rating: 3,
      numReviews: 22,
      description: 'Adidas运动型'
    },
  ]
}

export default data