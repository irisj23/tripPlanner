import React, { useState } from 'react';


function PlaceListItem(props) {
  console.log('PLACE HERE')
  console.log(props.place)
  return (
    <>
     <ul>{props.place}</ul>
    </>
  )
}

export default PlaceListItem;
