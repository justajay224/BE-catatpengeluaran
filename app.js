require('dotenv').config();
const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Routes - automatically load all routes from route folder
const routes = require('./route');
app.use('/', routes);

// Health check
app.get('/', (req, res) => {
  res.json({ message: 'CatatPengeluaran API is running' });
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
