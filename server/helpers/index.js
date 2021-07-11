const axios = require('axios');
const config = require('../../config.js');


const getLongLatByPlace = async (place) => {

  const placeIdUrl = `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?inputtype=textquery&input=${place}&key=${config.token}`;
  // const placeDetailUrl =

  try {
    const response = await axios.get(placeIdUrl)
    // let placeId = response.place_id
    console.log('helper get place result here:')
    console.log(response.data.candidates[0].place_id)
    const placeId = response.data.candidates[0].place_id;

    const placeDetail = await axios.get(`https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&key=${config.token}`);

    // console.log('placeDetail')
    // console.log(placeDetail.data.result.geometry.location)
    // {address: longAddress, coordinates: longLat, link: url}
    const longLat = placeDetail.data.result.geometry.location;
    const photoRef = placeDetail.data.result.photos[0].photo_reference;
    const name = placeDetail.data.result.name;

    return {name: name, coordinates: longLat, photoRef: photoRef};

  } catch(error) {
    console.log('helper get place error here:')
    console.log(error)
  }
};

const getDirections = async (source, destination) => {

  const url = `https://maps.googleapis.com/maps/api/directions/json?origin=${source}&destination=${destination}&key=${config.token}`

  try {
    const res = await axios.get(url);
    console.log('helper get directions result here:')
    console.log(res.data);

    return res.data

  } catch(error) {
    console.log('helper get directions error here:')
    console.log(error)
  }
};


const getPhoto = async (photoRef) => {

  const url = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1024&photoreference=${photoRef}&key=${config.token}`;
  console.log(url);
  try {
    const res = await axios.get(url, {
      responseType: 'arraybuffer'
    });
    const binaryData = Buffer.from(res.data, 'binary');
    return binaryData;
  } catch(error) {
    console.log('helper get photo error here:')
    console.log(error)
  }
}

module.exports.getLongLatByPlace = getLongLatByPlace;
module.exports.getDirections = getDirections;
module.exports.getPhoto = getPhoto;