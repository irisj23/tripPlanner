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

  // const [lat, setLat] = useState('');
  // const [long, setLong] = useState('');
  const [center, setCenter] = useState({lat: 34.052235, lng: -118.243683});
  const [isError, setIsError] = useState(false);

  const getCenterDestination = async (destination) => {

    console.log('hey')
    console.log(destination)
    try {
      const res = await axios.get(`/place?input=${destination}`)
      // console.log('app result here:')
      // console.log(res.data)
      setCenter(res.data)
      setClicked(true);

    } catch (error) {
      console.log(error)
      setIsError(true);
    }
  }

  const handleAddPlace = (newPlace) => {
    let newPlaces = locations.concat(newPlace);
    setLocations(newPlaces);
    console.log(locations)

  }

  const renderPage = () => {
    if (!clicked) {
      return (
        <LandingPage
          getCenterDestination={getCenterDestination}
        />
      )
    } else {
      return (
        <>
        <Map
          center={center}
          locations={locations}
          handleAddPlace={handleAddPlace}
        />
        <PlaceList
        locations={locations}
      />
      </>
      )
    }
  }

  return (
    <>

      hi
      {renderPage()}
          {/* only show landingpage is location.length is 0, else show map */}
      {/* <LandingPage
        getCenterDestination={getCenterDestination}
      /> */}
      {/* <Search/> */}
      {/* <SearchBox/> */}
      {/* <Map
        center={center}
        locations={locations}
        handleAddPlace={handleAddPlace}
      /> */}

    </>

  );
}

export default App;

