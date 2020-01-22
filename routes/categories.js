const express = require('express');
const router = express.Router();
const categoryControllers = require('../controllers/categories');

router.get('/', categoryControllers.index);

router.get('/:categoryId', categoryControllers.readItem);

router.post('/', categoryControllers.createItem);

router.put('/:categoryId', categoryControllers.updateItem);

router.delete('/:categoryId', categoryControllers.deleteItem);

module.exports = router;
