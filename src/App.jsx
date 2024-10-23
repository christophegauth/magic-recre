import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import About from './pages/About'
import Galerie from './pages/Galerie'
import Actions from './pages/Actions'
import Home from './pages/Home'
import Contact from './pages/Contact'

const App = () => {
  return (
    <div>
      <Navbar />
      <div className='container'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/galerie' element={<Galerie />} />
          <Route path='/actions' element={<Actions />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App