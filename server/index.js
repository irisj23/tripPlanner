const express = require('express');
const app = express();
const PORT = process.env.PORT || 3002;
const morgan = require('morgan');
const path = require('path')
const helper = require('../server/helpers/index.js');
// const router = require('./routes.js');
const db = require('../db');

app.use(morgan('dev'));

app.use(express.json());

app.use(express.static(path.join(__dirname, '../client/dist')));

// app.use(router);
app.get('/place', async (req, res) => {
  console.log(req.query.input)
  try {
    const result = await helper.getLongLatByPlace(req.query.input);
    console.log('get place result here:')
    console.log(result);
    res.status(200).send(result)
  } catch(error) {
    console.log('get place error here:')
    console.log(error)
  }
});

app.get('/location', async (req, res) => {
  console.log(req.query.input)
  try {
    const result = await helper.getLongLatByPlace(req.query.input);
    await db.saveLocation(result);
    console.log('get place result here:')
    console.log(result);
    res.status(200).send(result)
  } catch(error) {
    console.log('get place error here:')
    console.log(error)
  }
});

app.get('/destination', async (req, res) => {
  console.log(req.query.input)
  try {
    const result = await helper.getLongLatByPlace(req.query.input);
    await db.saveDestination(result);
    console.log('get place result here:')
    console.log(result);
    res.status(200).send(result)
  } catch(error) {
    console.log('get place error here:')
    console.log(error)
  }
});

app.get('/directions', async (req, res) => {
  let origin = req.query.origin;
  let destination = req.query.destination;

  try {
    const result = await helper.getDirections(origin, destination);
    console.log('get directions results here:')
    console.log(result)
    res.status(200).send(result)
  } catch(error) {
    console.log('get directions error here:')
    console.log(error)
  }
});

app.get('/photo', async (req, res) => {
  let photoRef = req.query.photoRef;

  try {
    const result = await helper.getPhoto(photoRef);
    res.contentType('image/jpeg');
    res.status(200).end(result, 'binary');
  } catch(error) {
    console.log('get photo error here:')
    console.log(error)
  }
})

app.listen(PORT, () => {
  console.log(`server is listening on port: ${PORT}`);
});
