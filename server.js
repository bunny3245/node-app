// server.js
const express = require('express');
const app = express();
const port = 3000;

// Define a route for the homepage
app.get('/', (req, res) => {
  res.send('Hello World from a simple Node.js app!');
});

// Start the server
app.listen(port, () => {
  console.log(`Simple Node.js app listening at http://localhost:${port}`);
});