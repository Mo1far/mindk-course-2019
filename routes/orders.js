const express = require('express');
const router = express.Router();
const orderControllers = require('../controllers/orders');

router.get('/', orderControllers.index);

router.get('/:orderId', orderControllers.readItem);

router.post('/', orderControllers.createItem);

router.put('/:orderId', orderControllers.updateItem);

router.delete('/:orderId', orderControllers.deleteItem);

module.exports = router;
