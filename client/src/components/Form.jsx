import React, { useState } from 'react';


function Form() {

  const [destination, setDestination] = useState('');

  const handleSubmitDest = (event) => {
    event.preventDefault();

    // props.getDestination(destination);
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

export default Form;
