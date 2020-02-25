var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json())

consign()
    .include('Controllers')
    .into(app);

module.exports = app;