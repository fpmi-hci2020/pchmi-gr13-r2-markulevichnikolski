const routeUtils = require('../utils/handleResponse');
const statusCode = require('../const/statusCode');
const signInRepository = require('../repositories/signInRepository');

function signIn(req) {
    const { email, password } = req.body;
    return signInRepository.signIn(email, password);
}

module.exports = {
    signIn: routeUtils.handleResponse(signIn, statusCode.OK, statusCode.NOT_FOUND)
};
