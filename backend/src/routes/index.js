const express = require('express');
const router = express.Router();
const productRoutes = require('./products');
const categoryRoutes = require('./categories');

router.use('/api/products', productRoutes);
router.use('/api/categories', categoryRoutes);

module.exports = router;
