const express = require('express');
const app = express();

// BUG: Port is hardcoded instead of using process.env.PORT
const PORT = 3000;

app.get('/', (req, res) => {
  res.json({ 
    message: 'Hello from Render!',
    timestamp: new Date().toISOString()
  });
});

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
