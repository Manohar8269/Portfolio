import { useState } from 'react'
import './App.css'
import Navbar from './component/Navbars'
import About from './component/About'
import Services from './component/Service'
import Contact from './component/Contact'
import Footer from './component/Footer'
import Project from './component/Project'


function App() {
  const [count, setCount] = useState(0)

  return (
  <>
   <Navbar/>
   <About/>
   <Services/>
   <Project/>
   <Contact/>
   <Footer/>

  </>
  )
}

export default App
