import React from 'react';
import ReactDOM from 'react-dom';
import SimpleMap from './simpleMap.jsx';
// require('../public/serviceMap.css');

class App extends React.Component{
    constructor(props){
        super(props);
        this.state={
            mostCommonSearches:['tutor','nanny','dogwalker']
        }
    }
    render(){
        return(
            <div id="map-outer-form">
               <div id="map-nav">
                <input type="text" maxLength="100" placeholder="search keywork"/>
                <input type="button" className="btn-danger" value="Search"/>
                <span id="most-common-container">{this.state.mostCommonSearches.map(keyword=><a className="common-search" key={keyword}>{keyword}</a>)}</span>
               </div>
               <div id="map-pane"><SimpleMap/></div>
            </div>
        );
    }
}


ReactDOM.render(<App/>,document.getElementById('map-root'))