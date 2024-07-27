const express = require('express');
const ProductServices = require('./../services/products.service');
const validatorHandler = require('./../middleware/validator.handler');
const {
  createProductSchema,
  updateProductSchema,
  getProductSchema,
} = require('./../schemas/products.schema');

const router = express.Router();
const service = new ProductServices();

router.get('/', async (req, res) => {
  const products = await service.find();
  res.json(products);
});

router.get('/filter', (req, res) => {
  res.send('ruta products/filter');
});

router.get(
  '/:id',
  validatorHandler(getProductSchema, 'params'),
  async (req, res, next) => {
    try {
      const id = req.params.id;
      const product = await service.findOne(id);
      res.json(product);
    } catch (error) {
      next(error);
    }
  },
);

router.post(
  '/',
  validatorHandler(createProductSchema, 'body'),
  async (req, res) => {
    const body = req.body;
    const product = await service.create(body);
    res.json(product);
    //res.json({ message: 'created', data: body });
  },
);

router.patch(
  '/:id',
  validatorHandler(getProductSchema, 'params'),
  validatorHandler(updateProductSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const product = await service.update(id, body);
      res.json(product);
    } catch (error) {
      next(error);
    }
  },
);

router.delete(
  '/:id',
  validatorHandler(getProductSchema, 'params'),
  async (req, res) => {
    const { id } = req.params;
    const proDel = await service.delete(id);
    res.json(proDel);
  },
);

module.exports = router;
