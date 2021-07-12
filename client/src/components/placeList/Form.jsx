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
      <label>ENTER LOCATION:</label>

      <div class="field has-addons">
        <div class="control">
          <input class="input" type="text" placeholder="Find a repository" name="destination" value={location} placeholder="" onChange={(e) => setLocation(e.target.value)}/>
        </div>
        <div class="control">
          <a class="button is-info" onClick={handleSubmitLocation}>
            SEARCH
          </a>
        </div>
      </div>

    </>
  )
}

export default Form;
