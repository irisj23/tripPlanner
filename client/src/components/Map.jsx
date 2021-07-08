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
  const [travelMode, setTravelMode] = useState('DRIVING');
  const [directions, setDirections] = useState(null);

  console.log('props')
  console.log(props.locations)

  const getDirections = () => {

      const waypoints = props.locations.map(p =>({
        location: p.name,
        stopover: true
    }));

    const origin = waypoints.shift().location;
    const destination = waypoints.pop().location;

    const directionsService = new google.maps.DirectionsService();
    console.log("MAKING REQUEST");
    console.log("dirservice=" + directionsService);

    // start here, hardcode stuff
    const directionsRequest = {
        origin: origin,
        destination: destination,
        travelMode: travelMode,
        waypoints: waypoints
    }

    console.log("dirRequest=");
    console.log(directionsRequest);

    directionsService.route(directionsRequest, (result, status) => {
      console.log("GOT RESPONSE");
      console.log(status);
      console.log(result);

      if (status === google.maps.DirectionsStatus.OK) {
        setDirections(result);
      } else {
        console.log(result);
      }
    });
}

if (props.locations.length > 1) {
  getDirections();
}


  const handleTravelMode = (type) => {
    setTravelMode(type);
  }


  const onSelect = (item) => {
    setSelected(item);
  }

  const renderMap = () => {
    // console.log("render map with props.directions=" + props.directions);

    return (
      <>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={props.center}
          zoom={12}
        >

        {props.locations.length > 0 && props.locations.map((location, index) => {
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

        {directions && false && (
          <DirectionsRenderer
            directions={directions}
          />
        )}

        </GoogleMap>
        <br/>

        <Form
          handleAddPlace={props.handleAddPlace}
          handleTravelMode={handleTravelMode}
        />
        <br/>
        <div>hi??</div>


      </>
    )
  }

  if (loadError) {
    return <div>Error loading Map</div>
  }

  return isLoaded ? renderMap() : <div>noooo</div>
}

export default Map;
