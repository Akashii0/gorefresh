import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Hero from './pages/Hero'
import About from './pages/About'
import Loading from './components/Loading';
import SignUp from './pages/SignUp';
import Login from './pages/Login';

const App = () => {
  const [showLoading, setShowLoading] = useState(true);

  if (showLoading) {
    return <Loading onFinish={() => setShowLoading(false)} />;
  }

  return (
    <Router>
      <Routes>
        <Route path="/"      element={<Hero />}  />
        <Route path="/about" element={<About />} />
        <Route path = "/signup" element={<SignUp/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </Router>
  )
}

export default App