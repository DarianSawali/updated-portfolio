import React from 'react'
import Link from 'next/link'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'


const Footer = () => {
  return (
    <div className='mb-14'>
      <footer className='w-full text-gray-400 py-6'>
        <div className='w-[90%] mx-auto border-t border-[#2A0E61] mb-6'>
          <div className='max-w-6xl mx-auto flex flex-col med:flex-row items-center justify-between px-6 mt-12'>
            <div className='flex space-x-6 mt-4 md:mt-0'>
              <Link href={'https://github.com/DarianSawali'} target='_blank' rel='noopener noreferrer'>
                <FaGithub size={24} className='hover:text-white transition'/>
              </Link>
              <Link href={'https://www.linkedin.com/in/dariansawali/'} target='_blank' rel='noopener noreferrer'>
                <FaLinkedin size={24} className='hover:text-white transition'/>
              </Link>
              <Link href={'mailto:das14@sfu.ca'} target='_blank' rel='noopener noreferrer'>
                <FaEnvelope size={24} className='hover:text-white transition'/>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
