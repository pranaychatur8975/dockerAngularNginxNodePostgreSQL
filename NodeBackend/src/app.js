import express from 'express';

const app = express();

// root test route
app.get('/', (req, res) => {
  res.send('Backend is running 🚀');
});

// API route
app.get('/api', (req, res) => {
  res.json({ message: 'API working fine ✅' });
});

export default app;
