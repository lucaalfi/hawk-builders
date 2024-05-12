import React from "react";
import { IoMail, IoCall } from "react-icons/io5";
import emailjs, { init } from 'emailjs-com';
import Reveal, { Fade } from "react-awesome-reveal";
import { keyframes } from "@emotion/react";
import {up, left, right, down} from '../styles/anim.js';

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
                    <Fade triggerOnce keyframes={right}>
                        <div className="number">
                            <div className="image">
                                <IoCall size="6rem" color="white" />
                            </div>
                            <div className="info">
                                <h1>Phone Number</h1>
                                <h2>647-835-4402</h2>
                            </div>
                        </div>
                    </Fade>
                    <Fade triggerOnce keyframes={right} delay="30">
                        <div className="email">
                            <div className="image">
                                <IoMail size="6rem" color="white" />
                            </div>
                            <div className="info">
                                <h1>Email</h1>
                                <h2>contact@hawkbuilders.ca</h2>
                            </div> 
                        </div>
                    </Fade>
                </div>
                <div className="divider"></div>
                <div className="contact">
                    <form onSubmit={sendEmail}>
                        <Fade triggerOnce keyframes={left} delay="0">
                            <div>
                                <input type="text" name="name" placeholder="Your Name" required/>
                            </div>
                        </Fade>
                        
                        <Fade triggerOnce keyframes={left} delay="10">
                            <div>
                                <input type="text" name="number" placeholder="Your Phone Number" required/>
                            </div>
                        </Fade>
                        
                        <Fade triggerOnce keyframes={left} delay="20">
                            <div>
                                <input type="text" name="email" placeholder="Your Email Adress" required/>
                            </div>
                        </Fade>
                        
                        <Fade triggerOnce keyframes={left} delay="30">
                            <div>
                                <textarea name="message" placeholder="Type your message here"></textarea>
                            </div>
                        </Fade>
                        
                        <Fade triggerOnce keyframes={left} delay="40">
                            <div className="btn-container">
                                <input className="btn" type="submit" value="SUBMIT"></input>
                            </div>
                        </Fade>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default contact;