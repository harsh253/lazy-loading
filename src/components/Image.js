import React, {Component} from 'react';
import './styles/image.css'

class Image extends Component{

    constructor(){
        super();
        this.state = {
            imgLoaded : false
        }
    }


    render(){
        return(
            <img onLoad={ ()=>this.setState({
                imgLoaded: true
            })}
            src = {this.props.src}
            alt = {this.props.alt}
            className = {this.state.imgLoaded ? 'image': 'image blur'}
            ></img> 
        )
    }
}

export default Image