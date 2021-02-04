const router = require('express').Router();
const controller = require('./product.controller');

router.post ('/product', controller.product);

module.exports = router