const productsRouter = require('./products.router');
const usersRouter = require('./users.router');
const categoriesRouter = require('./categories.router');
const espress = require('express');

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  app.use('/products', productsRouter);
  app.use('/users', usersRouter);
  app.use('/categories', categoriesRouter);
}

module.exports = routerApi;
