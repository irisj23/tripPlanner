import React from 'react';
import config from '../../../config.js';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '650px',
  height: '650px'
};

const center = [{
  lat: 37.773972,
  lng: -122.431297
}];

function Map(props) {


  return (
    <LoadScript
      googleMapsApiKey={config.token}
    >
  <GoogleMap
    mapContainerStyle={containerStyle}
    center={props.center}
    zoom={12}
  >


  <Marker
    position={center[0]}/>


  </GoogleMap>


    </LoadScript>
  )
}

export default React.memo(Map);
