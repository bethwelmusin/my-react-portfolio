import React from 'react'
import Header from './components/Head/Header'
import Home from "./components/Hero/Home"
import Features from "./components/Features/Features"
import Portfolio from "./components/portfolio/Portfolio"
import Resume from "./components/Resume/Resume"
import Contact from "./components/Contact/Contact"
import Footer from "./components/Footer"
import './App.css'

const App = () => {
  return (
    <div>
      <Header />
       <Home />
       <Features />
       <Portfolio />
       <Resume />
       <Contact />
       <Footer />
    </div>
       
    
  )
}

export default App