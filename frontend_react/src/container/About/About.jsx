import React from 'react'
import {motion} from 'framer-motion'
import './About.scss';
import { images } from '../../constants';
import { AppWrap, MotionWrap} from '../../wrapper'

const abouts = [
  {title:  ' Web development', description:'I love web development', imgUrl: images.webapp },
]

const About = () => {
  
    return (
     <>
      <h2 className="head-text">About Me</h2> 
     <div className='container'>
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.5, type: 'tween' }}>
            <img className='web-img'src={images.webapp} />
          </motion.div>
    
        <div className='text'>
          <p>Frontend MERN web developer specializing in Javascript technologies,  across 
            the whole stack (Node.js, React,Express and Mongo). 
            Experience in building web applications with backend API systems..</p>
           
        </div>
    </div>
   
    </>
  
    )
}

export default AppWrap (
  MotionWrap(About, 'app__about'),
    'about',
   'app__whitebg' )
