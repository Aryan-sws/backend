const router = require('express').Router();
const controller = require('./product.controller');

router.post ('/product', controller.product);
router.post ('/get', controller.get);
router.put('/updateProduct?:id',controller.productUpdate);
router.delete('/deleteProduct?:id',controller.productDelete);

module.exports = router