import React, { useState } from 'react';
import PlaceListItem from './PlaceListItem.jsx';

function PlaceList(props) {

  const handleTransit = (event) => {
    console.log(event.target.value)
    props.handleTravelMode(event.target.value)
  }

  const handleBuildRouteClick = () => {
    console.log('click')
    props.handleBuildRoute()
  };


  return(
    <>
      <ul>
      {props.locations.length > 0 && props.locations.map((location, index) => {
        return <PlaceListItem
          key={index}
          place={location.name}
        />
      })}
      </ul>

      <label>Select Transit:</label>
      <select onChange={handleTransit}>
        <option value="DRIVING">Driving</option>
        <option value="BICYCLING">BICYCLING</option>
        <option value="TRANSIT">TRANSIT</option>
        <option value="WALKING">WALKING</option>
      </select>
      <button onClick={handleBuildRouteClick}>BUILD ROUTE</button>

    </>
  )

}

export default PlaceList;
