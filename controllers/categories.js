const index = (req, res) => {
  res.send('Hello from categories!');
},
createItem = (req, res) => {
  res.send(`Creating category!`);
},
readItem = (req, res) => {
  res.send(`Hello from category #${ req.params.categoryId }`);
},
updateItem = (req, res) => {
  res.send(`Updating category #${ req.params.categoryId }`);
},
deleteItem = (req, res) => {
  res.send(`Deleting category #${ req.params.categoryId }`);
};

module.exports = {
index,
createItem,
readItem,
updateItem,
deleteItem
};
