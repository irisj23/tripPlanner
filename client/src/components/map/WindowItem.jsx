/*global google */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const MarkPhoto = styled.img`
  width: 200px;
  height: 200px;
`


function WindowItem({name, photoRef}) {

  // const removeMarker = () => {
  //   handleRemoveMarker(name);
  //   handleRemoveWindow(name);
  // };

  // console.log('URL')
  // console.log(url)

  return (
    <>


    <b>{name}</b>
    <figure class="image is-3by4">
      <img src={photoRef}/>
    </figure>
    {/* <button onClick={removeMarker}>remove location</button> */}

    </>
  )
}

export default WindowItem;
