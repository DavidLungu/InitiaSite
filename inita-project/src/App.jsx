import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Navbar from './components/Navbar.jsx'
import Home from './routes/Home.jsx';
import Join from './routes/Join.jsx';
import Compete from './routes/Compete.jsx';
import Solutions from './routes/Solutions.jsx';
import Team from './routes/Team.jsx';

import './App.css'

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/join' element={<Join />} />
        <Route path='/compete' element={<Compete />} />
        <Route path='/solutions' element={<Solutions />} />
        <Route path='/team' element={<Team />} />
      </Routes>
    </>
  )
}

export default App