import React,{useState} from 'react'
import './Footer.scss'
import { images } from '../../constants';
import { AppWrap } from '../../wrapper';

const Footer = () => {
 const [formData, setFormData] = useState({ name: '', email: '', message: '' });
 
  const { username, email, message } = formData;

  const handleChangeInput = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  function handleSubmit(event) {
    event.preventDefault()
    
    
}

    return (
      <>
       <h2 className="head-text">Get in touch with me 🤝</h2>
       <div className="app__footer-cards">
        <div className="app__footer-card ">
          <img src={images.email} alt="email" />
          <a href="mailto:elizabeth.lwetabe@gmail.com" className="p-text">elizabeth.lwetabe@gmail.com</a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="phone" />
          <a href="tel:+256 758 679 585" className="p-text">+256 758 679 585</a>
        </div>
        <div className="app__footer-form app__flex">
          <div className="app__flex">
            <input className="p-text" type="text" placeholder="Your Name" name="username" 
            value={username} onChange={handleChangeInput} />
          </div>
          <div className="app__flex">
            <input className="p-text" type="email" placeholder="Your Email" name="email" 
            value={email} onChange={handleChangeInput} />
          </div>
          <div>
            <textarea
              className="p-text"
              placeholder="Your Message"
              value={message}
              name="message"
              onChange={handleChangeInput}
            />
          </div>
          <button type="button" className="p-text" onClick={handleSubmit}>Send</button>
        </div>
        <h3 className="head-text">
            Thank you for getting in touch!
          </h3>
        </div>
      </>
    
    )
}

export default AppWrap(Footer, 'contact')
