import React from 'react';
import './Skills.scss'

import { motion } from 'framer-motion';
import { AppWrap, MotionWrap } from '../../wrapper';
import { images } from '../../constants';

const skillCard=[
    {name: 'React', imgUrl:images.react },
   {name: 'Javascript',  imgUrl:images.javascript },
   {name: 'Python',  imgUrl:images.python },
   {name: 'MongoDB',  imgUrl:images.mongodb },
   {name: 'Redux',  imgUrl:images.redux },
   {name: 'NodeJS',  imgUrl:images.node },
   {name: 'MySQL',  imgUrl:images.mysql },
   {name: 'Sass',  imgUrl:images.sass },
   {name: 'Html', imgUrl:images.html },
   {name: 'CSS', imgUrl:images.css },
]

const Skills = () => {
    return (
        <>
        <h2 className="head-text">Skills</h2>  
    <div className="app__skills-container">
        <motion.div className="app__skills-list">
        {skillCard.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill.name}
            >
           <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={skill.imgUrl} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}     
        </motion.div>

    </div>
        </>
    )
}

export default AppWrap (
  MotionWrap(Skills, 'app__skills'),
    'skills',
   'app__whitebg' )
