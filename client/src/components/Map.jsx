/*global google */
import React, { useState, useEffect } from 'react';
import config from '../../../config.js';
import axios from 'axios';
import Form from '../components/Form.jsx';

import { GoogleMap, useLoadScript, Marker, InfoWindow, DirectionsRenderer, StandaloneSearchBox } from '@react-google-maps/api';

const containerStyle = {
  width: '550px',
  height: '550px'
};

const centerSample = [{
  lat: 37.773972,
  lng: -122.431297
}];

function Map(props) {

  const {isLoaded, loadError} = useLoadScript({
    googleMapsApiKey: config.token
  })

  const [selected, setSelected] = useState({});
  // const [routes, setRoutes] = useState(false);

  console.log('props')
  console.log(props.locations)

  const onSelect = (item) => {
    setSelected(item);
  }

  const renderMap = () => {

    return (
      <>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={props.center}
          zoom={12}
        >

        {!props.routes && props.locations.length > 0 && props.locations.map((location, index) => {
          return <Marker
            key={index}
            icon={"https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"}
            position={location.coordinates}
            onClick={() => onSelect(location)}
          />
        })}

        {selected.coordinates &&
        (
          <InfoWindow
            position={selected.coordinates}
            clickable={true}
            onCloseClick={() => setSelected({})}
          >
            <p>{selected.name}</p>
          </InfoWindow>
        )}

        {props.routes && props.directions && (
          <DirectionsRenderer
            directions={props.directions}
          />
        )}

        </GoogleMap>
        <br/>

        <Form
          handleAddPlace={props.handleAddPlace}
          handleTravelMode={props.handleTravelMode}
        />
        <br/>

      </>
    )
  }

  if (loadError) {
    return <div>Error loading Map</div>
  }

  return isLoaded ? renderMap() : <div>noooo</div>
}

export default Map;
