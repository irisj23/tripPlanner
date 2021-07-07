import React, { useState } from 'react';
import axios from 'axios';
import Map from '../components/Map.jsx';
import Form from '../components/Form.jsx';

function App() {
  const [location, setLocation] = useState('');

  const getDestination = async (destination) => {

    console.log('hey')
    console.log(destination)
    try {
      const result = await axios.get(`/place/?input=${destination}`)
      console.log('app result here:')
      console.log(result)
    } catch (error) {
      console.log(error)
    }
  }

  return (
   <>
   hi
   <Map/>
   <Form
    getDestination={getDestination}
    />
   </>

  );
}

export default App;

