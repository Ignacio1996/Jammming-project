import React from 'react';
import './Track.css';

class Track extends React.Component{
    constructor(props){
        super(props);

        this.addTrack = this.addTrack.bind(this); 
        this.renderAction = this.renderAction.bind(this);
        this.removeTrack = this.removeTrack.bind(this);
    }

    renderAction(){
        if(this.props.isRemoval){
            return <a onClick={this.removeTrack} className="Track-action">-</a>
        } else {
            return <a onClick={this.addTrack} className="Track-action">+</a>
        }
    }

    addTrack(){
        this.props.onAdd(this.props.track);
    }

    removeTrack(){
        this.props.onRemove(this.props.track);
    }

    render(){
        return(
            <div className="Track">
            <div className="Track-information">
                 <h3>{this.props.name}</h3> 
                 <p>{this.props.artist} | {this.props.album}</p>
            </div>
            {this.renderAction()}
            </div>
        );
    }
}

export default Track;