const express = require('express');
const cors = require('cors');

const orderRoutes = require('./routes/orderRoutes');
const adminRoutes = require('./routes/adminRoutes');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/health', (_req, res) => {
  res.status(200).json({ status: 'ok' });
});

app.use('/api/orders', orderRoutes);
app.use('/api/admin', adminRoutes);

module.exports = app;
