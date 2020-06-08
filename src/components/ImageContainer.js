import React from "react";
import "./styles/image-container.css";
import observerOptions from '../observerOptions/observerOptions';

import Image from './Image';

class ImageContainer extends React.Component{

    constructor(){
        super();
        this.state = {
            isVisible: false
        }
        this.myRef = React.createRef();
    }

    componentDidMount(){
        let onIntersect = (entries, observerElem) => {
            entries.forEach(entry => {
                if(entry.isIntersecting){
                    this.setState({
                        isVisible: true
                    })
                    observerElem.unobserve(this.myRef.current)
                }
            })
        }

        const observer = new IntersectionObserver(onIntersect, observerOptions);

        observer.observe(this.myRef.current)

        
        
    }


    render(){
        const aspectRatio = ((this.props.height / this.props.width) * 100 );
        return(
            <div 
            ref={this.myRef} 
            className="image-container" 
            style={{
                paddingBottom: `${aspectRatio}%`
                }}
            >
                {this.state.isVisible && (
                    <Image src={this.props.src} alt={this.props.alt}></Image>
                )}
            </div>
        )
    }
}

export default ImageContainer