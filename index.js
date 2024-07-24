const express = require('express');
const { faker } = require('@faker-js/faker');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('hola mi server');
});

app.get('/products/filter', (req, res) => {
  res.send('ruta products/filter');
});

app.get('/products/:id', (req, res) => {
  const id = req.params.id;
  res.json([
    {
      id,
      name: 'nike shoes',
      price: 500,
    },
    {
      id,
      name: 'puma shirt',
      price: 700,
    },
  ]);
});

app.get('/products', (req, res) => {
  const products = [];
  const { size } = req.query;
  const limit = size || 10;

  for (let i = 0; i < limit; i++) {
    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      image: faker.image.url(),
    });
  }
  res.json(products);
});

app.get('/categories/:catId/product/:proId', (req, res) => {
  const { catId, proId } = req.params;
  res.json({
    category_id: catId,
    product_id: proId,
  });
});

app.get('/users', (req, res) => {
  const { limit, offset } = req.query;
  if (limit && offset) {
    res.json({
      limit,
      offset,
    });
  } else {
    res.send('no hay query params en la url del endpoint: users');
  }
});

app.listen(port, () => {
  console.log('escuchando el port:' + port);
});
