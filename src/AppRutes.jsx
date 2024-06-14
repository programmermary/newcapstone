import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './Pages/Home'
import Services from './components/containers/Services'
import Team from "./components/containers/Team";
import DailyCare from './components/containers/DailyCare'


export default function AppRutes() {
  return (
    <div>
   <BrowserRouter>
      <Routes>
      <Route path='/' element={<Home/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path="/dailycare" element={<DailyCare/>}/>
        <Route path='/team' element={<Team/>}/>
 
      </Routes>
      </BrowserRouter>
     
    </div>
  )
}
