'use client'

import { Socials } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useState } from 'react'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className='w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 backdrop-blur-md z-50 px-4 md:px-10'>
      <div className='w-full h-full flex items-center justify-between m-auto'>

        <a href="#about-me" className='flex items-center gap-2'>
          <Image 
            src='/DS_logo.svg'
            alt='logo'
            width={26} 
            height={26}
            className='cursor-pointer hover:animate-slowspin'
          />
          <span className='font-bold hidden md:block text-gray-300'>
            Darian Sawali
          </span>
        </a>

        <div className='hidden md:flex items-center justify-between w-[500px] border border-[#7042f861] shadow-lg shadow-[#2A0E61]/50 backdrop-blur-md px-5 py-2 rounded-full text-white'>
          <a href="#about-me" className='cursor-pointer'>About Me</a>
          <a href="#skills" className='cursor-pointer'>Skills</a>
          <a href="#projects" className='cursor-pointer'>Projects</a>
        </div>

        <div className='md:hidden flex items-center '>
          <button onClick={() => setMenuOpen(!menuOpen)}>
            <svg
              className='w-6 h-6 text-white'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              {menuOpen ? (
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
              ) : (
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16M4 18h16' />
              )}
            </svg>
          </button>
        </div>


        <div className='hidden md:flex flex-row gap-5'>
          {Socials.map(({ name, link, icon: Icon, color }) => (
            <Link
              key={name}
              href={link}
              target='_blank'
              rel='noopener noreferrer'
              className='hover:opacity-80 transition'
            >
              <Icon size={24} color={color} />
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className='md:hidden absolute top-[65px] left-0 w-full bg-[#0300145e] backdrop-blur-md flex flex-col items-center gap-4 py-4 text-gray-200 z-40 shadow-lg shadow-[#2A0E61]/50'>
          <a href="#about-me" onClick={() => setMenuOpen(false)} className='cursor-pointer'>About Me</a>
          <a href="#skills" onClick={() => setMenuOpen(false)} className='cursor-pointer'>Skills</a>
          <a href="#projects" onClick={() => setMenuOpen(false)} className='cursor-pointer'>Projects</a>
          <div className='flex gap-4 pt-2'>
            {Socials.map(({ name, link, icon: Icon, color }) => (
              <Link
                key={name}
                href={link}
                target='_blank'
                rel='noopener noreferrer'
                className='hover:opacity-80 transition'
              >
                <Icon size={24} color={color} />
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default Navbar
