const express = require('express');

const signInRoutes = require('./signInRoutes/signInRoutes');
const signUpRoutes = require('./signUpRoutes/signUpRoutes');
const goodsRoutes = require('./goodsRoutes/goodsRoutes');

const router = express.Router();

router.use('/', signInRoutes)
router.use('/signin', signInRoutes);
router.use('/signup', signUpRoutes);
router.use('/goods', goodsRoutes);

module.exports = router;
