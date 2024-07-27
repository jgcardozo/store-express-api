const boom = require('@hapi/boom');

function validatorHandler(schema, property) {
  return (req, res, next) => {
    const data = req[property];
    const { error } = schema.validate(data, { abortEarly: false });
    // para que envie todos los errores de una y no 1x1  {abortEarly:false}
    if (error) {
      next(boom.badRequest(error));
    }
    next();
  };
}

module.exports = validatorHandler;
