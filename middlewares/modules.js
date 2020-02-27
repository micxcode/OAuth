const bodyParser = require('body-parser');
const cors = require('cors');
const cookieParser = require('cookie-parser');

/**@param { import('express').Express} app*/
module.exports = (app) => {
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    app.use(cors({ credentials: true, origin: true }));
    app.use(cookieParser());
}