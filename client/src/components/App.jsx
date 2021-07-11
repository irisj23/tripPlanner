/*global google */
import React, { useState, useEffect, useRef } from "react";
import axios from 'axios';
import Map from '../components/map/Map.jsx';
import LandingPage from '../components/landingPage/LandingPage.jsx';
import PlaceList from '../components//placeList/PlaceList.jsx';
import config from '../../../config.js';
import styled from 'styled-components';
// import Days from '../components/Days.jsx';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  width: 1500px;
  margin-top: 100px;

`

const LandingPageContainer = styled.div`
  justify-content: center;
  flex-wrap: wrap;
  width: 1500px;
  margin-top: 100px;
`

const MapContainer = styled.div`
  order: 2;
  flex-basis: 70;
  padding: 20px;
`

// const Logo = styled.img`
//   src: ${logo};
// `

const PlacesContainer = styled.div`
  order: 1;
  flex-basis: 30;
  padding: 20px;
  overflow-y: scroll;
`

const PhotoWrap = styled.img`
  filter: blur(8px);
  opacity: 0.6;
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: -1;
  top: 0;
  left: 0;
`

function App() {

  const [locations, setLocations] = useState([]);
  const [clicked, setClicked] = useState(false);
  const [center, setCenter] = useState({});
  const [origin, setOrigin] = useState('');
  const [directions, setDirections] = useState(null);
  const [destination, setDestination] = useState('');
  const [isError, setIsError] = useState(false);
  const [travelMode, setTravelMode] = useState('DRIVING');
  const [loadMap, setLoadMap] = useState(false);
  const [routes, setRoutes] = useState(false);
  const [days, setDays] = useState([]);
  const [photoRef, setPhotoRef] = useState(null);


  // useEffect(() => {

  // }, []);


  const getCenterDestination = async (destination) => {

    // console.log('hey')
    // console.log(destination)
    try {
      const res = await axios.get(`/place?input=${destination}`);
      // console.log('app result here:')
      // console.log(res.data)
      setCenter(res.data.coordinates);
      setPhotoRef(res.data.photoRef);
      setClicked(true);

    } catch (error) {
      console.log(error)
      setIsError(true);
    }
  };

  const handleAddPlace = (newPlace) => {

    let newPlaces = locations.concat(newPlace);
    setLocations(newPlaces);
    console.log(newPlaces);

    if (newPlaces.length <= 1) {
      return;
    }

    const waypoints = newPlaces.map(p =>({
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

    // console.log("dirRequest=");
    // console.log(directionsRequest);

    directionsService.route(directionsRequest, (result, status) => {
      // console.log("GOT RESPONSE");
      // console.log(status);
      // console.log(result);

      if (status === google.maps.DirectionsStatus.OK) {
        setDirections(result);
      } else {
        console.log("status: " + status);
      }
    });
  };

  const handleTravelMode = (type) => {
    setTravelMode(type);
  };

  const handleBuildRoute = () => {
    setRoutes(true);
  };

  const handleDays = (numberOfDays) => {
    setDays(numberOfDays);
  };

  console.log('LOCATION')
  console.log(locations)
  const handleRemoveMarker = (marker) => {
    let newList = locations.filter((location) => {
       return location.name !== marker;
    });
    setLocations(newList);
  };


  const renderPage = () => {
    if (!clicked) {
      return (
        <LandingPageContainer>
          <LandingPage
            getCenterDestination={getCenterDestination}
            handleDays={handleDays}
          />
        </LandingPageContainer>
      );
    } else {
      let url = `/photo?photoRef=${photoRef}`;
        return (
        <Wrapper>
          <PhotoWrap src={url}></PhotoWrap>
          <MapContainer>
            <Map
              center={center}
              locations={locations}
              origin={origin}
              destination={destination}
              directions={directions}
              travelMode={travelMode}
              routes={routes}
              handleRemoveMarker={handleRemoveMarker}
            />
          </MapContainer>
          {/* <Days
            number={days}
            locations={locations}
            handleBuildRoute={handleBuildRoute}
            handleTravelMode={handleTravelMode}
          /> */}
          <PlacesContainer>
            <PlaceList
              locations={locations}
              handleBuildRoute={handleBuildRoute}
              handleTravelMode={handleTravelMode}
              handleAddPlace={handleAddPlace}
              days={days}
            />
          </PlacesContainer>
        </Wrapper>
      );
    }
  };

  return (
    <>
      {renderPage()}
    </>
  );
}

export default App;
