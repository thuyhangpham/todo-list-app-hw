const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json())
const PORT = 5000

mongoose.connect('mongodb://localhost:27017/todo-app', {
  uselsNewUrlParser: true,
  useUnifiedTopology: true
})

app.post('/add', (req, res) => {
  const { task } = req.body.task;
  console.log(task)
  res.status(201).json({ message: 'Todo created successfully' })
})
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})