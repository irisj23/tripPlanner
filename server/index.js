const express = require('express');
const app = express();
const PORT = process.env.PORT || 3002;
const morgan = require('morgan');
const path = require('path')
// const router = require('./routes.js');
// const db = require('../db');

app.use(morgan('dev'));

app.use(express.json());

app.use(express.static(path.join(__dirname, '../client/dist')));

// app.use(router);

app.listen(PORT, () => {
  console.log(`server is listening on port: ${PORT}`);
});
