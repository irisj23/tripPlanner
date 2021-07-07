const axios = require('axios');
const config = require('../../config.js');


let getLongLatByPlace = async (place) => {

  let placeIdUrl = `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?inputtype=textquery&input=${place}&key=${config.token}`;
  // let placeDetailUrl =

  try {
    const response = await axios.get(placeIdUrl)
    // let placeId = response.place_id
    console.log('helper result here:')
    console.log(response.data.candidates[0].place_id)
    const placeId = response.data.candidates[0].place_id;

    const placeDetail = await axios.get(`https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&key=${config.token}`);

    // console.log('placeDetail')
    // console.log(placeDetail.data.result.geometry.location)
    const longLat = placeDetail.data.result.geometry.location

    return longLat;

  } catch(error) {
    console.log('helper error here:')
    console.log(error)
  }


}

module.exports.getLongLatByPlace = getLongLatByPlace;
