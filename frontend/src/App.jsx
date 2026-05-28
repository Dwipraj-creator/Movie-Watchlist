import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import ContactPage from './pages/ContactPage'
import Explore from './pages/Explore'

const App = () => {
  return (<>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<ContactPage/>}/>
      <Route path='/explore' element={<Explore/>}/>
    </Routes>
</>
  )
}

export default App
