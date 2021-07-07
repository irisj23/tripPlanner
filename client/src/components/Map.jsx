import React from 'react';
import config from '../../../config.js';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '400px',
  height: '400px'
};

const center = {
  lat: 37.773972,
  lng: -122.431297
};

function Map() {
  return (
    <LoadScript
      googleMapsApiKey={config.token}
    >
  <GoogleMap
    mapContainerStyle={containerStyle}
    center={center}
    zoom={10}
  >

  <></>
  </GoogleMap>
    </LoadScript>
  )
}

export default Map;
