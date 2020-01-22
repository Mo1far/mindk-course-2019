const express = require('express');
const router = express.Router();
const productControllers = require('../controllers/products');

router.get('/', productControllers.index);

router.get('/:productId', productControllers.readItem);

router.post('/', productControllers.createItem);

router.put('/:productId', productControllers.updateItem);

router.delete('/:productId', productControllers.deleteItem);

module.exports = router;
