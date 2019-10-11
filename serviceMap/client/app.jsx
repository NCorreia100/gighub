import React from 'react';
import ReactDOM from 'react-dom';
import SimpleMap from './components/simpleMap.jsx';
import Search from './components/search.jsx';

// require('../public/serviceMap.css');
const mostCommonSearches=['tutor','nanny','dogwalker'];
const location=  {lat: 40.7665,lng: -73.9835};
const services=[{lat: 41,lng: -74},{lat: 40.5,lng: -73.9},{lat: 40.5,lng: -73.8}]

class App extends React.Component{
    constructor(props){
        super(props);
        this.state={
            location:{},
            keyword:''
        }
    }
    render(){
        return(
            <div id="map-outer-form">              
                  <Search commonSearches={mostCommonSearches} />               
               <div id="map-inner-container"><SimpleMap location={location} services={services}/></div>
            </div>
        );
    }
}


ReactDOM.render(<App/>,document.getElementById('map-root'))