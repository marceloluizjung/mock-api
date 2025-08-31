const https = require("https");
const bodyParser = require('body-parser');
const fs = require("fs");
const express = require("express");
const cors = require('cors')

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

https
  .createServer({
      key: fs.readFileSync("key.pem"),
      cert: fs.readFileSync("cert.pem"),
    },
    app)
  .listen(4001, () => {
    console.log('https server is runing at port 4001')
  });

app.listen(4000, () => {
  console.log('http server is runing at port 4000')
});

app.get('/*', (req, res) => {
  res.json({message: 'Hello World, from express'});
});
app.put('/*', (req, res) => {
  res.json({message: 'Hello World, from express'});
});
app.post('/*', (req, res) => {
  res.json({message: 'Hello World, from express'});
});
app.delete('/*', (req, res) => {
  res.json({message: 'Hello World, from express'});
});
app.patch('/*', (req, res) => {
  res.json({message: 'Hello World, from express'});
});