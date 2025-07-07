import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './Components/NavBar'
import Home from './components/Home'
import About from './components/About'
import Siva from './components/Contact'
import NotFound from './components/NotFound'
export default function App() {
  return (
    <BrowserRouter>
    <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Contact' element={<Siva />} />
        <Route path="*" element={<NotFound />} />     
        </Routes>
    </BrowserRouter>
    
  );
}
