import React, { useState } from 'react';
import PlaceListItem from '../components/PlaceListItem.jsx';

function PlaceList(props) {

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
    </>
  )

}

export default PlaceList;
