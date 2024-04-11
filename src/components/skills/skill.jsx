import React from 'react'
import  './skill.css';
import code from '../../../public/coding.png';
import yt from '../../../public/youtube.png';
import vd from '../../../public/video-editing.png';

const Skill = () => {
  return (
<section id='skills'>
 <span className='skillTitle'>
 What I do
 </span>
 <span className='skillDesc'>As a skilled and passionate web developer proficient in various technologies, I also bring expertise in video editing software such as After Effects and Premiere Pro, enriching digital experiences with dynamic multimedia elements.</span>
 <div className='skillBars'>
    <div className='skillBar'>
    <img src={code} alt='' className='skillBarImg'/>
    <div className='skillBarText'>
    <h2>Web-Development</h2>
    <p>Crafting digital experiences that captivate and innovate through elegant web development solutions.</p>
    </div>
    </div>
    <div className='skillBar'>
    <img src={yt} alt='' className='skillBarImg'/>
    <div className='skillBarText'>
    <h2>Web-design</h2>
    <p>Transforming visions into visually stunning and user-centric web designs that leave a lasting impression.</p>
    </div>
    </div>
    <div className='skillBar'>
    <img src={vd} alt='' className='skillBarImg'/>
    <div className='skillBarText'>
    <h2>Video-editing</h2>
    <p>Bringing stories to life with seamless editing and captivating visual effects using Premiere Pro and After Effects.</p>
    </div>
    </div>
 </div>
</section>  
)
}

export default Skill