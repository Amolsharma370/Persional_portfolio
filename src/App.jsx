import { useState } from 'react'
import {Navbar} from "@/layout/Navbar"
import { Hero } from './section/Hero'
import { About } from './section/About'
import { Contact } from './section/Contact'
import { Projects } from './section/Projects'
import { Testimonials } from './section/Testimonials'
import{Experience} from './section/Experience'
import{Footer} from './layout/Footer'
import './App.css'

function App() {
  

  return (
    <>
    <div className='min-h-screen overflow-x-hidden'>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience/>
        <Testimonials />
        <Contact />
        <Footer/>

        
      </main>
    </div>
    
      
    </>
  )
}

export default App
