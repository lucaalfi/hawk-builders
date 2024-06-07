import React from 'react';
import Reveal, { Fade } from "react-awesome-reveal";
import { keyframes } from "@emotion/react";
import {up} from '../styles/anim.js';



function houseImage(props){
    return(
        <div className="relative m-5 h-[143px] w-[220px] hover:overflow-hidden transition duration-500 transform transition duration-500 
                        hover:scale-[1.7] hover:z-20">
            <Fade triggerOnce keyframes={up} delay={props.id * 100}>
                <div>
                    <img src={props.link} className="relative rounded-3xl -z-10 object-cover h-[143px] w-[220px]" />
                </div>
            </Fade>
        </div>

    );
}

export default houseImage;