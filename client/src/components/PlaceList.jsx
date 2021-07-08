import React, { useState } from 'react';
import PlaceListItem from '../components/PlaceListItem.jsx';

function PlaceList(props) {
console.log(props.locations)
  return(
    <>
    <ul>
     {props.locations.map((location, index) => {
       return <PlaceListItem
       key={index}
       location={location}
       />
     })}
  </ul>
    </>
  )

}

export default PlaceList;
