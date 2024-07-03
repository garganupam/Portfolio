import React from 'react'
import './contact.css'
import Instagram from '../../assests/Instagram.webp'
import Leetcode from '../../assests/Leetcode.webp'
import LinkedinImg from '../../assests/LinkedinImg.jpg'


const contact = () => {
    return (
        <div id="contact">
            <h1>Contact Me</h1>
            <span className="contactDesc">Please fill out the form below to discuss any work opportunities</span>
            <form className='contactForm'>
                <input type="text" className="name" placeholder='Your Name' />
                <input type="email" className="email" placeholder='Your Email' />
                <textarea name="message" className="msg" rows="5" placeholder='Your Message'></textarea>
                <button className="submitBtn" type='submit' value='Send'>Submit</button>
                </form>
                <footer>
                    <div className="links">
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                            <img src={Instagram} alt="Instagram" className="link" />
                        </a>
                        <a href="https://leetcode.com" target="_blank" rel="noopener noreferrer">
                            <img src={Leetcode} alt="Leetcode" className="link" />
                        </a>
                        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                            <img src={LinkedinImg} alt="Linkedin" className="link" />
                        </a>
                    </div>
                    <p>&copy; 2024 Anupam Garg . All rights reserved.</p>
                </footer>


            
        </div>

    )
}

export default contact
