const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;

// controllers
// const indexRoute = require('./controllers/index');

// view engine
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

// use routes
// app.use('/', indexRoute);

// server listening
app.listen(PORT, () => {
  console.log('user app listening on port', PORT);
});
