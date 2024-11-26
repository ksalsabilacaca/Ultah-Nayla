import React from 'react'
import NavBar
 from '../components/NavBar'
import fotodiri from '../assets/fotodiri.jpg';

const About = () => {
  return (
    <>
    <NavBar />
    <div>
    <div className='bg-<div class="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div> w-full h-full'>
    <div className="absolute top-56 left-32">
    <h1 className="text-white text-justify text-lg p-20 w-3/5 py-2">Hi! I’m Salsabila Maharani Mumtaz, a Computer Engineering student at University of Indonesia, passionate about programming and technology. I’m constantly enhancing my skills in this area and enjoy exploring new technologies.</h1>
    <h2 className="text-white text-justify text-lg p-20 w-3/5 py-2">Beyond technical skills, I am experienced in organizational leadership and time management, having taken on various roles that allowed me to manage teams and projects effectively. I pride myself on my strong leadership abilities and my ability to deliver results under pressure while fostering collaboration.</h2>
    <h3 className="text-white text-justify text-lg p-20 w-3/5 py-2">I am always seeking opportunities to learn, grow, and apply my skills in new and exciting ways. My passion for programming and my commitment to personal and professional development drive me to aim for excellence in everything I do. I look forward to contributing to innovative projects, collaborating with like-minded individuals, and making an impact in the tech industry.</h3>
    <img src={fotodiri} alt="fotodiri" className="w-90 h-96 rounded-lg absolute top-5 right-56"></img>
    </div>
    </div>
    </div>
    </>
  )
}

export default About