import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Components/Home'
import Destination from './Components/Destination'
import Crew from './Components/Crew';
import Technology from './Components/Technology';

function App() {
  return (
    <div className="w-screen h-screen bg-cover bg-no-repeat flex flex-col relative overflow-hidden" >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/HOME" element={<Home />} />
          <Route path="/destination" element={<Destination />} />
          <Route path='/crew' element={<Crew />} />
          <Route path='/technology' element={<Technology />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

