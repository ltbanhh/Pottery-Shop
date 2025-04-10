import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import React from 'react'
import { Home } from './pages/Home.jsx'
import { Login } from './components/Login.jsx'
import { SignUp } from './components/Signup.jsx'

function App() {
  return(
  <Router>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/signup" element={<SignUp/>} />
    </Routes>
  </Router>
  )
}

export default App
