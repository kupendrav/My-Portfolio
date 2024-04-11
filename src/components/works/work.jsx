import React from 'react'
import './work.css'
import p1 from '../../../public/p1.png';
import p2 from '../../../public/p2.png';
import p3 from '../../../public/p3.png';
import p4 from '../../../public/p4.png';
import p5 from '../../../public/p5.png';

const Works = () => {
  return (
    <section id='works'>
    <h2 className='workstitle'>My Projects</h2>
    <span className='workDesc'>Welcome to my portfolio, where creativity meets innovation. Explore my projects and witness the fusion of vision and execution.</span>
    <div className='workImgs'>
       <a href='https://kupendrav.github.io/ROLEX_ai/'><img src={p1} alt='' className='worksImg' /> </a>
     <a href='https://www.ourportfolio.live/' ><img src={p2} alt='' className='worksImg'/></a>
     <a href='https://kupendrav.github.io/Html_CSS_Js_100-projects/modern-portfolio/index.html' ><img src={p3} alt='' className='worksImg'/></a>
     <a href='https://kupendrav.github.io/natasha-ai-copy/' ><img src={p4} alt='' className='worksImg'/></a>
     <a href='https://kupendrav.github.io/my_web_page_miniproject/templates/index.html' ><img src={p5} alt='' className='worksImg'/></a>
     
    </div>
    <button className='workbtn'>See More</button>
    </section>
  )
}

export default Works