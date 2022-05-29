import React from 'react';
import './App.css';
import axios from 'axios'



import SearchBar from './components/SearchBar'

class App extends React.Component{
  onSearchSubmit(term){
    console.log(term)
  }

  render(){
    return (
      <div className="ui container" style={{marginTop: '1%'}}>
        <SearchBar userSubmit={this.onSearchSubmit}/>
      </div>
    );
  }
}

export default App;
