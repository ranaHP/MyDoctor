import React from 'react'

const NavBar = () => {
  return (
    <div className='flex items-center gap-2 font-medium'>
        <div className='hover:text-secondary-default hover:font-semibold w-[80px] 
                        text-center cursor-pointer hover:underline transition duration-700 '> Main </div>
        <div className='hover:text-secondary-default hover:font-semibold w-[80px] 
                        text-center cursor-pointer hover:underline transition duration-700'> Doctors </div>
        <div className='hover:text-secondary-default hover:font-semibold w-[80px] 
                        text-center cursor-pointer hover:underline transition duration-700'> Article </div>
        <div className='hover:text-secondary-default hover:font-semibold w-[80px] 
                        text-center cursor-pointer hover:underline transition duration-700'> About </div>
    </div>
  )
}

export default NavBar