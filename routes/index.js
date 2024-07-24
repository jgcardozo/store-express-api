const productsRouter = require('./products.router');
const usersRouter = require('./users.router');
const categoriesRouter = require('./categories.router');
const apiVersion = '/api/v1';

function routerApi(app) {
  app.use(apiVersion + '/products', productsRouter);
  app.use(apiVersion + '/users', usersRouter);
  app.use(apiVersion + '/categories', categoriesRouter);
}

module.exports = routerApi;
