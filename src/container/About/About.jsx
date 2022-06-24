import React from 'react'
import {motion} from 'framer-motion'
import './About.scss';
import { images } from '../../constants';
import { AppWrap, MotionWrap} from '../../wrapper'

const abouts = [
  {title:  ' Dta Analyst', description:'I love data analysis', imgUrl: images.webapp },
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
            <img className='web-img'src={images.data_analyst} />
          </motion.div>
    
        <div className='text'>
          <p>Hi, I am Elizabeth. I hold an engineering degree as well as a certification in Data Analytics. My specialties include data analysis, data wrangling, data visualization, 
            web scraping, and data communication; as I’ve worked with small to large database with over 600 variables.</p>
             <br/> 
 <p> I take large and complex datasets and create comprehensible visuals to support data-driven decision making. 
            We can use these discovered insights to streamline operations, helping increase efficiency and reduce costs. My passion is to let the data do the talking.</p>
<br />
<p>Technologies utilised include:
- Python
- Excel
- Tableau
- SQL
and AI models using Python.

Let us get in touch to discuss your goals and make the best use of the available data.
            </p>
           
        </div>
    </div>
   
    </>
  
    )
}

export default AppWrap (
  MotionWrap(About, 'app__about'),
    'about',
   'app__whitebg' )
