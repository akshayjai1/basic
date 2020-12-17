const express = require('express');
const proxy = require('express-http-proxy');
const app = express();

app.get('*', proxy('http://localhost:3007'));
app.listen(process.env.PORT || 8082, () => {
  // eslint-disable-next-line no-console
  console.log(`App listening on port ${process.env.PORT || 8082}`);
});
