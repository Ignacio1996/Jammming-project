import React from 'react';
import './TrackList.css';
import Track from '../Track/Track';

class TrackList extends React.Component{


    render(){
        
        return(
            <div className="TrackList">
                {
                    this.props.tracks.map((track)=>{
                        return (
                        <Track 
                            isRemoval={this.props.isRemoval}
                            onRemove={this.props.onRemove}
                            track={track} 
                            key={track.id} 
                            onAdd={this.props.onAdd} 
                            name={track.name} 
                            artist={track.artist} 
                            album={track.album} />
                        );
                    })
                }
                {/* <!-- You will add a map method that renders a set of Track components  --> */}
            </div>
        );
    }
}

export default TrackList;