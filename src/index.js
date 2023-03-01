const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./index.routes');
const config = require('./config');

const app = express();
const PORT = process.env.APP_PORT;

app.use(bodyParser.raw());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

app.use(routes);

app.listen(PORT, () => {
  console.log(`Server is up and running on port ${PORT}...`);
});
