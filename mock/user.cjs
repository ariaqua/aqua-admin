const express = require('express')
const router = express.Router()

const userList = [
  {
    name: 'admin',
    password: '123456',
    telephone: '176********',
    palce: 'HuBei',
    githubAddress: 'https://github.com/ariaqua',
    token: 'admin-token',
    roles: ['admin'],
    avatar: 'https://avatars.githubusercontent.com/u/51151856?v=4'
  },
  {
    name: 'editor',
    password: '123456',
    telephone: '176********',
    palce: 'HuBei',
    githubAddress: 'https://github.com/ariaqua',
    token: 'editor-token',
    roles: ['editor'],
    avatar: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png'
  }
]

router.post('/login', (req, res) => {
  const { username, password } = req.body
  const user = userList.find(user => user.name === username && user.password === password)
  if (user) {
    res.json({
      success: true,
      token: user.token
    })
  } else {
    res.status(401).send('用户名或密码错误!')
  }
  
})

router.get('/info', (req, res) => {
  const { token } = req.query
  const user = userList.find(user => user.token === token)
  if (user) {
    console.log(user);
    res.json(user)
  } else {
    res.status(403).send('token 已过期, 请重新登录!')
  }
})

router.get('/logout', (req, res) => {
  res.json({
    success: true
  })
})

module.exports = router
