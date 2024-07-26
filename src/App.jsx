import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Home from './routes/Home.jsx';
import Join from './routes/Join.jsx';
import Compete from './routes/Compete.jsx';
import CompeteNutrition from './routes/CompeteNutrition.jsx';
import CompeteMedical from './routes/CompeteMedical.jsx';
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
        <Route path='/competenutrition' element={<CompeteNutrition />} />
        <Route path='/competenutrition' element={<CompeteMedical />} />
        <Route path='/solutions' element={<Solutions />} />
        <Route path='/team' element={<Team />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App