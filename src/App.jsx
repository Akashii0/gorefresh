// src/App.jsx
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Hero from './pages/Hero'
import About from './pages/About'
import Loading from './components/Loading';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/loading" element={<Loading />} />
      </Routes>
    </Router>
  )
}

export default App