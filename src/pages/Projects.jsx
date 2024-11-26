import React from 'react'
import NavBar from '../components/NavBar'
import contactme from '../assets/contactme.png';

const Projects = () => {
  return (
    <>
    <NavBar />
    <div>
    <div className='bg-<div class="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div> w-full h-full'>
    <div className='bg-blue-300 bg-opacity-10 rounded-xl h-[15cm] w-[19cm] absolute top-36 left-[9.3cm]'>
    <p className='text-white text-xl font-bold absolute top-[12cm] left-[7.7cm]'>Contact Me Page</p>
    <p className='text-blue-200 text-l  absolute top-[12.9cm] left-[3.8cm]'>This is a contact me page that I developed during my Exercise</p>
    <p className='text-blue-200 text-l  absolute top-[13.5cm] left-[7.7cm]'>FT UI Internship 2024</p>
    </div>
    <img src={contactme} alt="contactme" className="w-90 h-96 rounded-lg absolute top-48 left-[10.6cm]"></img>
    <p className="text-white absolute top-[21cm] left-[17.4cm] italic">- And more to come -</p>
    </div>
    </div>
    </>
  )
}

export default Projects