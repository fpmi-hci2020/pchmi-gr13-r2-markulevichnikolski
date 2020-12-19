const routeUtils = require('../utils/handleResponse');
const statusCode = require('../const/statusCode');
const signUpRepository = require('../repositories/signUpRepository');

function signUp(req) {
    console.log(req.body);
    const { email, password, firstname, lastname, address } = req.body;
    return signUpRepository.signUp(email, password, firstname, lastname, address);
}

module.exports = {
    signUp: routeUtils.handleResponse(signUp, statusCode.CREATED, statusCode.CONFLICT)
};
