import React from 'react';
import SearchBar from './components/SearchBar';
import ImageList from './components/ImageList';
// import unsplash from './api/unsplash';
import axios from 'axios';


class App extends React.Component{
  state = {
    images: []
  };

  onSearchSubmit = async term => {
    //Fetching the search api data
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        params: { query: term },
        headers: {
          Authorization: 
            'Client-ID miKs2tuv_hZ7DxRvXNohVU9rt82lA77k-rtoU3bScLQ'
        }
    });

    //Returning the list of results to images object
    this.setState({
      images: response.data.results
    });
  }

  render(){
    return (
      <div className="ui container" style={{marginTop: '1%'}}>
        <SearchBar userSubmit={this.onSearchSubmit}/>
        <ImageList images={this.state.images}/>
      </div>
    );
  }
}

export default App;
