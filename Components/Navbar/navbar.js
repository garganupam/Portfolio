import React from 'react'
import'./navbar.css'
import logo from '../../assests/logo.avif'
import contact from '../../assests/contact.png'


import {Link} from 'react-scroll'
const Navbar = () => {
  return (
    <nav className="navbar">
        <img src={logo} alt="Logo" className='logo' />
        <div className="desktopMenu">
           <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-50} duration={500}className="desktopMenuListItem">Home</Link>
           <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">About</Link>
           <Link activeClass='active' to='cv-download' spy={true} smooth={true} offset={-190} duration={500} className="desktopMenuListItem">Portfolio</Link>
           <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-60} duration={500} className="desktopMenuListItem">Contact</Link>

        </div>
        <button className="desktopMenuButton" onClick={()=>{
          document.getElementById('contact').scrollIntoView({behaviour:'smooth'});
        }}>
            <img src={contact} alt="contact" className="desktopMenuImg" />
            Contact me
        </button>
    </nav>

  )
}

export default Navbar
