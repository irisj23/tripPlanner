import React from 'react';
import { StandaloneSearchBox } from '@react-google-maps/api';

function SearchBox() {
  // const onLoad = ref => this.searchBox = ref;

  // const onPlacesChanged = () => console.log(this.searchBox.getPlaces());

  return (
    <StandaloneSearchBox
      // onLoad={onLoad}
      // onPlacesChanged={
      //   onPlacesChanged
      // }
    >
      <input
        type="text"
        placeholder="Customized your placeholder"
        style={{
          boxSizing: `border-box`,
          border: `1px solid transparent`,
          width: `240px`,
          height: `32px`,
          padding: `0 12px`,
          borderRadius: `3px`,
          boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
          fontSize: `14px`,
          outline: `none`,
          textOverflow: `ellipses`,
          position: "absolute",
          left: "50%",
          marginLeft: "-120px"
        }}
      />
    </StandaloneSearchBox>

  )
}

export default SearchBox;
