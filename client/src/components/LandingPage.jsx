import React, { useState } from 'react';
import { StandaloneSearchBox } from '@react-google-maps/api';

function LandingPage(props) {

  const [destination, setDestination] = useState('');

  const handleSubmitDest = (event) => {
    event.preventDefault();

    props.getCenterDestination(destination);
    console.log(destination)
    setDestination('');
  }



  return (
   <>
   <form onSubmit={handleSubmitDest}>
     <label>ENTER DESTINATION:</label>
      <input name="destination" value={destination} placeholder="" onChange={(e) => setDestination(e.target.value)}/>
      <button type="submit">enter</button>
   </form>

   </>

  );
}

export default LandingPage;
