import React from 'react';

class Search extends React.Component{
    constructor(props){
        super(props);
        this.state={keyword:""};
    }
  
        render(){
            return( 
                <div id="map-nav">
                <div className="search">
                <input type="text" id="txt-search" maxLength="100" placeholder="ex: musician" value={this.state.keyword} onChange={e=>{this.setState({keyword:e.target.value})}}/>
                <input type="button"  id="btn-search" className="btn-danger" value="Search" onClick={e=>{console.log('clicked. value to search:',this.state.keyword)} }/>
                </div>
                <span id="most-common-container">Most searched:{this.props.commonSearches.map(keyword=>
                <a className="common-search" key={keyword} onClick={()=>{this.setState({keyword})}}>{keyword}</a>)}
                </span>
               </div>);

        }
}

export default Search;