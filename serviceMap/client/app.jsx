import React from 'react';
import ReactDOM from 'react-dom';


class App extends React.Component{
    constructor(props){
        super(props);

    }
    render(){
        return(
            <div id="map-outer-form">
                <h1>Success!</h1>
            </div>
        );
    }
}


ReactDOM.render(<App/>,document.getElementById('map-root'))