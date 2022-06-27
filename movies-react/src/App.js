import React from 'react'
import './index.css';
import Home from './components/pages/Home';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Detalle from './components/pages/Detalle';

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:id" element={<Detalle />} />
    </Routes>
  </BrowserRouter>
  )
}

export default App