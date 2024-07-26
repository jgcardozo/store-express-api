const express = require('express');
const router = express.Router();
const ProductServices = require('./../services/products.service');
const service = new ProductServices();

router.get('/', async (req, res) => {
  const products = await service.find();
  res.json(products);
});

router.get('/filter', (req, res) => {
  res.send('ruta products/filter');
});

router.get('/:id', async (req, res) => {
  const id = req.params.id;
  const product = await service.findOne(id);
  res.json(product);
});

router.post('/', async (req, res) => {
  const body = req.body;
  const product = await service.create(body);
  res.json(product);
  //res.json({ message: 'created', data: body });
});

router.patch('/:id', async (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const product = await service.update(id, body);
  res.json(product);
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const proDel = await service.delete(id);
  res.json(proDel);
});

module.exports = router;
