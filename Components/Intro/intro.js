import React from 'react'
import './intro.css'
import meee from '../../assests/meee.png'
import {Link} from 'react-scroll'
import hiring from '../../assests/hiring.png'

const Intro = () => {
  return (
    <div>
      <section id="intro">
        <div className="introContent">
            <span className="hello"><b>Hello</b>,</span>
             <span className="introText">I'm <span className="introName">Anupam Garg</span><br/>Web Developer</span>
             <p className="introPara">As a professional full stack web developer, I am good at making smooth and restless website applications from the beginning to the end. Having knowledge in both front-end and back-end technologies, I provide durable scalable answers that are unique to each client. My efficiency is seen through use of up-to-date frameworks and languages by writing codes effectively with high standards.</p>
             
             <a href="mailto:garganupam10@gmail.com"><button className="btn"><img src={hiring} alt="" height={16} width={16}/>Hire me</button></a>
             
             
        </div>
        <img src={meee} alt="" className="bg"/>
      </section>
    </div>
  )
}

export default Intro
