import React, { useState } from 'react';
import axios from 'axios';
import Map from '../components/Map.jsx';
import Form from '../components/Form.jsx';
import MarkerEx from '../components/Marker.jsx';

function App() {
  const [location, setLocation] = useState('');
  // const [lat, setLat] = useState('');
  // const [long, setLong] = useState('');
  const [center, setCenter] = useState({});
  const [isError, setIsError] = useState(false);

  const getDestination = async (destination) => {

    console.log('hey')
    console.log(destination)
    try {
      const res = await axios.get(`/place?input=${destination}`)
      console.log('app result here:')
      console.log(res.data)
      setCenter(res.data)

    } catch (error) {
      console.log(error)
      setIsError(true);
    }
  }

  return (
   <>
   hi
   {/* <MarkerEx/> */}
   <Map
   center={center}
   />
   <Form
    getDestination={getDestination}
    />
   </>

  );
}

export default App;

