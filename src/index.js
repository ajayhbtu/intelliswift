const express = require('express');
const routes = require('./index.routes');

const app = express();
const PORT = 3000;

app.use(routes);

app.listen(PORT, () => {
  console.log(`Server is up and running on port ${PORT}...`);
});
