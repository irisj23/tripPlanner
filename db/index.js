const mongoose = require('mongoose');

const mongoUrl = 'mongodb://localhost/tripPlanner';

mongoose.connect(mongoUrl, {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'mongo connection error'));
db.once('open', () => console.log('yay connected to mongo'));

const destination = new mongoose.Schema({
  name: String,
  coordinates: {lat: Number, lng: Number},
  photoRef: String,
});


const locations = new mongoose.Schema({
  name: String,
  photoRef: String,
  coordinates: {lat: Number, lng: Number},
  notes: [{
    id: Number,
    note: String
  }]
})

const Destination = mongoose.model('Destination', destination);
const Locations = mongoose.model('Locations', locations);

let saveDest = async (dest) => {
  let destination = new Destination({
    name: dest.name,
    coordinates: {
      lat: dest.coordinates.lat,
      lng: dest.coordinates.lng
    },
    photoRef: dest.photoRef
  });

  await destination.save();
}