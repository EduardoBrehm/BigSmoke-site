const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const productRoutes = require('./routes/products');
const categoryRoutes = require('./routes/categories');

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Rotas
app.use('/api/products', productRoutes);
app.use('/api/categories', categoryRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
