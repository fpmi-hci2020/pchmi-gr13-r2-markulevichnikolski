const routeUtils = require('../utils/handleResponse');
const statusCode = require('../const/statusCode');
const goodsRepository = require('../repositories/goodsRepository');

function buy(req) {
    const { userId, goodId } = req.body;
    console.log(1, req.body);
    return goodsRepository.buy(userId, goodId);
}

function getAllGoods() {
    return goodsRepository.getAllGoods();
}

module.exports = {
    buy: routeUtils.handleResponse(buy, statusCode.OK, statusCode.NOT_FOUND),
    get: routeUtils.handleResponse(getAllGoods, statusCode.OK, statusCode.NO_CONTENT)
};
