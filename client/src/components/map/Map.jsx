/*global google */
import React, { useState, useEffect } from 'react';
import config from '../../../../config.js';
import axios from 'axios';
// import Form from './Form.jsx';
import WindowItem from './WindowItem.jsx';
import styled from 'styled-components';
import { GoogleMap, useLoadScript, Marker, InfoWindow, DirectionsRenderer } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '100%',
  margin: 0,
  padding: 0,
};

const centerSample = [{
  lat: 37.773972,
  lng: -122.431297
}];


const MapWrapper = styled.div`
  display: flex;
`

const MapContainer = styled.div`
  order: 1;
  flex-basis: 70;
  margin: 0;
  padding: 0
`

const Background = styled.div`
  background-color: blue;
  position: fixed;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
`

function Map(props) {

  const {isLoaded, loadError} = useLoadScript({
    googleMapsApiKey: config.token
  })

  const [selected, setSelected] = useState({});

  console.log('props')
  console.log(props.locations)

  const onSelect = (item) => {
    setSelected(item);
  };

  console.log('selected')
  console.log(selected)
  const handleRemoveWindow = (location) => {
    for (let name in selected) {
      if (selected.name === location) {
        delete selected.coordinates;
      };
      return selected;

    }
    setSelected(selected);
  }


  const renderMap = () => {

    return (

    <Background>
      <GoogleMap
        mapContainerStyle={containerStyle}
        // center={centerSample}
        center={props.center}
        zoom={12}
      >

      {!props.routes && props.locations.length > 0 && props.locations.map((location, index) => {
          return <Marker
            key={index}
            icon={"https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"}
            position={location.coordinates}
            onClick={() => onSelect(location)}
            animation='BOUNCE'
          />
        })}

        {selected.coordinates &&
        (
          <InfoWindow
            position={selected.coordinates}
            clickable={true}
            onCloseClick={() => setSelected({})}
          >
            <>
            <WindowItem
              name={selected.name}
              handleRemoveMarker={props.handleRemoveMarker}
              handleRemoveWindow={handleRemoveWindow}
            />
            <div>hiiiii</div>
            </>
          </InfoWindow>
        )}

        {props.routes && props.directions && (
          <DirectionsRenderer
            directions={props.directions}
          />
        )}

      </GoogleMap>
    </Background>
    )
  }

  if (loadError) {
    return <div>Error loading Map</div>
  }

  return isLoaded ? renderMap() : <div>noooo</div>

}

export default Map;

  {/* const renderMap = () => {

    return (
      <MapWrapper>
        <MapContainer>
          <GoogleMap
            mapContainerStyle={containerStyle}
            // center={centerSample}
            center={props.center}
            zoom={12}
          >

          {!props.routes && props.locations.length > 0 && props.locations.map((location, index) => {
            return <Marker
              key={index}
              icon={"https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"}
              position={location.coordinates}
              onClick={() => onSelect(location)}
              animation='BOUNCE'
            />
          })}

          {selected.coordinates &&
          (
            <InfoWindow
              position={selected.coordinates}
              clickable={true}
              onCloseClick={() => setSelected({})}
            >
              <>
              <WindowItem
              name={selected.name}
              handleRemoveMarker={props.handleRemoveMarker}
              handleRemoveWindow={handleRemoveWindow}
              />
              <div>hiiiii</div>
              </>
            </InfoWindow>
          )}

          {props.routes && props.directions && (
            <DirectionsRenderer
              directions={props.directions}
            />
          )}

          </GoogleMap>
        </MapContainer>
      </MapWrapper>
    )
  }

  if (loadError) {
    return <div>Error loading Map</div>
  }

  return isLoaded ? renderMap() : <div>noooo</div>
} */}


