import React, { useState } from 'react';
import PlaceListItem from './PlaceListItem.jsx';
import Form from './Form.jsx';
import styled from 'styled-components';


const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  width: 400px;
  margin-top: 100px;

`

const FormContainer = styled.div`
  order: 1;
  flex-basis: 70;
  padding: 20px;
`

const PlaceListContainer = styled.div`
  order: 2;
  flex-basis: 30;
`
const RouteContainer = styled.div`
  order: 3;
  flex-basis: 30;
`



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
    <Wrapper>
      <FormContainer>
      <Form
        handleAddPlace={props.handleAddPlace}
      />
      </FormContainer>

      <PlaceListContainer>
      <ul>
      {props.locations.length > 0 && props.locations.map((location, index) => {
        return <PlaceListItem
          key={index}
          place={location.name}
        />
      })}
      </ul>
      </PlaceListContainer>

<RouteContainer>
      <label>Select Transit:</label>

      <select onChange={handleTransit}>
        <option value="DRIVING">Driving</option>
        <option value="BICYCLING">BICYCLING</option>
        <option value="TRANSIT">TRANSIT</option>
        <option value="WALKING">WALKING</option>
      </select>

      <button onClick={handleBuildRouteClick}>BUILD ROUTE</button>
      </RouteContainer>
      </Wrapper>
    </>
  )

}

export default PlaceList;
