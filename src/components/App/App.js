import React, { Component } from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
import Spotify from '../../util/Spotify';

Spotify.getAccessToken();

//Stage 2
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      searchResults: [
        
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
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
    
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

  updatePlaylistName(name){
    var playlistName = [...this.state.playlistName];
    playlistName = name;
    this.setState({
      playlistName: playlistName
    });
  }

  savePlaylist(){
    var trackUris = [];
    this.state.playlistTracks.map((track)=>{
      trackUris.push(track.uri);
    })
  }

  search(term){
    console.log("Searching...");
    const mySearch = Spotify.search(term);
    console.log(mySearch);
    //This gets me a promise instead of a returned array
    

    // this.setState({
    //   searchResults: 
    // })
    
    
    
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar onSearch={this.search} />
          <div className="App-playlist">
            <SearchResults 
              onAdd={this.addTrack} 
              onSearch={this.search}
              searchResults={this.state.searchResults}/>
            <Playlist 
              playlistName={this.state.playlistName} 
              playlistTracks={this.state.playlistTracks}
              onRemove={this.removeTrack}
              onNameChange={this.updatePlaylistName}
              onSave={this.savePlaylist}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;