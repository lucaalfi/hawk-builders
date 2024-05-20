import React from "react";
import "../styles/css/master.css";
import "../styles/css/back.css";
import "../styles/css/colors.css";
import "../styles/css/houseImage.css";

// import Reveal, { Fade } from "react-awesome-reveal";
// import { keyframes } from "@emotion/react";
// import {up, left, right, down} from '../styles/anim.js';
//Input - "url, name, desc"

function lPage(props){
    const videoURL = "https://www.youtube.com/embed/"+props.url+"?autoplay=1&mute=1&loop=1&controls=0&playlist="+props.url;

    return(
        <div id="landing-page-container">
            <div id="video-container">
                <iframe src={videoURL} autoPlay frameBorder="0" allowFullScreen> </iframe>
            
            <div id="video-overlay-container">
                <h1 id="heading">
                    {props.name}
                </h1> 
                {/* <Fade triggerOnce keyframes={up} delay="90">

                </Fade> */}
                <h6 className="desc">
                    {props.desc}
                </h6>
                {/* <Fade triggerOnce keyframes={up} delay="120">

                </Fade> */}
            </div>


            </div>
            
        </div>
        
    );
}
export default lPage