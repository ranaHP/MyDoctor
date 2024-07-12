import React from 'react'
import { FaUserCircle } from 'react-icons/fa'

const ProfileBTN = () => {
  return (
    <div className='flex items-center gap-3 px-3 cursor-pointer font-medium'>
        <div className='p-0.5 border rounded-full'>
           <FaUserCircle size={40}  className='text-gray-200' />
        </div>
        <div>
            Login
        </div>
    </div>
  )
}

export default ProfileBTN