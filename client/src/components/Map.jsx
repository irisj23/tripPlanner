import React from 'react';
import config from '../../../config.js';
import Form from '../components/Form.jsx';
import { GoogleMap, useLoadScript, Marker, StandaloneSearchBox } from '@react-google-maps/api';

const containerStyle = {
  width: '550px',
  height: '550px'
};

const center = [{
  lat: 37.773972,
  lng: -122.431297
}];

function Map(props) {
  const onLoad = ref => this.searchBox = ref;

  // const onPlacesChanged = () => console.log(this.searchBox.getPlaces());

  const {isLoaded, loadError} = useLoadScript({
    googleMapsApiKey: config.token
  })

  const renderMap = () => {

    return (
      <>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={props.center}
        zoom={12}
      >

      <Marker
       icon={"https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"}
        position={center[0]}
      />

      </GoogleMap>
      <br/>
      <Form/>
      </>
    )
  }

  if (loadError) {
    return <div>Error loading Map</div>
  }

  return isLoaded ? renderMap() : <div>noooo</div>
}


// <StandaloneSearchBox
//       onLoad={onLoad}
//       onPlacesChanged={
//         onPlacesChanged
//       }
//     >
//       <input
//         type="text"
//         placeholder="Customized your placeholder"
//         style={{
//           boxSizing: `border-box`,
//           border: `1px solid transparent`,
//           width: `240px`,
//           height: `32px`,
//           padding: `0 12px`,
//           borderRadius: `3px`,
//           boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
//           fontSize: `14px`,
//           outline: `none`,
//           textOverflow: `ellipses`,
//           position: "absolute",
//           left: "50%",
//           marginLeft: "-120px"
//         }}
//       />
//     </StandaloneSearchBox>

//   </GoogleMap>


//     </useLoadScript>
//   )
// }

export default Map;
