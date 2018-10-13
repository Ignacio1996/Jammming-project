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
      ],
      playlistName: 'Running',
      playlistTracks:[
        {
          name: "Under the Bridge",
          artist: "Red Hot Chilli Peppers",
          album: "Blood, Sugar",
          id: 2
        }
      ]
    }

    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
  }

  addTrack(track){
    // Checks if the track is in the playlist before adding it
    if(this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id)){
      return;
    }
    // Adds the track to the playlist
    var newPlaylist = [...this.state.playlistTracks, track];
    this.setState({
      playlistTracks: newPlaylist
    })
  }

  // removes playlist track
  removeTrack(track){
    let tracks = [...this.state.playlistTracks];
    // Filter out element 
    tracks = tracks.filter(currentTrack => currentTrack.id != track.id);
    this.setState({
      playlistTracks: tracks
    })

  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div class="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults 
              onAdd={this.addTrack} 
              searchResults={this.state.searchResults}/>
            <Playlist 
              playlistName={this.state.playlistName} 
              playlistTracks={this.state.playlistTracks}
              onRemove={this.removeTrack}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
