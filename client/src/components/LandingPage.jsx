import React, { useState } from 'react';
import SearchBox from '../components/SearchBox.jsx';
import { StandaloneSearchBox } from '@react-google-maps/api';

function LandingPage(props) {

  // const [destination, setDestination] = useState('');

  // const handleSubmitDest = (event) => {
  //   event.preventDefault();

  //   props.getCenterDestination(destination);
  //   console.log(destination)
  //   setDestination('');
  // }



  return (
   <>
    <SearchBox
      getCenterDestination={props.getCenterDestination}
    />
   </>

  );
}

export default LandingPage;
