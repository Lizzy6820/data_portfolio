import React, { useState } from 'react';
import { AiFillEye,AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';
import { AppWrap,MotionWrap } from '../../wrapper';
import { images } from '../../constants';
import './Projects.scss'

  const works=[
    {title: 'Student information', description:'Student information obtained from an API', 
    projectLink:'https://elizabeth-student-api.netlify.app',
    codeLink:'https://github.com/Lizzy6820/student_API',imgUrl:images.student_api,technologies: 
    'Technologies: React, Javascript, Axios'},
   
    {title: 'E-commerce', description:'E-commerce store for a black owned business', projectLink:'https://leldia-beauty.netlify.app',
    codeLink:'https://github.com/Lizzy6820/leldia_beauty',imgUrl:images.leldia_ecommerce,technologies: 
    'Technologies: React, Javascript, MaterialUI, Framer motion, CommerceJS'},
   {title: 'Home care', description:'Home care cleaning options', projectLink:' https://maid-services.netlify.app',
   codeLink:'https://github.com/Lizzy6820/maid-services',imgUrl:images.maid_services,technologies: 
   'Technologies: React, Javascript, MaterialUI, Framer motion, Styled components' },
   {title: 'Blog', description:'A blog to document African city travels', projectLink:'',
   codeLink:'https://github.com/Lizzy6820/african_cities',imgUrl:images.blog,technologies: 
   'Technologies: React, Javascript, Redux, MongoDB,Express, MaterialUI, Framer motion, Styled components' }
  ]
   

  const Projects = () => {
    
    const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  
    return (
        
  <div className="wrapper">
        <h2 className="head-text">Projects</h2>
     <motion.div animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
    >
       {works.map((work,index)=>
       <div className="app__work-item app__flex" key={index}> 
       <div className="app__work-img app__flex">
       <img src={work.imgUrl} alt={work.name} />
       <motion.div
          whileHover={{ opacity: [0, 1] }}
          transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
          className="app__work-hover app__flex">

<a href={work.projectLink} target="_blank" rel="noreferrer">

<motion.div
  whileInView={{ scale: [0, 1] }}
  whileHover={{ scale: [1, 0.90] }}
  transition={{ duration: 0.25 }}
  className="app__flex"
>
  <AiFillEye />
</motion.div>
</a>
      
       <a href={work.codeLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.90] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
       </div>
       <div className="app__work-content app__flex">
              <h4 className="bold-text">{work.title}</h4>
              <p className="p-text" style={{ marginTop: 10 }}>{work.description}</p>
              <h4 className="p1-text">{work.technologies}</h4>
            </div>
          </div>
          )}
     </motion.div>
     </div>
        
    )}
    
export default AppWrap
(MotionWrap(Projects, 'app__work'),
"projects", 
'app__whitebg')
