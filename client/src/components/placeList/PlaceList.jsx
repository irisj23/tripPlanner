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
  justify-content: center;
  padding-left: 50px;
`

const PlacePhoto = styled.img`
  width: 100%;
  height: 300px;
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

  let url = `/photo?photoRef=${props.photoRef}`;

  return (
    <div>
      <PlacePhoto src={url}/>
        <h2 className="title is-2 destTitle">{props.destName}</h2>

      <Wrapper>
        <FormContainer>
          <Form
            handleAddPlace={props.handleAddPlace}
          />
        </FormContainer>

        <PlaceListContainer>
          <>
          {props.locations.length > 0 && props.locations.map((location, index) => {
            return <PlaceListItem
              key={index}
              place={location.name}
              handleRemoveMarker={props.handleRemoveMarker}
              // handleRemoveWindow={handleRemoveWindow}
            />
          })}
          </>
        </PlaceListContainer>
      </Wrapper>
      <br/>
    <br/>
    <RouteContainer>
    <span>SELECT TRANSIT:</span>
      <div class="field has-addons">
      <div class="control">
      <div class="select is-fullwidth">

        <select name="transit">
          <option value="DRIVING">DRIVING</option>
          <option value="BICYCLING">BICYCLING</option>
          <option value="TRANSIT">TRANSIT</option>
          <option value="WALKING">WALKING</option>
        </select>

      </div>
      </div>
      <div class="control">
      <button type="submit" class="button is-info" onClick={handleBuildRouteClick}>BUILD ROUTE</button>
      </div>
      </div>
      </RouteContainer>


    </div>
  )

}

export default PlaceList;
