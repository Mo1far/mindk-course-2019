const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
  res.send('Hello from products!');
});

router.get('/:productId', function(req, res) {
  res.send(`Hello from product #${ req.params.productId }`);
});

module.exports = router;
