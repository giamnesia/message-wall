import React from "react";
import Typewriter from "typewriter-effect";
import Data from './Data'
import { FaGithub, FaLinkedin, FaInstagram, FaArrowDown } from 'react-icons/fa';

const Hero = () => {
  return (
    <div >
   <div className=" p-2 my-8 flex-columns ">
      <p className="text-5xl p-2 m-2">
        <Typewriter
        options={{
          strings: ["Message Wall", "Share thoughts"],
          autoStart: true,
          loop: true,
        }}
          /></p>
        <p className='m-5'>Made with React, Tailwind and Firebase</p>
        <p>Follow me:</p>
        <div className='flex-rows m-2 text-indigo-800 text-xl'>
             <a href="https://github.com/giamnesia" target='_blank'><FaGithub className='mx-2' /></a> 
              <a href=""><FaLinkedin  className=' '/></a>
              <a href="https://instagram.com/giamnesia" target='_blank'><FaInstagram className='mx-2' /></a>
        </div>
        <div className='flex-columns mt-8 '>
        <button onClick={() => {
          window.scrollTo({
            top: window.innerHeight,
            behavior: "smooth",
          });
        }}  className='mt-8 text-white p-3 rounded-md bg-indigo-600'>Get Started</button>
        <FaArrowDown onClick={() => {
          window.scrollTo({
            top: window.innerHeight,
            behavior: "smooth",
          });
        }} className=' text-indigo-600 animate-bounce mt-8 text-2xl'/>
        </div>
       
      </div>
    
      <Data/>
    </div>
  
  );
};

export default Hero;
