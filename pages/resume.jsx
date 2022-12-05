import React from 'react';
import Head from 'next/head';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { motion } from 'framer-motion';

const resume = () => {
  return (
    <motion.div
    initial={{
      opacity: 0,   
     }}
     animate = {{
       x : 0,
       opacity : 1,
       scale : 1,
     }}
     transition ={{ duration : 1 }}>
      <Head>
        <title>Neel | Resume</title>
        <meta
          name='description'
          content='I’m a web developer specializing in building exceptional digital experiences with backend integration.'
        />
        <link rel='icon' href='/fav.png' />
      </Head>

      <div className='max-w-[940px] mx-auto p-2 pt-[120px]'>
        <h2 className='text-center'>Resume</h2>
        <div className='bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center'>
          <h2 className='text-center'>Neel Jivani</h2>
          <div className='flex'>
            <a
              href='https://www.linkedin.com/in/neel-jivani-89b9a8148/'
              target='_blank'
              rel='noreferrer'
            >
              <FaLinkedinIn size={20} style={{ marginRight: '1rem' }} />
            </a>
            <a
              href='https://github.com/Neel2603'
              target='_blank'
              rel='noreferrer'
            >
              <FaGithub size={20} style={{ marginRight: '1rem' }} />
            </a>
          </div>
        </div>
        <div className='text-center py-4 text-xl font-bold uppercase tracking-wider'>
          <div className='hidden sm:block'>
            <p>
              Proven Leadership <span className='px-1'>|</span> Web Development{' '}
              <span className='px-1'>|</span> Complex Problem Solving
            </p>
          </div>
          <div className='block sm:hidden'>
            <p>Proven Leadership</p>
            <p className='py-2'>Web Development</p>
            <p>Complex Problem Solving</p>
          </div>
        </div>
        <p>
          Analytical, innovative, and motivated web development professional
          with experience in customer service,organizational effectiveness
          in fast-paced and challenging environments. 
          Diverse analytical skills, team collaboration, andrelationship building.
          Consummate professional, and motivated leader,with solid interpersonal
          abilities and complex problem-solving skills.
          Effective and proven track record of critical thinking, idea
          generation, and optimizing efficiencies.
        </p>

        {/* Skills */}
        <div className='text-center py-4'>
          <h5 className='text-center underline text-[18px] py-2'>Skills</h5>
          <p className='py-2'>
            <span className='font-bold'>Technical Skills</span>
            <span className='px-2'>|</span>Full Stack Developer
            <span className='px-2'>|</span> HTML
            <span className='px-2'>|</span>CSS
            <span className='px-2'>|</span>Javascript
            <span className='px-2'>|</span>React
            <span className='px-2'>|</span>Node
            <span className='px-2'>|</span>Express.js 
            <span className='px-2'>|</span>Postgre SQL
            <span className='px-2'>|</span>NoSQL (MongoDB)
            <span className='px-2'>|</span>Redux
            <span className='px-2'>|</span>Tailwind
            <span className='px-2'>|</span>RESTAPI
          </p>
          <p className='py-2'>
            <span className='font-bold'>Learning</span>
            <span className='px-2'>|</span>Three.js, Spline, Next JS, AWS, Docker
          </p>
        </div>

        <h5 className='text-center underline text-[18px] py-4'>
          Professional Experience
        </h5>
        {/* Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
            Om Tec Web Solution
            </span>
            <span className='px-2'>|</span>Surat, India.
          </p>
          <p className='py-1 italic'>MERN Stack Developer(Aug-2021 - July-2022)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              I have worked as MERN Stack Developer in this company,
              with 6 months of experience I have taken my skills to 
              the next level.
            </li>
            <li>
              From designing Database for the companys product and
              implementing it with Backend and Frontend part using MERN 
              Stack, I learned and solve so many challanges during this
              journey.
            </li>
            <li>
              Worked directly with clients help me to understand the
              requirements of the clients and work according to it by
              implement multiple technologies and programs.
            </li>
          </ul>
        </div>


        {/* Personal Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
              Belymon Infotech
            </span>
            <span className='px-2'>|</span>Surat, India.
          </p>
          <p className='py-1 italic'>Intern as Full Stack Developer. (Dec-2020 - May-2021)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              In end of 2020 I started Internship as Full Stack Developer
              where I learn lots of things in web development, specially I 
              focused on ReactJS and NodeJS.
            </li>
            <li>
              I have successfully developed projects using MERN Stack
              as per the need of clients.I also worked on products 
              of the company.
            </li>
          </ul>
        </div>

        {/*  */}
        <h5 className='text-center underline text-[18px] py-4'>
          Learning
        </h5>
      
        {/* Experience */}
        <div className='py-6'>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              Currently, I am learning three js which is really amazing that
              one can get 3D view of their website which is amazing stuff.
            </li>
            <li>
              I am also learning Next JS as it is one of the trending
              frameworks and using this we can develop at fast pace.
            </li>
            <li>
              Durig my jobtime I never get chance to use AWS and Docker,
              so that I have started learning it by my self as they are 
              the most powerful tools for the main part of the development
              cycle.
            </li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default resume;
