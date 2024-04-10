import React, { useRef } from 'react'
import './contact.css';
import emailjs from '@emailjs/browser';


const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_2o0oy9r', 'template_d77jvw7', form.current, {
        publicKey: 'cdo73ECEIcT0u9KJ0',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <section id='contactPage'>
    <div id='clients'>
      <h1 className='contactPageTitle'>My clients</h1>
      <p className='clientDesc'>
      Crafting tailored solutions to amplify your brand's presence and impact.
Driven by innovation, delivering results that exceed expectations.
      </p>
      <div className='clientImgs'>
        <img src='../../../public/ps.png' alt='' className='clientImg'/>
        <img src='../../../public/google.png' alt='' className='clientImg'/>
        <img src='../../../public/micro.png' alt='' className='clientImg'/>
        <img src='../../../public/adobe.png' alt='' className='clientImg'/>
      </div>
    </div>
    <div id='contact'>
    <h1 className='contactPageTitle'>Contact Me</h1>
    <span className='contactDesc'>Please fill out the form below to discuss any work opportunities.</span>
    <form className='contactForm' ref={form} onSubmit={sendEmail}>
      <input type='text' className='name' placeholder='Your Name' name='your_name'/>
      <input type='emaiil' className='email' placeholder='Your Email' name='your_email'/>
      <textarea className='msg' name='message'  rows={5} placeholder='Your Message'></textarea>
      <button type='submit' className='submitBtn'>Submit</button>
     
    </form>
    <div className='links'>
    <a href='https://www.linkedin.com/in/kupendra-v2903/'><img src='../../../public/li2.png' className='link'/></a>
    <a href='https://github.com/kupendrav'><img src='../../../public/gi.png' className='link'/></a>  
    <a href='https://twitter.com/kupendrav99'><img src='../../../public/ti.png' className='link'/></a>  
      
    </div>
    </div>
    </section>
  )
}

export default Contact