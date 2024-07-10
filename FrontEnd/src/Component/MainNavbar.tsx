import React from 'react';
import logo from '../assets/logo.svg';
import { FaUserCircle } from 'react-icons/fa';
import { FiMenu } from 'react-icons/fi';

const MainNavbarComponent = () => {
    return (
        <div className='min-w-screen  h-[90px] flex justify-center'>
            <div className='max-w-[1200px] w-full flex items-center justify-between'>
                <img src={logo} alt="" width={'150px'} />
                <div className='flex gap-2'>
                    {/* menu items */}
                    <div className='block lg:hidden flex items-center justify-center cursor-pointer '>
                        <div className='shadow-sm rounded-lg p-2 border  bg-secondary-default'>
                            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-white">
                                <FiMenu  size={20} />
                            </a>
                        </div>
                    </div>
                    <div className='hidden lg:flex gap-3 items-center'>
                        <div className='font-poppins text-[13px]'>
                            About
                        </div>
                        <div className='font-poppins text-[13px]'>
                            Services
                        </div>
                        <div className='font-poppins text-[13px]'>
                            Contact
                        </div>
                        <div className='font-poppins text-[13px]'>
                            Blog
                        </div>
                        <div className='font-poppins text-[13px]'>
                            Help
                        </div>
                    </div>
                    {/* profile button */}
                    <div className='px-4 flex items-center justify-center gap-2'>
                        <div className=' rounded-full p-0.5 border '>
                            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-slate-200">
                                <FaUserCircle size={40} />
                            </a>
                        </div>
                        <div className='font-poppins text-[13px]'>
                            Login
                        </div>
                    </div>
                    {/* foe join now button */}
                    <div className=' border-blue-400 border-2 px-10 py-2 rounded cursor-pointer 
                        hover:bg-tertiary-default hover:text-white hover:shadow-2xl  hover:shadow-blue-400
                        '>
                        Join Now
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainNavbarComponent