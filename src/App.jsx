import React from 'react'
import Home from './pages/Home'
import Service from './pages/Service'
import Project from './pages/project'
import Notfound from './pages/NotFound'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './pages/login'
import Signup from './pages/signup'

function App() {
  return (
    <>
    <Router>
      <Routes>
          <Route index element={<Home />} />
          <Route path='/service' element ={<Service />} />
          <Route path='/project' element ={<Project />} />
          <Route path='/login' element ={<Login />} />
          <Route path='/signup' element ={<Signup />} />
          <Route path='*' element ={<Notfound />} />
      </Routes>
      </Router>    
      </>
  )
}

export default App