import React from "react";
import { IoMail, IoCall } from "react-icons/io5";
import emailjs from '@emailjs/browser';
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
        <div className="flex flex-col justify-center items-center bg-[#6A2D33] text-white w-full p-10">
            <h1 className="mb-[3%] p-0 text-5xl text-white">Contact Us</h1>
            <div className="w-9/12 block md:flex justify-center items-center justify-evenly">
                <div className="w-full md:w-5/12">
                    <Fade triggerOnce keyframes={right}>
                        <div className="flex justify-center items-center">
                            <div className="block">
                                <IoCall size="6rem" color="white" />
                            </div>
                            <div className="pl-[10%] m-auto w-full md:w-2/4">
                                <h1 className="m-0 p-0">Phone Number</h1>
                                <h2 className="m-0 p-0">647-835-4402</h2>
                            </div>
                        </div>                    
                    </Fade>
                    <Fade triggerOnce keyframes={right} delay="30">
                        <div className="flex justify-center items-center">
                            <div className="block">
                                <IoMail size="6rem" color="white" />
                            </div>
                            <div className="pl-[10%] m-auto w-full md:w-2/4">
                                <h1 className="m-0 p-0"> Email</h1>
                                <h2 className="m-0 p-0">contact@hawkbuilders.ca</h2>
                            </div> 
                        </div>   
                    </Fade>
                </div>
                <div className="hidden md:block h-full min-h-28 w-4px bg-white rounded-3xl m-10px"></div>
                <div className="w-full md:w-5/12 flex justify-center items-center flex-col">
                    <form onSubmit={sendEmail} className="w-full">
                        <Fade triggerOnce keyframes={left} delay="0">
                            <div className="relative mt-[4%] mb-[4%]">
                                <input className="rounded-xl border-none w-full p-1 text-black" type="text" name="name" placeholder="Your Name" required/>
                            </div>
                        </Fade>
                        <Fade triggerOnce keyframes={left} delay="10">
                            <div className="relative mt-[4%] mb-[4%]">
                                <input className="rounded-xl border-none w-full p-1 text-black" type="text" name="number" placeholder="Your Phone Number" required/>
                            </div>
                        </Fade>   
                        <Fade triggerOnce keyframes={left} delay="20">
                            <div className="relative mt-[4%] mb-[4%]">
                                <input className="rounded-xl border-none w-full p-1 text-black" type="text" name="email" placeholder="Your Email Adress" required/>
                            </div> 
                        </Fade>  
                        <Fade triggerOnce keyframes={left} delay="30">
                            <div className="relative mt-[4%] mb-[4%]">
                                <textarea name="message" className="rounded-xl border-none w-full p-1 w-full h-full text-black" placeholder="Type your message here"></textarea>
                            </div>
                        </Fade>
                        <Fade triggerOnce keyframes={left} delay="40">
                            <div className="btn-container relative flex justify-center items-center">
                                <input className="text-xl rounded-3xl bg-[#6A2D33] text-white p-3 shadow-black shadow-lg transition duration-500 hover:shadow-none" type="submit" value="SUBMIT"></input>
                            </div>
                        </Fade>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default contact;