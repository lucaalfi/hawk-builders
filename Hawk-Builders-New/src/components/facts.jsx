import React, {useEffect} from "react";
import { FaUserGroup } from "react-icons/fa6";
import { BsHouseFill, BsSearch } from "react-icons/bs";
import Reveal, { Fade } from "react-awesome-reveal";
import { keyframes } from "@emotion/react";
import {up, left, right, down} from '../styles/anim.js';

// Input - "message1, message2, message3"
function facts(props){
    return(
        <div id="facts-section-container">
            <div className="container">
                
                <div className="info">
                    <Fade triggerOnce keyframes={up} delay="0">
                        <FaUserGroup size="6rem" color="white" />
                        <p>{props.message1}</p>  
                    </Fade>
                </div>
                <div className="info">
                    <Fade triggerOnce keyframes={up} delay="20">
                        <BsHouseFill size="6rem" color="white" />
                        <p>{props.message2}</p>
                    </Fade>
                </div>
                <div className="info">
                    <Fade triggerOnce keyframes={up} delay="40">
                        <BsSearch size="6rem" color="white" />
                        <p>{props.message3}</p>
                    </Fade>
                </div>
            </div>
        </div>
    );
}
export default facts