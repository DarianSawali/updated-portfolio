import React from 'react'
import ProjectCard from '../sub/ProjectCard'

const Projects = () => {
  return (
    <div className='flex flex-col items-center justify-center pb-20' id="projects">
        <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
            My Projects
        </h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-10 w-full'>
            <ProjectCard 
                src='/cinescope.png'
                title='Movie Directory App'
                description='A fullstack movie directory application created using React and TailwindCSS for frontend as well as PHP and MySQL for backend, with the addition of the TMDB API to fetch images.'
                github='https://github.com/DarianSawali/CineScope'
            />
            <ProjectCard 
                src='/yt-clone.png'
                title='YouTube Clone'
                description='A simple YouTube clone using React and MaterialUI, using real-time video search and content fetching via RapidAPI.'
                github='https://github.com/DarianSawali/Youtube_Clone'
            />
            <ProjectCard 
                src='/chat-app.png'
                title='Chat App'
                description='A full-stack chat application created in Vite React, using MongoDB as the database while using Socket.io to keep persistent connection between users.'
                github='https://github.com/DarianSawali/Chat-App'
            />
            <ProjectCard 
                src='/spirit-maes.png'
                title='Spirit Maes'
                description='A 2.5D Unity top-down puzzle platformer game where players explore levels through an ancient temple by possessing animals to equip their abilities.'
                github='https://github.com/DarianSawali/Spirit-Maes-Game'
            />
            <ProjectCard 
                src='/travelogger.png'
                title='TraveLogger'
                description='A mobile application developed using Java in Android Studio that allows users to track and log steps for any given session.'
                github='https://github.com/MichaelTj02/TraveLogger'
            />
            <ProjectCard 
                src='/mystic-woods.png'
                title='Survival Game'
                description='A simple 2D Unity survival game that incorporates multiple levels for players to eliminate the monsters and enemies that spawn in.'
                github='https://github.com/DarianSawali/Unity-Survival-Game'
            />
        </div>
    </div>
  )
}

export default Projects
