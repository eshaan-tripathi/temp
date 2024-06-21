const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Home');
});

app.get('/ok', (req, res) => {
  res.send('ok');
});

module.exports = app;  // Export the app for Vercel serverless functions

// No app.listen() is needed for Vercel deployment
