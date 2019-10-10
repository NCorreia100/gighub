import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import {GOOGLE_API_KEY} from '../config';



const defaultProps = {  
    lat: 59.95,
    lng: 30.33 
};
class SimpleMap extends Component {

  render() {
    return (
      // Important! Always set the container height explicitly     
        <GoogleMapReact
          bootstrapURLKeys={{ key: GOOGLE_API_KEY }}
          defaultCenter={defaultProps}
          defaultZoom={7}
        >
          ()=><span
            lat={defaultProps.lat}
            lng={defaultProps.lng}
            text="My Marker"
          ></span>
        </GoogleMapReact>     
    );
  }
}

export default SimpleMap;