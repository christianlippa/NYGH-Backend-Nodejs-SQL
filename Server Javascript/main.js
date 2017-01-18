var express = require('express');
var request = require('request');
var bodyParser = require('body-parser');
var app = express();
var sql = require("./sql.js");
/*
app.config(function ($httpProvider){
  $httpProvider.defaults.headers.common = {};
  $httpProvider.defaults.headers.post = {};
});
*/

app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({extended: true}));

app.use(function(request, response, next) {
 //bodyParser.urlencoded({extended: true});\
 
 //A lot of these headers are unsafe and for testing purposes. **Not to be used in production.**
 
 // res.header("Content-Type", "application/json");
 // res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  //res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accepts, Cache-Control");
  //res.write("<h1>hi</h1>");
  next();
});

app.listen(8085, function () {
  console.log('listening on port 8085!');
  
});

app.post('/discharge', function (request, response) {

  sql.insertDischarge(request.body);
  response.sendStatus(200);
});

app.post('/homeVisit', function (request, response) {
  sql.insertHomeVisit(request.body);
  res.sendStatus(200);
});

app.post('/referral', function (request, response) {
  sql.insertReferral(request.body);
  res.sendStatus(200);
});

app.post('/telephone', function (request, response) {
  sql.insertTelephoneConsult(request.body);
  res.sendStatus(200);
});

app.post('/visitOutside', function (request, response) {
  sql.insertVisitOutside(request.body);
  res.sendStatus(200);
});

app.post('/patientRequests', function (request, response) {
  sql.insertPatientRequests(request.body);
  res.sendStatus(200);
});

app.use(function(request, response){
  res.sendStatus(404);
});