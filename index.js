const express = require('express')
const app = express()
const port = 7777

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://changwoon2:easymaster2@bighero.webu5ma.mongodb.net/', {
  useNewUrlParser: true, useUnifiedTopology: true
}).then(() => console.log("mong"))
.catch(err => console.log(err))




app.get('/', (req, res) => {
  res.send('Hello World! 안녕하세요')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})