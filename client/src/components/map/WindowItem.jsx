/*global google */
import React, { useState, useEffect } from 'react';


function WindowItem({name, handleRemoveMarker, handleRemoveWindow}) {

  const removeMarker = () => {
    handleRemoveMarker(name);
    handleRemoveWindow(name);
  };

  return (
    <>

    <div>window here</div>
    {name}
    <button onClick={removeMarker}>remove location</button>

    </>
  )
}

export default WindowItem;
