import React from "react";

function footer(props){
    return(
        <div className="flex justify-center items-center text-center" id="footer-container">
            <div className="w-9/12 flex justify-center items-center text-center">
                <h3 className="text-slate-500 mb-[2%] mt-[2%]">
                    ©{new Date().getFullYear()} {props.name}All rights reserved.
                </h3>
            </div>
        </div>
    );
}

export default footer;