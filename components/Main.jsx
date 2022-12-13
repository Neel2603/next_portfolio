import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import {Cursor, useTypewriter} from "react-simple-typewriter";
import BgCircles from './BgCircles';
import Spline from './Spline.jsx';
import Word from "./Word";
const Main = () => {
  return (
    <div id='home' className='w-full h-screen text-center z-10'>
    
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center z-10'>
      
        <motion.div 
         initial={{
           opacity: 0,   
          }}
          animate = {{
            x : 0,
            opacity : 1,
            scale : 1,
          }}
          transition ={{ duration : 1.5 }} className="absolute">
             
          {/* <BgCircles/> */}
          <p className='uppercase text-sm tracking-widest text-gray-600 animate-pulse'>
            LET&#39;S BUILD SOMETHING TOGETHER
          </p>
          <h1 
          
          className='py-4 text-gray-700'>
            Hi, I&#39;m <span className='text-[#5651e5]'> Neel Jivani</span>
          </h1>
          <h1 className='py-2 text-gray-700'>A MERN Stack Developer</h1>
          <p className='py-4 text-gray-600 sm:max-w-[70%] m-auto'>
           <b>
            I’m focused on building responsive front-end web applications
            integrating back-end technologies.
            </b> 
          </p>
          <div className='flex items-center justify-between max-w-[330px] m-auto py-4 z-10'>
            <a
              href='https://www.linkedin.com/in/neel-jivani-89b9a8148/'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaLinkedinIn />
              </div>
            </a>
            <a
              href='https://github.com/Neel2603'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaGithub />
              </div>
            </a>
            <Link href='/#contact'>
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <AiOutlineMail />
              </div>
            </Link>
            <Link href='/resume'>
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <BsFillPersonLinesFill />
              </div>
            </Link>
          </div>
        </motion.div>
        <Spline/>
        
      </div>
    </div>
  );
};

export default Main;
