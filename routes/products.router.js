const express = require('express');
const { faker } = require('@faker-js/faker');
const router = express.Router();

const products = [];

router.get('/filter', (req, res) => {
  res.send('ruta products/filter');
});

router.get('/:id', (req, res) => {
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

router.get('/', (req, res) => {
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

router.post('/', (req, res) => {
  const body = req.body;

  products.push(body);

  res.json(products);
  //res.json({ message: 'created', data: body });
});

module.exports = router;
