import React, {useEffect} from "react";
import { FaUserGroup } from "react-icons/fa6";
import { BsHouseFill, BsSearch } from "react-icons/bs";
import Reveal, { Fade } from "react-awesome-reveal";
import { keyframes } from "@emotion/react";
import {up, left, right, down} from '../styles/anim.js';

// Input - "message1, message2, message3"
function facts(props){
    return(
        <div className="flex justify-center items-center bg-[#6A2D33]" id="facts-section-container">
            <div className="w-9/12 flex justify-center items-center">
                
                <div className="w-1/5 block justify-center items-center p-[2%] m-[2%]">
                    <Fade triggerOnce keyframes={up} delay="0">
                        <div className="flex justify-center items-center">
                            <FaUserGroup size="6rem" color="white" />
                        </div>
                        <p className="text-center text-white">{props.message1}</p>  
                    </Fade>
                </div>
                <div className="w-1/5 block justify-center items-center p-[2%] m-[2%]">
                    <Fade triggerOnce keyframes={up} delay="20">
                        <div className="flex justify-center items-center">
                            <BsHouseFill size="6rem" color="white" />
                        </div>
                        <p className="text-center text-white">{props.message2}</p>
                    </Fade>
                </div>
                <div className="w-1/5 block justify-center items-center p-[2%] m-[2%]">
                    <Fade triggerOnce keyframes={up} delay="40">
                        <div className="flex justify-center items-center">
                            <BsSearch size="6rem" color="white" />
                        </div>
                        <p className="text-center text-white">{props.message3}</p>
                    </Fade>
                </div>
            </div>
        </div>
    );
}
export default facts