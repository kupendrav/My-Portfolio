import { useState } from 'react'
import Navbar from './components/Navbar/navbar'
import Intro from './components/intro/intro'
import Skill from './components/skills/skill'
import Works from './components/works/work'
import TypedText from './components/typingtext/typedtext'
import Contact from './components/contact/contact'
import Footer from './components/footer/footer'
function App() {

  return (
    
       <div className="App">
       <Navbar />
       <Intro/>
       <Skill/>
       <Works/>
       <TypedText/>
       <Contact/>
       <Footer/>
       </div>
    
  )
}

export default App
