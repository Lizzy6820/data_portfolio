import React, { useState } from 'react';
import { AiFillEye,AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';
import { AppWrap,MotionWrap } from '../../wrapper';
import { images } from '../../constants';
import './Projects.scss'

  const project=[
    
   
    {title: 'Product analysis 06/22', description:'Exploratory Data analysis on product store data',  
    projectLink:'https://github.com/Lizzy6820/product_analysis_june',
    codeLink:'https://github.com/Lizzy6820/product_analysis_june',imgUrl:images.product_june,technologies: 
    'Technologies: Python,Numpy, Pandas, Seaborn, Matplotlib',category:'Python Analysis'},

    {title: 'IMDB movies correlation 06/22', description:'Exploratory Data analysis on IMDB movies data',
     projectLink:'https://github.com/Lizzy6820/movies_correlation_june',
    codeLink:'https://github.com/Lizzy6820/movies_correlation_june',imgUrl:images.movies_june,technologies: 
    'Technologies: Python,Numpy, Pandas, Seaborn, Matplotlib',category:'Python Analysis'},

    {title: 'Police in Burlington traffic stop analysis', description:'Exploratory Data analysis on Burlington traffic stops',
    projectLink:'https://github.com/Lizzy6820/burlington_police_data',
   codeLink:'https://github.com/Lizzy6820/burlington_police_data',imgUrl:images.police_june,technologies: 
   'Technologies: Python,Numpy, Pandas, Seaborn, Matplotlib',category:'Python Analysis'},

   {title: 'Amazon web scraping', description:'Automating the daily Web scraping an Amazon item details ',
    projectLink:'https://github.com/Lizzy6820/amazon_cup_webscraper',
   codeLink:'https://github.com/Lizzy6820/amazon_cup_webscraper',imgUrl:images.webscraping,technologies: 
   'Technologies: Python,Beautifulsoup, Requests, Pandas,Datetime, smtplib',category:'Web scraping'},
   
   {title: 'Customer data visualisation 06/22', description:'Dashboard showing customer analysis ',
    projectLink:'https://public.tableau.com/app/profile/diana.elizabeth.lwetabe/viz/Customeranalysis2_16558280027530/Dashboard1',
   codeLink:'https://public.tableau.com/app/profile/diana.elizabeth.lwetabe/viz/Customeranalysis2_16558280027530/Dashboard1',
   imgUrl:images.customers1_dashboard,technologies: 
   'Technologies: Tableau',category:'Data visualisation'},

   {title: 'Police in Burlington traffic stop analysis', description:'Dashboard showing Burlington police stops analysis ',
    projectLink:'https://public.tableau.com/app/profile/diana.elizabeth.lwetabe/viz/Burlingtonpolicedata2012-2017/BURLINGTONPOLICEDATA2012-2017',
   codeLink:'https://public.tableau.com/app/profile/diana.elizabeth.lwetabe/viz/Burlingtonpolicedata2012-2017/BURLINGTONPOLICEDATA2012-2017',
   imgUrl:images.burlington,technologies: 
   'Technologies: Tableau',category:'Data visualisation'},

    {title: 'Student information', description:'Student information obtained from an API', 
    projectLink:'https://elizabeth-student-api.netlify.app',
    codeLink:'https://github.com/Lizzy6820/student_API',imgUrl:images.student_api,technologies: 
    'Technologies: React, Javascript, Axios',category:'Javascript'},
   
   {title: 'Home care', description:'Home care cleaning options', projectLink:' https://maid-services.netlify.app',
   codeLink:'https://github.com/Lizzy6820/maid-services',imgUrl:images.maid_services,technologies: 
   'Technologies: React, Javascript, MaterialUI, Framer motion, Styled components',category:'Javascript' },
  ]
   

  const Projects = () => {
    const [works, setWorks] = useState([]);
    const [filterWork, setFilterWork] = useState(project);
    const [activeFilter, setActiveFilter] = useState('All');
    const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  

    const handleWorkFilter = (item) => {
      setActiveFilter(item);
      setAnimateCard([{ y: 100, opacity: 0 }]);
  
      setTimeout(() => {
        setAnimateCard([{ y: 0, opacity: 1 }]);
  
        if (item === 'All') {
          setFilterWork(project);
        } else {
          setFilterWork(project.filter((project) => project.category.includes(item)));
        }
      }, 500);
    };
    return (
        
  <div className="wrapper">
        <h2 className="head-text">Projects</h2>

        <div className="app__work-filter">
        {['All','Python Analysis','Data visualisation','Web scraping', 'Javascript'].map((project, index) => (
          <div
            key={index}
            onClick={() => handleWorkFilter(project)}
            className={`app__work-filter-item app__flex p-text ${activeFilter === project ? 'item-active' : ''}`}
          >
            {project}
          </div>
        ))}
      </div>

     <motion.div animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
    >
      {filterWork.map((project,index)=>
       <div className="app__work-item app__flex" key={index}> 
       <div className="app__work-img app__flex">
       <img src={project.imgUrl} alt={project.name} />
       <motion.div
          whileHover={{ opacity: [0, 1] }}
          transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
          className="app__work-hover app__flex">

<a href={project.projectLink} target="_blank" rel="noreferrer">

<motion.div
  whileInView={{ scale: [0, 1] }}
  whileHover={{ scale: [1, 0.90] }}
  transition={{ duration: 0.25 }}
  className="app__flex"
>
  <AiFillEye />
</motion.div>
</a>
      
       <a href={project.codeLink} target="_blank" rel="noreferrer">
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
              <h4 className="bold-text">{project.title}</h4>
              <p className="p-text" style={{ marginTop: 10 }}>{project.description}</p>
              <h4 className="p1-text">{project.technologies}</h4>
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
