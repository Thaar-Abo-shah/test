const express = require('express')
const { status } = require('express/lib/response');
// const axios = require('axios')
const app = express();

// const axios = require('axios')
const server = require('http').createServer(app)




console.log("hello")


app.get('/a', (req, res) => {
  res.setHeader('Content-Type', 'image/jpg');
  console.log(__dirname+'\2.jpg');
  res.sendFile(path.join(__dirname,'\2.jpg'));
});



server.listen(8080);