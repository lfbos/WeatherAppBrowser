import React, { PropTypes } from 'react'
import {GoogleMapLoader, GoogleMap} from 'react-google-maps';

const SingleMap = (props) => {
 return (
  <GoogleMapLoader
   containerElement={<div style={{height: '100%'}}></div>}
   googleMapElement={
    <GoogleMap defaultZoom={12} defaultCenter={{lat: props.lat, lng: props.lon}}/>
   }
   />
 );
}

export default SingleMap;
