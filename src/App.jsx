import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import About from './pages/About'
import Galerie from './pages/Galerie'
import Actions from './pages/Actions'
import Home from './pages/Home'

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/galerie' element={<Galerie />} />
            <Route path='/actions' element={<Actions />} />
          </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App