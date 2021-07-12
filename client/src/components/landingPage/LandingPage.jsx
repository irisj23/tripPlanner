import React, { useState } from 'react';
import SearchBox from './SearchBox.jsx';
import styled from 'styled-components';

const ImageBackground = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -2;
`



function LandingPage(props) {

  const [number, setNumber] = useState(0);

  const handleSubmitDays = (event) => {
    event.preventDefault();
    // console.log('value 1')
    // console.log(number)
    props.handleDays(number)
  };

  const handleChange = (event) => {
    // console.log('value 2')
    setNumber(event.target.value)
    // console.log(event.target.value)
    // console.log(number)
  };

  return (
    <div className="fullHeight">
      <ImageBackground src='../../../TravelBack2.jpeg'></ImageBackground>
      <div className="curtain"></div>

      <div className="fullHeight columns is-vcentered">
        <div class="fullHeight column is-one-third"></div>
        <div class="column is-one-third">
          <SearchBox
            getCenterDestination={props.getCenterDestination}
          />
        </div>
        <div class="fullHeight column is-one-third"></div>


    </div>
  </div>

  );
}

export default LandingPage;
