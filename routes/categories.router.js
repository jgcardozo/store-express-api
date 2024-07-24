const express = require('express');
const router = express.Router();

router.get('/:catId/product/:proId', (req, res) => {
  const { catId, proId } = req.params;
  res.json({
    category_id: catId,
    product_id: proId,
  });
});

module.exports = router;
