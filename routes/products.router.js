const express = require('express');
const router = express.Router();
const ProductServices = require('./../services/products.service');
const service = new ProductServices();

router.get('/', (req, res) => {
  const products = service.find();
  res.json(products);
});

router.get('/filter', (req, res) => {
  res.send('ruta products/filter');
});

router.get('/:id', (req, res) => {
  const id = req.params.id;
  const product = service.findOne(id);
  res.json(product);
});

router.post('/', (req, res) => {
  const body = req.body;
  const product = service.create(body);
  res.json(product);
  //res.json({ message: 'created', data: body });
});

router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const product = service.update(id, body);
  res.json(product);
  //  res.json({ message: 'update', data: body, id });
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const proDel = service.delete(id);
  res.json(proDel);
});

module.exports = router;
