const express = require('express')
const cors = require('cors')
const mangoose = require('mangoose')
const User = require('./models/User')
const app = express()

app.use(cors())
app.use(express.json())

mangoose.connect(
  'mongodb+srv://simonianvah:<xCAjp0veIBEjW3U1>@cluster0.r5auo3a.mongodb.net/?retryWrites=true&w=majority'
)

app.get('/register', async (req, res) => {
  const { username, password } = req.body
  try {
    const useeDoc = await User.create({ username, password })
    res.json(useeDoc)
  } catch (e) {
    res.status(400).json(e)
  }
  res.send('test ok')
})

app.listen(4000, () => {
  console.log('listening to port 4000')
})

// mongodb+srv://simonianvah:<xCAjp0veIBEjW3U1>@cluster0.r5auo3a.mongodb.net/?retryWrites=true&w=majority
// xCAjp0veIBEjW3U1
