const express = require('express');
const goodsController = require('../../controllers/goodsController');

const router = express.Router();

router.route('/buy')
    .post(goodsController.buy);
router.route('/get')
    .get(goodsController.get)

module.exports = router;
