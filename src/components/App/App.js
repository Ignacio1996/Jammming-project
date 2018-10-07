import React, { Component } from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';

//Stage 2
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      searchResults: [
        {
          name: "All of Me",
          artist: "John Legend",
          album: "Love in the Future",
          id: 1

        }
      ]
    }
  }
  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div class="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults}/>
            <Playlist/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
