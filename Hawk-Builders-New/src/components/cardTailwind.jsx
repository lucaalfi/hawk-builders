import React from "react";
import Reveal, { Fade } from "react-awesome-reveal";
import { keyframes } from "@emotion/react";
import {up, left, right, down} from '../styles/anim.js';

import PropTypes from 'prop-types'

function card(props){
    var desc = props.desc;
    return(
        <div id="relative m-[2%]">
            <Fade triggerOnce keyframes={up} delay={props.id * 100}>
                <div className="relative h-[300px] w-[250px] m-3 flex justify-center items-center text-center
                                 hover:overflow-hidden transition duration-500  transform transition duration-500 
                                 hover:scale-110">
                    <div className="overflow-hidden rounded-3xl">
                        <img className="h-[300px] w-[250px] rounded-3xl object-cover -z-10" src={props.img} />
                    </div>
                    <div className="top-0 left-0 absolute text-white w-full h-full opacity-0 rounded-3xl block justify-center items-center text-center
                                     hover:bg-black hover:bg-opacity-50 hover:opacity-100 transition duration-500">
                        <h3 className="w-5/6 text-xl mt-[5%] mx-auto">{props.name}</h3>
                        <hr className="w-1/3 mx-auto m-[5%] p-0 border-t-solid border-t-2 border-slate-300"/>
                        <p className="w-11/12 text-base m-0 mt-[2%] ml-[2%]">{desc}</p>
                        <p className="relative text-base b-0 text-[#75ffca]">{props.price}</p>
                        <button className="mt-5 b-0 mb-[3%] text-[#3bcedb] border-2 border rounded-3xl bg-black p-[2%] transition-all 
                                            hover:text-white transition duration-500 hover:bg-[#3bcedb]">Learn More</button>
                    </div>
                </div>
            </Fade>
        </div>
    );
}

card.propTypes = {
    name: PropTypes.string,
    price:PropTypes.string,
    img:PropTypes.string,
}

export default card