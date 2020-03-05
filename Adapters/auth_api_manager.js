var db_manager = require('../Adapters/data-base_manager');

class AuthAPIManager{

    constructor(){
        this.db = new db_manager();
    }

    generateHash(userId){

    }

    validateToken(token){

    }
}

module.exports = AuthAPIManager;