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


const location = new mongoose.Schema({
  name: String,
  coordinates: {lat: Number, lng: Number},
  photoRef: String,
  notes: [{
    id: Number,
    note: String
  }]
})

const Destination = mongoose.model('Destination', destination);
const Location = mongoose.model('Location', location);

let saveDestination = async (dest) => {
  let destination = new Destination({
    name: dest.name,
    coordinates: {
      lat: dest.coordinates.lat,
      lng: dest.coordinates.lng
    },
    photoRef: dest.photoRef
  });

  try {
    await destination.save();
  } catch(error) {
    console.log('error with saveDest')
    console.log(error)
  }
}

let saveLocation = async (Location) => {
  let location = new Location({
    name: location.name,
    coordinates: {
      lat: location.coordinates.lat,
      lng: location.coordinates.lng
    },
    photoRef: location.photoRef,
    notes: []
  });

  try {
    await location.save();
  } catch(error) {
    console.log('error with saveLocation')
    console.log(error)
  }
}


module.exports = {
  saveDestination: saveDestination,
  saveLocation: saveLocation
}
