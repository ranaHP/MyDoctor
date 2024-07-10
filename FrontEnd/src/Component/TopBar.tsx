import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutubeSquare } from 'react-icons/fa';

const TopBarComponent = () => {
    return (
        <div className='bg-neutral-light h-[40px] py-7 flex items-center justify-center'>
            <div className='w-[80%] max-w-[800pxs] flex items-center justify-between'>
                <p className='text-center font-poppins text-[13px]'>Emergency Help!</p>
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
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopBarComponent