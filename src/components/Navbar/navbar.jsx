import React, { useState } from 'react'
import './navbar.css'
import {Link} from 'react-scroll';
 
const Navbar = () => {
  const [showMenu,setShowMenu] = useState(false);
  return (
    <nav className='navbar'>
    <img src='/Kupendra.png' alt='logo' className='logo'/>
    <div className='desktopMenu'>
    <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>Home</Link>
    <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>About</Link>
    <Link activeClass='active' to='works' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>Projects</Link>
    <Link activeClass='active' to='clients' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>Clients</Link>
    </div>
    <button className='desktopMenuBtn' onClick={()=>{ document.getElementById('contact').scrollIntoView({behavior:'smooth'});
  }}>
    <img src='public/contact.gif' alt='contact' className='desktopMenuBtn'/></button>


    <img src='/menu.png' alt='menu' className='mobMenu' onClick={()=>setShowMenu(!showMenu)}/>
    <div className='navMenu' style={{display: showMenu? 'flex':'none'}}>
    <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='listItem' onClick={()=>setShowMenu(false)}>Home</Link>
    <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={500} className='listItem' onClick={()=>setShowMenu(false)}>About</Link>
    <Link activeClass='active' to='works' spy={true} smooth={true} offset={-100} duration={500} className='listItem' onClick={()=>setShowMenu(false)}>Projects</Link>
    <Link activeClass='active' to='clients' spy={true} smooth={true} offset={-100} duration={500} className='listItem' onClick={()=>setShowMenu(false)}>Clients</Link>
    <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-100} duration={500} className='listItem' onClick={()=>setShowMenu(false)}>Contact</Link>
    </div>
    </nav>
  )
}

export default Navbar