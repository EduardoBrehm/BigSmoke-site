const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const db = require('./config/database');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Rotas
app.use('/', routes);

// Teste de conexão com o banco de dados
db.authenticate()
  .then(() => console.log('Database connected...'))
  .catch(err => console.log('Error: ' + err));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
