const index = (req, res) => {
  res.send('Hello from orders!');
},
createItem = (req, res) => {
  res.send(`Creating order!`);
},
readItem = (req, res) => {
  res.send(`Hello from order #${ req.params.orderId }`);
},
updateItem = (req, res) => {
  res.send(`Updating order #${ req.params.orderId }`);
},
deleteItem = (req, res) => {
  res.send(`Deleting order #${ req.params.orderId }`);
};

module.exports = {
index,
createItem,
readItem,
updateItem,
deleteItem
};
