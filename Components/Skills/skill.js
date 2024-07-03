import React from 'react'
import './skill.css'
import achievments from '../../assests/achievments.png'
import ds from '../../assests/ds.png'
import projects from '../../assests/projects.png'
import weblogo from '../../assests/weblogo.avif'

const Skill = () => {
  return (
    <section id='skills'>
        <span className="skillTitle">What I do</span>
        <span className="skillDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo sapiente dolorum pariatur, magnam molestiae tempore veniam, incidunt eveniet obcaecati iure dolor blanditiis itaque voluptatem sed reiciendis. Omnis aliquid eligendi magnam!</span>
        <div className="skillBars">

        <div className="skillPoints">
            <div className="skillBar">
                <img src={weblogo} alt="web-logo" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>Full Stack Web Developer</h2>
                    <br/>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam quo iure soluta incidunt aliquid voluptates, unde, ab doloribus mollitia nobis totam porro. Vel inventore ab nobis asperiores saepe nihil repudiandae?</p>
                </div>
            </div>
        </div>
        <div className="skillPoints">
            <div className="skillBar">
                <img src={ds} alt="ds" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>Problem Solving</h2>
                    <br />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet distinctio reiciendis nesciunt impedit doloribus quod libero quasi ex itaque fuga quo, fugiat minima delectus ducimus, blanditiis, ab fugit in vero.</p>
                </div>
            </div>
        </div>
        <div className="skillPoints">
            <div className="skillBar">
                <img src={achievments} alt="" className="skillBarImg"/>
                <div className="skillBarText">
                    <h2>Recognition</h2>
                    <br />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae eaque aliquam doloremque qui voluptatum, ullam praesentium culpa veniam ipsa numquam?</p>
                </div>
            </div>
        </div>
        <div className="skillPoints">
            <div className="skillBar">
                <img src={projects} alt="" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>Projects</h2>
                    <br />
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima culpa impedit modi velit! Iste atque aliquid sed tempore eius. At.</p>
                </div>
            </div>
        </div>
        </div>
    </section>

 
  )
}

export default Skill
