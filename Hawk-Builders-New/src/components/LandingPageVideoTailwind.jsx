import React from "react";
import "../styles/css/masterout.css";
import "../styles/css/back.css";
import "../styles/css/colors.css";
import "../styles/css/houseImage.css";

import Reveal, { Fade } from "react-awesome-reveal";
import { keyframes } from "@emotion/react";
import {up, left, right, down} from '../styles/anim.js';
// Input - "url, name, desc"

function lPage(props){
    const videoURL = "https://www.youtube.com/embed/"+props.url+"?autoplay=1&mute=1&loop=1&controls=0&playlist="+props.url;

    return(
        <div className="grid md:grid-cols-2 mx-auto md:w-[200vw] bg-black bg-opacity-40 md:bg-opacity-0">
                <div className="aspect-w-16 aspect-h-9">
                    <iframe src={videoURL} autoPlay frameBorder="0" allowFullScreen className="h-full w-full -z-10"> </iframe>
                </div>
            
                <div className="aspect-w-16 aspect-h-9 flex z-10 bg-[#6A2D33] md:bg-black md:bg-opacity-40 md:-translate-x-[100vw]">
                    <div className="flex justify-center items-center">
                        <div className="text-center">
                            <Fade triggerOnce keyframes={up} delay="90">
                                <h1 className="text-7xl block py-2 px-3 md:p-0 border-none bg-transparent text-white" id="heading">
                                    {props.name}
                                </h1> 
                            </Fade>

                            <Fade triggerOnce keyframes={up} delay="120">
                                <h6 className="text-4xl block py-2 px-3 md:p-0 border-none bg-transparent text-white">
                                    {props.desc}
                                </h6>
                            </Fade>
                        </div>
                    </div>

                </div>

            
        </div>
        
    );
}
export default lPage