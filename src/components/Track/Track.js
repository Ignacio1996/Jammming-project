import React from 'react';
import './Track.css';

class Track extends React.Component{

    renderAction(){
        if(this.props.isRemoval){
            return <a className="Track-action">-</a>
        } else {
            return <a className="Track-action">+</a>
        }
    }

    render(){
        return(
            <div className="Track">
            <div className="Track-information">
                 <h3>{this.props.name}</h3> 
                 <p>{this.props.artist} | {this.props.album}</p>
                {/* <p><!-- track artist will go here--> | <!-- track album will go here --></p> */}
            </div>
            {/* <a className="Track-action"><!-- + or - will go here --></a> */}
            </div>
        );
    }
}

export default Track;