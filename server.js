const express = require('express');
const port = 3000;

const app = express();

app.listen(port, function() {
	console.log("running on " + port);
});

app.get('/', function (req, res) {
    res.redirect('https://jurgenpalsma.github.io/portfolio/');
  });