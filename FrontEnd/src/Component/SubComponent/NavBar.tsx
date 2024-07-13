import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='flex items-center gap-2 font-medium'>
        <Link to={`/`}> <div className='hover:text-secondary-default hover:font-semibold w-[80px] 
                        text-center cursor-pointer hover:underline transition duration-700 '> Main </div></Link>
        <Link to={`/doctorList`}> <div className='hover:text-secondary-default hover:font-semibold w-[80px] 
                        text-center cursor-pointer hover:underline transition duration-700'> Doctors </div></Link>
        <Link to={`contacts/1`}> <div className='hover:text-secondary-default hover:font-semibold w-[80px] 
                        text-center cursor-pointer hover:underline transition duration-700'> Article </div></Link>
        <Link to={`contacts/1`}> <div className='hover:text-secondary-default hover:font-semibold w-[80px] 
                        text-center cursor-pointer hover:underline transition duration-700'> About </div></Link>
    </div>
  )
}

export default NavBar