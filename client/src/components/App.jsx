import React, { useState } from 'react';
import axios from 'axios';
import Map from '../components/Map.jsx';
import LandingPage from '../components/LandingPage.jsx';
import SearchBox from '../components/SearchBox.jsx';
import PlaceList from '../components/PlaceList.jsx';
// import Search from '../components/Search.jsx';

function App() {

  const [locations, setLocations] = useState([]);
  const [clicked, setClicked] = useState(false);
  const [center, setCenter] = useState({});
  const [origin, setOrigin] = useState('');
  const [directions, setDirections] = useState(null);
  const [destination, setDestination] = useState('');
  const [isError, setIsError] = useState(false);

  const getCenterDestination = async (destination) => {

    console.log('hey')
    console.log(destination)
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

  const handleAddPlace = async (newPlace) => {
    let newPlaces = locations.concat(newPlace);
    setLocations(newPlaces);
    console.log(locations);

    if (newPlaces.length > 1) {
      const newOrigin = newPlaces[0].name;
      const newDestination = newPlaces[1].name;
      setOrigin(newOrigin);
      setDestination(newDestination);

      const response = await axios.get(`/directions?origin=${newOrigin}&destination=${newDestination}`);
      console.log(response);
      setDirections(response.data);
    }
  };

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
          />
          <PlaceList
          locations={locations}
          />
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
