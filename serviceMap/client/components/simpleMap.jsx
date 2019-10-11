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
     let mapCenter = this.props.location;
    return(<GoogleMapReact
          bootstrapURLKeys={{ key: GOOGLE_API_KEY }}
          defaultCenter={mapCenter}
          defaultZoom={11}
        >
         <Marker
            lat={mapCenter.lat}
            lng={mapCenter.lng}
            center={true}
          />
        </GoogleMapReact>     
    );
  }
}

export default SimpleMap;