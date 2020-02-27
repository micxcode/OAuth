require('dotenv').config();
const express = require('express');
const consign = require('consign');
//const bodyParser = require('body-parser');

const app = express();

app.disable('x-powered-by'); //referência de que o Express/Node compõem a lista de tecnologias utilizadas, isso irá afastar rotinas mais simples de varredura e ataques automatizados;

//app.use(bodyParser.json({ type: 'application/json' }));

consign({
    //cwd: 'app',
    verbose: process.env.APP_DEBUG === 'true' || false,
    locale: 'pt-br'
})
    .include('middlewares/modules.js')
    .then('Controllers')
    .into(app);

module.exports = app;