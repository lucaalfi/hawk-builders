import React from "react";
// import { IoMail, IoCall } from "react-icons/io5";
// import emailjs, { init } from 'emailjs-com';
// import Reveal, { Fade } from "react-awesome-reveal";
// import { keyframes } from "@emotion/react";
// import {up, left, right, down} from '../styles/anim.js';

function contact(){

    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_sk0tiwp', 'template_2nika1e', e.target, 'user_m4yKPukA2PawmJR2074c6')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
      }

    return(
        <div id="contact-container">
            <h1 className="title">Contact Us</h1>
            <div className="container">
                <div className="information">
                    <div className="number">
                        <div className="image">
                            {/* <IoCall size="6rem" color="white" /> */}
                        </div>
                        <div className="info">
                            <h1>Phone Number</h1>
                            <h2>647-835-4402</h2>
                        </div>
                    </div>                    
                    {/* <Fade triggerOnce keyframes={right}>

                    </Fade> */}
                    <div className="email">
                        <div className="image">
                            {/* <IoMail size="6rem" color="white" /> */}
                        </div>
                        <div className="info">
                            <h1>Email</h1>
                            <h2>contact@hawkbuilders.ca</h2>
                        </div> 
                    </div>                    
                    {/* <Fade triggerOnce keyframes={right} delay="30">

                    </Fade> */}
                </div>
                <div className="divider"></div>
                <div className="contact">
                    <form onSubmit={sendEmail}>
                        <div>
                            <input type="text" name="name" placeholder="Your Name" required/>
                        </div>
                        {/* <Fade triggerOnce keyframes={left} delay="0">

                        </Fade> */}
                        <div>
                            <input type="text" name="number" placeholder="Your Phone Number" required/>
                        </div>
                        {/* <Fade triggerOnce keyframes={left} delay="10">

                        </Fade> */}
                        <div>
                            <input type="text" name="email" placeholder="Your Email Adress" required/>
                        </div>                        
                        {/* <Fade triggerOnce keyframes={left} delay="20">

                        </Fade> */}

                        <div>
                            <textarea name="message" placeholder="Type your message here"></textarea>
                        </div>                        
                        {/* <Fade triggerOnce keyframes={left} delay="30">

                        </Fade> */}
                        <div className="btn-container">
                            <input className="btn" type="submit" value="SUBMIT"></input>
                        </div>
                        {/* <Fade triggerOnce keyframes={left} delay="40">

                        </Fade> */}
                    </form>
                </div>
            </div>
        </div>
    );
}

export default contact;