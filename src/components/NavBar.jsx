import React from 'react'
import { useNavigate } from 'react-router-dom'
import logo1 from '../assets/logo1.png';

const NavBar = () => {
    const navigate = useNavigate();
    return (
        <div>
        <div className='bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"><w-full h-full flex gap-4 justify-start place-items-start text-lg font-bold p-10'>
         <img src={logo1} alt="logo1" className="w-20 h-10"></img>
            <button onClick={()=> navigate ('/home')}className='hover:text-xl text-white'>Home</button>
            <button onClick={()=> navigate ('/about')}className='hover:text-xl text-blue-200'>About</button>
            <button onClick={()=> navigate ('/experience')}className='hover:text-xl text-white'>Experience</button>
            <button onClick={()=> navigate ('/projects')}className='hover:text-xl text-blue-200'>Projects</button>
        </div>
        </div>
        
    )
}

export default NavBar