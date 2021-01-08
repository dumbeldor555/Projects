import React, {Component} from 'react';
import {Consumer} from '../../Context';

class Search extends Component {

  handleSearch(dispatch) {
  const chosenColor = document.querySelector('.searchInput').value;
  dispatch({type:'CLICKED', color: chosenColor});

  }

  render() {
    return(
      <Consumer>
        {value => {
          const {dispatch, placeHolderColor} = value; 
          const {colorError} = value; 
          console.log(colorError);
          return( 
            <div className="searchContainer">
                <input  placeholder={placeHolderColor} type="text" className={`searchInput ${colorError ? 'error' : ''}`}/>
                <button onClick={this.handleSearch.bind(this, dispatch)} className="searchBtn">get</button>
            </div>
          )
        }}
      </Consumer>
    )
  }
}

export default Search;