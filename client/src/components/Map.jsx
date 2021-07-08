import React, { useState, useEffect } from 'react';
import config from '../../../config.js';
import axios from 'axios';
import Form from '../components/Form.jsx';

import { GoogleMap, useLoadScript, Marker, InfoWindow, DirectionsRenderer, StandaloneSearchBox } from '@react-google-maps/api';

const containerStyle = {
  width: '550px',
  height: '550px'
};

const center = [{
  lat: 37.773972,
  lng: -122.431297
}];

function Map(props) {

  const {isLoaded, loadError} = useLoadScript({
    googleMapsApiKey: config.token
  })

  // const [locations, setLocations] = useState([]);
  const [selected, setSelected] = useState({});
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [response, setResponse] = useState(null);
  const [directions, setDirections] = useState(null);

  // const handleAddPlace = (newPlace) => {
  //   let newPlaces = locations.concat(newPlace);
  //   setLocations(newPlaces);
  //   console.log(locations)

    // if (locations.length > 1) {
    //   setOrigin(locations[0].name);
    //   setDestination(locations[1].name);
    //   console.log(origin)
    //   console.log(destination)
    //   const res = await axios.get(`/directions?origin=${origin}&destination=${destination}`);
    //   console.log(res)
    //   setResponse(res);
    // }

  // }
  console.log('props')
  console.log(props.locations)

  const getDirections = () => {
    if (props.locations.length > 1) {
      const waypoints = props.locations.map(p =>({
        location: {lat: p.lat, lng: p.lng},
        stopover: true
    }));

    const origin = waypoints.shift().location;
    const destination = waypoints.pop().location;

    const directionsService = new google.maps.DirectionsService();
    directionsService.route(
      {
        origin: origin,
        destination: destination,
        waypoints: waypoints
      },
      (result, status) => {
        if (status === google.maps.DirectionsStatus.OK) {
          setDirections(response);
        } else {
          console.log(response)
        }
      }
    )
  } else {
    return;
  }
}


  const onSelect = (item) => {
    setSelected(item)
  }

  const renderMap = () => {

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

        {response && (
          <DirectionsRenderer
            directions={directions}
          />
        )}

        </GoogleMap>
        <br/>

        <Form
          handleAddPlace={props.handleAddPlace}
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
