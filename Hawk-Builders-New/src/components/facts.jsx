import React, {useEffect} from "react";
import { FaUserGroup } from "react-icons/fa6";
import { BsHouseFill, BsSearch } from "react-icons/bs";
// import Reveal, { Fade } from "react-awesome-reveal";
// import { keyframes } from "@emotion/react";
// import {up, left, right, down} from '../styles/anim.js';

// Input - "message1, message2, message3"
function facts(props){
    return(
        <div id="facts-section-container">
            <div className="container">
                
                <div className="info">
                    <FaUserGroup size="6rem" color="white" />
                    <p>{props.message1}</p>                    
                    {/* <Fade triggerOnce keyframes={up} delay="0">

                    </Fade> */}
                </div>
                <div className="info">
                    {/* <BsHouseFill size="6rem" color="white" /> */}
                    <p>{props.message2}</p>
                    {/* <Fade triggerOnce keyframes={up} delay="20">

                    </Fade> */}
                </div>
                <div className="info">
                    {/* <BsSearch size="6rem" color="white" /> */}
                    <p>{props.message3}</p>
                    {/* <Fade triggerOnce keyframes={up} delay="40">

                    </Fade> */}
                </div>
            </div>
        </div>
    );
}
export default facts