const express = require('express');
const routerApi = require('./routes');
const cors = require('cors');
const {
  logErrors,
  errorHandler,
  boomErrorHandler,
} = require('./middleware/error.handler');

const app = express();
const port = 3000;

app.use(express.json());
app.disable('x-powered-by');

//https://expressjs.com/en/resources/middleware/cors.html
const whitelist = [
  'http://localhost:8000',
  'https://cardozodev.com.co',
  'http://localhost:3000',
];
const options = {
  origin: (origin, callback) => {
    if (whitelist.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('domain not allowed'));
    }
  },
};
app.use(cors());
//app.use(cors(options));

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
