import React, { useState } from 'react';
import axios from 'axios';

function Form(props) {
  const [location, setLocation] = useState('');

  const handleSubmitLocation = async (event) => {
    event.preventDefault();

    try {
      console.log(location)
      const res = await axios.get(`/place?input=${location}`)
      let data = res.data
      props.handleAddPlace({name: location, coordinates: data})

      setLocation('');
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <label>LOCATION:</label>

      <input name="destination" value={location} placeholder="" onChange={(e) => setLocation(e.target.value)}/>

      <button onClick={handleSubmitLocation}>ENTER</button>

    </>
  )
}

export default Form;
