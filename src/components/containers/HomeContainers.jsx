import React from 'react'
// import '../../App.css'
import HomePage from '../../assets/images/homePage.svg'
import settings from '../../assets/images/Settings.svg'
import EmergencyBotton from '../bottons/EmergencyBotton'
import HomePageCards from '../HomePageCards'
export default function HomeContainers() {
  return (
    <div className='home-container  flex flex-col justify-center items-baseline w-screen'>
      <img className='px-3 py-3' src={settings}/>
      <img src={HomePage} className='self-center'/>
      <EmergencyBotton/>
      <HomePageCards/>
    </div>
  )
}
