const index = (req, res) => {
    res.send('Hello from products!');
  },
  createItem = (req, res) => {
    res.send(`Creating product!`);
  },
  readItem = (req, res) => {
    res.send(`Hello from product #${ req.params.productId }`);
  },
  updateItem = (req, res) => {
    res.send(`Updating product #${ req.params.productId }`);
  },
  deleteItem = (req, res) => {
    res.send(`Deleting product #${ req.params.productId }`);
  };

module.exports = {
  index,
  createItem,
  readItem,
  updateItem,
  deleteItem
};
