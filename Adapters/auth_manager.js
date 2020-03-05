class AuthManager {

    constructor() {

    }

    Authenticate(cookie) {
        return true;
    }

    Authorization(cookie, req) {
        return true;
    }
}

module.exports = AuthManager;