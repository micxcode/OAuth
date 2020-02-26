var app = require('./custom-express'); 

app.listen(process.env.APP_PORT || 3000, function () {
    console.log('servidor rodando na porta 80');
});