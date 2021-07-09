/*global google */
import React, { useState, useEffect, useRef } from "react";
import axios from 'axios';
import Map from '../components/Map.jsx';
import LandingPage from '../components/LandingPage.jsx';
import SearchBox from '../components/SearchBox.jsx';
import PlaceList from '../components/PlaceList.jsx';
import config from '../../../config.js';
// import Search from '../components/Search.jsx';


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


  // useEffect(() => {

  // }, []);


  const getCenterDestination = async (destination) => {

    // console.log('hey')
    // console.log(destination)
    try {
      const res = await axios.get(`/place?input=${destination}`);
      // console.log('app result here:')
      // console.log(res.data)
      setCenter(res.data)
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

    console.log("dirRequest=");
    console.log(directionsRequest);

    directionsService.route(directionsRequest, (result, status) => {
      console.log("GOT RESPONSE");
      console.log(status);
      console.log(result);

      if (status === google.maps.DirectionsStatus.OK) {
        setDirections(result);
      } else {
        console.log("status: " + status);
      }
    });
  };

  const handleTravelMode = (type) => {
    setTravelMode(type);
  }


  const renderPage = () => {
    if (!clicked) {
      return (
        <LandingPage
          getCenterDestination={getCenterDestination}
        />
      );
    } else {
        return (
        <>
          <Map
            center={center}
            locations={locations}
            handleAddPlace={handleAddPlace}
            origin={origin}
            destination={destination}
            directions={directions}
            handleTravelMode={handleTravelMode}
          />
          <PlaceList
            locations={locations}
          />

         <SearchBox/>

        </>
      );
    }
  };

  return (
    <>
      hi
      {renderPage()}
    </>
  );
}

export default App;
