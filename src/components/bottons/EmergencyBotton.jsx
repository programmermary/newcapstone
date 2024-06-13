import React from 'react'
import Button from '@mui/material/Button';
export default function EmergencyBotton() {
  return (
    <div className='self-center w-full'>
        <Button className='w-[80%] ' sx={{backgroundColor:'#CA5050',fontSize:'30px',borderRadius:'40px'}}  variant="contained">حالة طارئة</Button>
    </div>
  )
}
