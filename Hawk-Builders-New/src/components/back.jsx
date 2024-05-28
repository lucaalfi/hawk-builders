import React from "react";
import {BiArrowBack} from "react-icons/bi";

function back(){
    return(
        
        <div id="back">
            <a href="/" className="projectsBack">
                    <div className="container">
                        <BiArrowBack size="2.5rem" className="arrow" />
                        <h3> Back </h3>
                    </div>
            </a>
        </div>
    );
}


export default back;
