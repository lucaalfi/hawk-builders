import React from "react";

function footer(props){
    return(
        <div id="flex justify-center items-center text-center w-full">
            <div className="flex justify-center items-center w-full text-center">
                <h3 className="mb-[5%] text-gray-500">
                    ©{new Date().getFullYear()} {props.name}. All rights reserved.
                </h3>
            </div>
        </div>
    );
}

export default footer;