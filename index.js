const express = require('express');
const routerApi = require('./routes');
const {
  logErrors,
  errorHandler,
  boomErrorHandler,
} = require('./middleware/error.handler');

const app = express();
const port = 3000;

app.use(express.json());
app.disable('x-powered-by');

app.get('/', (req, res) => {
  res.json({ message: 'hola desde el raiz / de mi API' });
});

routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
  console.log('escuchando EN el port:' + port);
});
