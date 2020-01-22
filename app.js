const express = require('express');
const app = express();
const productRoutes = require('./routes/products');
const orderRoutes = require('./routes/orders');
const categoryRoutes = require('./routes/categories');
const port = 4000;

// respond with "hello world" when a GET request is made to the homepage
app.use('/products', productRoutes);
app.use('/orders', orderRoutes);
app.use('/categories', categoryRoutes);

app.listen(port, () => console.log(`API listening on port ${port}!`));
