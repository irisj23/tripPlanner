/*global google */
import React, { useState, useEffect } from 'react';


function WindowItem({name, handleRemoveMarker}) {


  return (
    <>

    <div>window here</div>
    {name}
    <button onClick={() => handleRemoveMarker(name)}>remove location</button>

    </>
  )
}

export default WindowItem;
