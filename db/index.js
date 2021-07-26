const mongoose = require('mongoose');

const mongoUrl = 'mongodb://localhost/tripPlanner';

mongoose.connect(mongoUrl, {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'mongo connection error'));
db.once('open', () => console.log('yay connected to mongo'));

const tripSchema = new mongoose.Schema({
  destination: String,
  coords: {lat: Number, lng: Number},
    name: String,
    location: {
      name: String,
      coords: {lat: Number, lng: Number},
      notes: String
    }
});

const Trip = mongoose.model('Trip', tripSchema);
