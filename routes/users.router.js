const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  const { limit, offset } = req.query;
  if (limit && offset) {
    res.json({
      limit,
      offset,
    });
  } else {
    res.json({
      message: 'no hay query params en la url del endpoint: users',
    });
  }
});

module.exports = router;
