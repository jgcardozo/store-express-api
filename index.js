const express = require('express');
const routerApi = require('./routes');

const app = express();
const port = 3000;

app.use(express.json());
app.disable('x-powered-by');

app.get('/', (req, res) => {
  res.json({ message: 'hola desde el raiz / de mi API' });
});

routerApi(app);

app.listen(port, () => {
  console.log('escuchando EN el port:' + port);
});
