import React, { useState } from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import styled from 'styled-components';

const ImageBackground = styled.img`
  position: absolute;
  width: 30px;
  height: 40px;

`

const Wrapper = styled.div`
display: flex;
`

const Icon = styled.div`
  order: 1;
  flex-basis: 30;
  margin: 0;
  padding: 3px;
`

const LocationName = styled.div`
  order: 2;
`


function PlaceListItem(props) {
  // console.log('PLACE HERE')
  // console.log(props.place)
  const [click, setClick] = useState(false);
  const [showNotes, setShowNotes] = useState(false);
  const [removeLocation, setRemoveLocation] = useState(false);
  const [notes, setNotes] = useState('');

  const handleAddNote = () => {

  };

  const handleEditNote = () => {

  };

  const handleDeleteNote = () => {

  };

  const removeMarker = () => {
    props.handleRemoveMarker(props.place);
    // props.handleRemoveWindow(props.place);
  };

  // const buttonText = notes.length > 1 ? 'edit notes' : 'add note';
  // const showNotes = notes.length > 0 ? true : false;
console.log('here:')
console.log(props.place)

  return (
    <Wrapper>
      <Icon>
    <FaMapMarkerAlt/>

    </Icon>
    <LocationName>
     <ul onClick={() => setClick(!click)}>{props.place}</ul>

      {click && !showNotes &&  (
        <>
        <button class="button is-info is-small is-outlined">add note</button>

        <button class="button is-info is-small is-outlined" sonClick={removeMarker}>remove location</button>
        </>

      )}

      {/* {click && notes.length > 1 && (
        <>
        <div>clicked here</div>

        <div>notes:</div>
        <span></span>
        <button>edit note</button>
        <button>delete note</button>

        </>
      )} */}
      </LocationName>
    </Wrapper>
  )
}

export default PlaceListItem;
