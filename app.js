const express = require('express');
const app = express();
const PORT = 3000;

const router = require('./api/router');

app.use(router);

app.listen(PORT, () => {
  console.log(`Bot instance app listening on port ${PORT}`);
});
