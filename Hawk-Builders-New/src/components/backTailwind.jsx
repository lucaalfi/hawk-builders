import React from "react";
import {BiArrowBack} from "react-icons/bi";

function back(){
    return(
        <div id="back">
            <a href="/" className="text-black no-underline hover:text-slate-500 hover:cursor-pointer">
                    <div className="flex">
                        <BiArrowBack size="2.5rem" />
                        <h3> Back </h3>
                    </div>
            </a>
        </div>
    );
}


export default back;
