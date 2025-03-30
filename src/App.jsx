import { useState } from 'react'
import './App.css'
import Navbar from './component/Navbars'
import About from './component/About'
import Services from './component/Service'
import Contact from './component/Contact'
import { Routes,Route } from 'react-router-dom'
import Footer from './component/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
  <>
   <Navbar/>
   <About/>
   <Services/>
   <Contact/>
   <Footer/>
   
   {/* <Routes>
    <Route path='/' element={<Navbar/>}/>
    <Route path='/About' element={<About/>}/>
    <Route path='/Service' element={<Services/>}/>
    <Route path='/Contact' element={<Contact/>}/>
   </Routes> */}
  </>
  )
}

export default App
