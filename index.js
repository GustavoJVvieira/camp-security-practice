// index.js
const express = require('express');
const bodyParser = require('body-parser');
const User = require('./models/User');
const {Op} = require("sequelize");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ where: {
    username: {[Op.eq] : username},
    password: {[Op.eq] : password},
  }
  });
  if (user) {
    res.json({ message: 'Login successful', user });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});


app.get('/users', async (req, res) => {
  if(!req.user){
    return res.status(401).json({ message: 'Você não é um usuário' });
  }
  const users = await User.findAll({ attributes: ['id', 'username', 'password'] });
  res.json(users);
});


app.get('/profile', async (req, res) => {
  const { id, username, email } = req.user;
  const user = await User.findOne({ where: { username: username ?? null } });
  if (user) {
    res.json({ id, username, email })
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
