import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Footer from './components/Footer.jsx';
import Navbar from './components/Navbar.jsx';
import Compete from './routes/Compete.jsx';
import CompeteMeducation from './routes/CompeteMeducation.jsx';
import CompeteNutrition from './routes/CompeteNutrition.jsx';
import Home from './routes/Home.jsx';
import Join from './routes/Join.jsx';
import Solutions from './routes/Solutions.jsx';
import Team from './routes/Team.jsx';

import './App.css';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/join' element={<Join />} />
        <Route path='/compete' element={<Compete />} />
        <Route path='/competenutrition' element={<CompeteNutrition />} />
        <Route path='/competemeducation' element={<CompeteMeducation />} />
        <Route path='/solutions' element={<Solutions />} />
        <Route path='/team' element={<Team />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App