const routeUtils = require('../utils/handleResponse');
const statusCode = require('../const/statusCode');
const goodsRepository = require('../repositories/goodsRepository');

function buy(req) {
    const { userId, goodId } = req.body;
    console.log(1, req.body);
    return goodsRepository.buy(userId, goodId);
}

function delBuy(req) {
    const { userId, goodId } = req.body;
    console.log(1, req.body);
    return goodsRepository.delBuy(userId, goodId);
}

function getAllGoods() {
    return goodsRepository.getAllGoods();
}

function getOrderedGoods(req) {
    console.log('AAAAAAAAAA', req.params);
    const { userId } = req.params;
    return goodsRepository.getOrderedGoods(userId)
}

module.exports = {
    delBuy: routeUtils.handleResponse(delBuy, statusCode.OK, statusCode.NOT_FOUND),
    buy: routeUtils.handleResponse(buy, statusCode.OK, statusCode.NOT_FOUND),
    get: routeUtils.handleResponse(getAllGoods, statusCode.OK, statusCode.NO_CONTENT),
    getOrderedGoods: routeUtils.handleResponse(getOrderedGoods, statusCode.OK, statusCode.NO_CONTENT)
};
