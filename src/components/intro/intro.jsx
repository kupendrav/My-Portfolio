import React from 'react'
import './intro.css'
import {Link} from 'react-scroll';
import bg from '../../../public/bg.png';
const Intro = () => {
  return (
    <section id='intro'>
    <div className='introContent'>
      <span className='hello'>Hello,</span>
      <span className='introText'>I'm <span className='introName'></span><br/><span className='frontend'>Frontend Developer</span></span>
      <p className='introPara'>I am a skilled frontend developer with experience in creating aesthetic website</p>
      <Link><button className='btn'><img src=''/>Hire me</button></Link>
    
    </div>
    <img src={bg} alt='bg' className='bg'/>
    
    </section>
    
    
    )
}

export default Intro;