import React from 'react'

const NavBar = () => {
  return (
    <div className='flex items-center gap-2 font-medium'>
        <div className='hover:text-secondary-default hover:font-semibold w-[80px] text-center cursor-pointer hover:underline'> Main </div>
        <div className='hover:text-secondary-default hover:font-semibold w-[80px] text-center cursor-pointer hover:underline'> Doctors </div>
        <div className='hover:text-secondary-default hover:font-semibold w-[80px] text-center cursor-pointer hover:underline'> Article </div>
        <div className='hover:text-secondary-default hover:font-semibold w-[80px] text-center cursor-pointer hover:underline'> Contact Us </div>
        <div className='hover:text-secondary-default hover:font-semibold w-[80px] text-center cursor-pointer hover:underline'> About </div>
    </div>
  )
}

export default NavBar