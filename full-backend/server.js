const express = require('express');

const app = express(); // create server instance

app.get('/', (req, res) => { // define route for root URL
  res.send('Hello World! ');
});

app.get("/about", (req, res) => { // define route for /about URL
  res.send("This is the about page.");
});

 app.listen(3000); // start server on port 3000







