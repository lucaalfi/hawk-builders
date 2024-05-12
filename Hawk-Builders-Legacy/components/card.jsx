import React from "react";
import Reveal, { Fade } from "react-awesome-reveal";
import { keyframes } from "@emotion/react";
import {up, left, right, down} from '../styles/anim.js';

function card(props){
    var desc = props.desc;
    return(
        <div id="card-container">
            <Fade triggerOnce keyframes={up} delay={props.id * 100}>
            <div className="container">
                <div className="img">
                    <img src={props.img} />
                </div>
                <div className="info">
                    <h3 className="name">{props.name}</h3>
                    <hr />
                    <p className="desc">{desc}</p>
                    <p className="price">{props.price}</p>
                    {/* <button class="btn">Learn More</button> */}
                </div>
            </div>
            </Fade>
        </div>
    );
}

export default card