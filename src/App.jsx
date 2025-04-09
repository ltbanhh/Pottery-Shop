import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import React from 'react'
import { Home } from './pages/Home.jsx'
import { Login } from './components/Login.jsx'

function App() {
  return(
  <Router>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/login" element={<Login/>} />
    </Routes>
  </Router>
  )
}

export default App
