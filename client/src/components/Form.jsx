import React, { useState } from 'react';

function Form() {
  const [location, setLocation] = useState('');

  const handleSubmitLocation = (event) => {
    event.preventDefault();
    console.log('place added!')
    console.log(location)
    setLocation('');
  }

  return (
    <>
      <form onSubmit={handleSubmitLocation}>
        <label>ENTER LOCATION:</label>
        <input name="destination" value={location} placeholder="" onChange={(e) => setLocation(e.target.value)}/>
        <button type="submit">enter</button>
      </form>
    </>
  )
}

export default Form;
