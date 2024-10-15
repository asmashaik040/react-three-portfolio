import React from 'react'
import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Projects from './sections/Projects'
import Clients from './sections/Clients'
import WorkExperience from './sections/Experience'
import Footer from './sections/Footer'

const App = () => {
  return (
    
    <main className="max-w-7xl mx-auto relative">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <WorkExperience />
      <Clients />
      <Footer />
    </main>
  )
}

export default App