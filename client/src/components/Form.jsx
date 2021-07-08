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

      // console.log('form result here:')
      // console.log(res.data)
      // props.handleAddMarker(data);
      setLocation('');
    } catch (error) {
      console.log(error)
    }
  }

  const handleTransit = () => {
    console.log('transit')
  }

  return (
    <>

      <label>ENTER LOCATION:</label>
      <input name="destination" value={location} placeholder="" onChange={(e) => setLocation(e.target.value)}/>
      <label>Select Transit:</label>
      <select onChange={handleTransit}>
        <option value="DRIVING">Driving</option>
        <option value="BICYCLING">BICYCLING</option>
        <option value="TRANSIT">TRANSIT</option>
        <option value="WALKING">WALKING</option>
      </select>
      <button onClick={handleSubmitLocation}>ENTER</button>







{/*
      <form onSubmit={handleSubmitLocation}>
        <label>ENTER LOCATION:</label>
        <input name="destination" value={location} placeholder="" onChange={(e) => setLocation(e.target.value)}/>
        <input name="travelMode" type="radio">Driving</input>
        <button type="submit">enter</button>
      </form> */}
    </>
  )
}

export default Form;
