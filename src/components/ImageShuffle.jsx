import './ImageShuffle.css'
import React from "react"
import 'react-slideshow-image/dist/styles.css'
import { Fade, Zoom, Slide } from "react-slideshow-image"

const slideImages = [
    {
        url: 'https://images.unsplash.com/photo-1560790465-b8cab8eb0be6?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        caption: 'First Slide'
    },
    {
        url: 'https://images.unsplash.com/photo-1602452781413-bc4df5d696c8?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        caption: 'Second Slide'
    },
    {
        url: 'https://images.unsplash.com/photo-1585072097589-f6ea512762f4?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        caption: 'Third Slide'
    },
    {
        url: 'https://images.unsplash.com/photo-1504593811423-6dd665756598?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        caption: 'Fourth Slide'
    },
    {
        url: 'https://images.unsplash.com/photo-1574177367965-3e37ff611c48?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        caption: 'Fifth Slide'
    }
];

const divStyle = {
    display: 'flex',
    alignItems: "center",
    justifyContent: "center",
    height: "700px",
    backgroundSize: 'cover',
    backgroundPosition: 'center'
}

const spanStyle = {
    fontSize: "20px",
    background: "#efefef",
    color: "#000000"
}
function ImageShuffle() {
    return(
        <div className = 'slide-container'>
            <Fade>
                {slideImages.map((image, index) => (
                    <div key = {index}>
                        <div style={{...divStyle, backgroundImage:`url(${image.url})`}}>
                            <span style={spanStyle}>{image.caption}</span>
                        </div>
                    </div>
                ))}
            </Fade>
        </div>
    )

}

export default ImageShuffle;