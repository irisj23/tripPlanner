const express = require('express');
const app = express();
const PORT = process.env.PORT || 3002;
const morgan = require('morgan');
const path = require('path')
const model = require('../server/helpers/index.js');
// const router = require('./routes.js');
// const db = require('../db');

app.use(morgan('dev'));

app.use(express.json());

app.use(express.static(path.join(__dirname, '../client/dist')));

// app.use(router);
app.get('/place', async (req, res) => {
  console.log(req.query.input)
  try {
    const result = await model.getLongLatByPlace(req.query.input);
    console.log('model result here:')
    console.log(result);
    res.status(200).send(result)
  } catch(error) {
    console.log('model error here:')
    console.log(error)
  }
})

app.listen(PORT, () => {
  console.log(`server is listening on port: ${PORT}`);
});
