import React from 'react'
// import '../../App.css'
import HomePage from '../assets/images/homePage.svg'
import settings from '../assets/images/Settings.svg'

import HomePageCards from '../components/Cards/HomePageCards'
export default function Home() {
  return (
    <div className='home-container  flex flex-col justify-center items-baseline w-screen'>
      <img className='px-3 py-3' src={settings}/>
      <img src={HomePage} className='self-center'/>
    
      <HomePageCards/>
    </div>
  )
}