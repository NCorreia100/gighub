import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import {GOOGLE_API_KEY} from '../../config.json';
import Marker from './marker.jsx';


const defaultProps = {  
    lat: 40.7665,
    lng: -73.9835
};
class SimpleMap extends Component {

  render() {
     
    return (
      // Important! Always set the container height explicitly     
        <GoogleMapReact
          bootstrapURLKeys={{ key: GOOGLE_API_KEY }}
          defaultCenter={defaultProps}
          defaultZoom={11}
        >
         <Marker
            lat={defaultProps.lat}
            lng={defaultProps.lng}
            text="My Marker"
          />
        </GoogleMapReact>     
    );
  }
}

export default SimpleMap;