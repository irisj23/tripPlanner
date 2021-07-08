import React, { useState } from 'react';
import config from '../../../config.js';
import Form from '../components/Form.jsx';
import PlaceList from '../components/PlaceList.jsx';
import { GoogleMap, useLoadScript, Marker, InfoWindow, StandaloneSearchBox } from '@react-google-maps/api';

const containerStyle = {
  width: '550px',
  height: '550px'
};

const center = [{
  lat: 37.773972,
  lng: -122.431297
}];

function Map(props) {
  // const onLoad = ref => this.searchBox = ref;
  // const onPlacesChanged = () => console.log(this.searchBox.getPlaces());

  const [locations, setLocations] = useState([]);
  const [selected, setSelected] = useState({});

  const {isLoaded, loadError} = useLoadScript({
    googleMapsApiKey: config.token
  })

  const handleAddPlace = (newPlace) => {
    let newPlaces = locations.concat(newPlace);
    setLocations(newPlaces)
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

      {locations.map((location, index) => {
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

      </GoogleMap>
      <br/>
      <Form
        handleAddPlace={handleAddPlace}
      />
      <br/>
      <div>hi??</div>
      <PlaceList
        locations={locations}
      />
      </>
    )
  }

  if (loadError) {
    return <div>Error loading Map</div>
  }

  return isLoaded ? renderMap() : <div>noooo</div>
}

export default Map;
