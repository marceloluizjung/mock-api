const https = require("https");
const bodyParser = require('body-parser');
const fs = require("fs");
const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
https
  .createServer({
      key: fs.readFileSync("key.pem"),
      cert: fs.readFileSync("cert.pem"),
    },
	app)
  .listen(4000, ()=>{
    console.log('server is runing at port 4000')
  });

app.get('/*', (req, res) => {
  res.json({message: 'Hello World, from express'});
});
app.put('/*', (req, res) => {
  console.log(req.body.employeeCompetencyAppraisalIdList);
  var response = [];
  req.body.employeeCompetencyAppraisalIdList.forEach(item => { response.push({"id": item,"jobPositionName": "Job Atualizado" + item,"workstationName": "Works Atualizado" + item}); });
  res.json(response);
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