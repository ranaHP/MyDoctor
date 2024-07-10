import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { GrYoutube } from 'react-icons/gr';

const TopBarComponent = () => {
    return (
        <div className='bg-neutral-light h-[40px] flex items-center justify-center py-8'>
            <div className='max-w-[1200px] w-full flex items-center justify-between'>
                <p className='text-center font-poppins text-[13px] text-gray-500 font-medium'>Emergency Help!</p>
                <div className='flex'>
                    <div className="flex space-x-4">
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-600">
                            <FaFacebookF size={15} />
                        </a>
                        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-400">
                            <FaTwitter size={15} />
                        </a>
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-pink-500">
                            <FaInstagram size={15} />
                        </a>
                        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-blue-700">
                            <FaLinkedinIn size={15} />
                        </a>
                        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-red-700">
                            <GrYoutube  size={17} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopBarComponent