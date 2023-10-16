const express = require('express');
const app = express();
const port = 7777;
const bodyParser = require('body-parser');
const {User} = require("./models/user");

app.use(bodyParser.urlencoded({extended:true}));

const config = require("./config/key");

app.use(bodyParser.json());

const mongoose = require('mongoose')
mongoose.connect(config.mongoURI, {
  useNewUrlParser: true, useUnifiedTopology: true
}).then(() => console.log("mong"))
.catch(err => console.log(err))

app.get('/', (req, res) => {
  res.send('Hello World! 안녕하세요 반갑습니다.')
});


app.get('/register', (req, res) => {

    const user = new User(req.body)

    user.save((arr, userInfo) => {
      if(err) return res.json({success: false, err})
      return res.status(200).json({
    success: true,
    });
    });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});