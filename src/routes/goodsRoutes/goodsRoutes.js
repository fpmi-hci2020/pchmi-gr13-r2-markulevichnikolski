const express = require('express');
const goodsController = require('../../controllers/goodsController');

const router = express.Router();

router.route('/buy')
    .post(goodsController.buy);
router.route('/get')
    .get(goodsController.get);
router.route('/get-ordered-goods/:userId')
    .get(goodsController.getOrderedGoods);

module.exports = router;
