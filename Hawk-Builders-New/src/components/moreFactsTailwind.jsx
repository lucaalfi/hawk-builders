import React, {useEffect} from "react";
import { FaUserGroup } from "react-icons/fa6";
import { BsPaintBucket, BsPlug, BsBricks, } from "react-icons/bs";
import Reveal, { Fade } from "react-awesome-reveal";
import { keyframes } from "@emotion/react";
import {up, left, right, down} from '../styles/anim.js';

// Input - "message1, message2, message3"
function MoreFacts(props){
    return(
        <div className="flex flex-col justify-center items-center bg-rose-900" id="facts-section-container">
                <div className="w-full justify-center items-center text-center">
                    <h1 className="text-white p-2 text-2xl font-bold">We have you cover for all your construction needs.</h1>    
                </div> 
            <div className="w-9/12 flex justify-center items-center">
                <div className="w-1/5 block justify-center items-center p-[2%] m-[2%]">
                    <Fade triggerOnce keyframes={up} delay="0">
                        <div className="flex justify-center items-center">
                            <BsBricks size="6rem" color="white" />
                        </div>
                        <p className="text-center text-white">{props.message1}</p>  
                    </Fade>
                </div>
                <div className="w-1/5 block justify-center items-center p-[2%] m-[2%]">
                    <Fade triggerOnce keyframes={up} delay="20">
                        <div className="flex justify-center items-center">
                            <BsPlug size="6rem" color="white" />
                        </div>
                        <p className="text-center text-white">{props.message2}</p>
                    </Fade>
                </div>
                <div className="w-1/5 block justify-center items-center p-[2%] m-[2%]">
                    <Fade triggerOnce keyframes={up} delay="40">
                        <div className="flex justify-center items-center">
                            <BsPaintBucket size="6rem" color="white" />
                        </div>
                        <p className="text-center text-white">{props.message3}</p>
                    </Fade>
                </div>
            </div>
        </div>
    );
}
export default MoreFacts;