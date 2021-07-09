import React, { useState } from 'react';


function PlaceListItem(props) {
  // console.log('PLACE HERE')
  // console.log(props.place)
  const [click, setClick] = useState(false);
  const [showNotes, setShowNotes] = useState(false);
  const [notes, setNotes] = useState('');

  const handleAddNote = () => {

  };

  const handleEditNote = () => {

  };

  const handleDeleteNote = () => {

  };

  // const buttonText = notes.length > 1 ? 'edit notes' : 'add note';
  // const showNotes = notes.length > 0 ? true : false;


  return (
    <>
     <li onClick={() => setClick(!click)}>{props.place}</li>

      {click && !showNotes &&  (
        <>
        <button>add note</button>
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
    </>
  )
}

export default PlaceListItem;
