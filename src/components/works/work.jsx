import React from 'react'
import './work.css'
const Works = () => {
  return (
    <section id='works'>
    <h2 className='workstitle'>My Projects</h2>
    <span className='workDesc'>Welcome to my portfolio, where creativity meets innovation. Explore my projects and witness the fusion of vision and execution.</span>
    <div className='workImgs'>
       <a href='https://kupendrav.github.io/ROLEX_ai/'><img src='../../../public/p1.png' alt='' className='worksImg' /> </a>
     <a href='https://www.ourportfolio.live/' ><img src='../../../public/p2.png' alt='' className='worksImg'/></a>
     <a href='https://kupendrav.github.io/Html_CSS_Js_100-projects/modern-portfolio/index.html' ><img src='../../../public/p3.png' alt='' className='worksImg'/></a>
     <a href='https://kupendrav.github.io/natasha-ai-copy/' ><img src='../../../public/p4.png' alt='' className='worksImg'/></a>
     <a href='https://kupendrav.github.io/my_web_page_miniproject/templates/index.html' ><img src='../../../public/p5.png' alt='' className='worksImg'/></a>
     
    </div>
    <button className='workbtn'>See More</button>
    </section>
  )
}

export default Works