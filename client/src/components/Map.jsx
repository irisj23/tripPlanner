import React from 'react';
import config from '../../../config.js';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '400px',
  height: '400px'
};

const center = {
  lat: -3.745,
  lng: -38.523
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
