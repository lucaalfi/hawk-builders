import React from "react";
import Reveal, { Fade } from "react-awesome-reveal";
import { keyframes } from "@emotion/react";
import {up, left, right, down} from '../styles/anim.js';

// Input - "name, desc, image"
import PropTypes from 'prop-types'

function aboutUs(props){
    return(
        <div className="flex justify-center items-center m-[5%]">
            <div className="w-9/12 block md:flex justify-center items-center">
                <div className="w-full md:w-2/4">
                    <Fade triggerOnce keyframes={right} delay="20">
                        <h2 className="text-3xl">
                            {props.name}
                        </h2>
                    </Fade>
                    <Fade triggerOnce keyframes={right} delay="0">
                        <p className="text-2xl text-gray-500">
                            {props.desc}
                        </p>  
                    </Fade>
                </div>
                <div className="flex justify-center items-center md:ml-[10%] w-full md:w-5/12">
                    <Fade triggerOnce keyframes={left} delay="20">
                        <img className="w-full rounded-3xl" src={props.image}></img>
                    </Fade>
                </div>
            </div>
        </div>
    );
}

aboutUs.propTypes = {
    name: PropTypes.string,
    desc:PropTypes.string,
    image:PropTypes.string,
}

export default aboutUs