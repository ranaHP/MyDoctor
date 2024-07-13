import React from 'react'
import { CardDemo } from './test'

const HeroSection = () => {
  return (
    <div className='min-h-[694px] bg-lime-400 py-[130px] pt-[40px]'>
        <div className='bg-lime-600 h-10 ' >
        {/* <Button>Button</Button> */}
        <CardDemo/>
        </div>
    </div>
  )
}

export default HeroSection