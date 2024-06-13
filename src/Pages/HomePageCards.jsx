import React from 'react'
import services from '../assets/ourserive.png'
export default function HomePageCards() {
  return (
    <div className='flex flex-col justify-center items-center w-full h-full pt-[10px] '>
      <div className='flex justify-evenly  items-baseline w-[90%] h-1/2 rounded-[20px] my-2 bg-[#2E335B] opacity-[70%]'>
          <h1 className='text-[40px] text-white self-center'>خدماتنا</h1>
          <img className='w-[20%] h-3/4' src={services}/>
      </div>
      <div className='flex justify-evenly  items-baseline w-[90%] h-1/2 rounded-[20px] my-2 bg-[#2E335B] opacity-[70%]'>
          <h1 className='text-[40px] text-white self-center'>رعاية مستمرة</h1>
          <img className='w-[20%] h-3/4' src={services}/>
      </div>
      <div className='flex justify-evenly  items-baseline w-[90%] h-1/2 rounded-[20px] my-2 bg-[#2E335B] opacity-[70%]'>
          <h1 className='text-[40px] text-white self-center'>فرقنا الطبية</h1>
          <img className='w-[20%] h-3/4' src={services}/>
      </div>
    </div>
  )
}
