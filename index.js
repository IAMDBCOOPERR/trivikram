const express = require('express');
const punch = require('./punch.js')
const app = express();




app.get('/', (req, res) => {
  let punchy = punch[Math.floor(Math.random() * punch.length) + 1];
  console.log(punchy)
  res.send(punchy)
});

app.listen(3001, () => {
  console.log('server started');
});