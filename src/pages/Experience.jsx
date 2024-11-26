import React from 'react'
import Kapten from '../assets/Kapten.jpg';
import baskom from '../assets/baskom.jpg';
import mtk from '../assets/mtk.jpg';
import penabur from '../assets/penabur.jpg';
import NavBar
 from '../components/NavBar'
const Experience = () => {
  return (
    <>
    <NavBar />
    <div>
    <div className='bg-<div class="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div> w-full h-full'>
    <div class="grid grid-cols-2 p-10 px-20 gap-4 gap-x-0  place-items-center">
  <div class="bg-blue-300 bg-opacity-10 rounded-xl h-72 w-4/5 flex items-center p-20">
  <img src={mtk} alt="mtk" className="w-36 h-auto rounded-lg w-30 h-40 object-cover mr-8"></img>
  <p class="flex items-center justify-end text-white font-bold">7th National Online Math Competition & 3rd Women Sepak Takraw East of Jakarta </p>
  </div>
  <div class="bg-blue-300 bg-opacity-10 rounded-xl h-72 w-4/5 flex items-center p-20">
  <img src={Kapten} alt="Kapten" className="w-36 h-auto rounded-lg w-30 h-40 object-cover mr-8"></img>
  <p class="flex items-center justify-end text-white font-bold">Captain of Women Futsal & Vice Captain of Badminton extracurricular</p>
  </div>
  <div class="bg-blue-300 bg-opacity-10 rounded-xl h-72 w-4/5 flex items-center p-20">
  <img src={penabur} alt="penabur" className="w-36 h-auto rounded-lg w-30 h-40 object-cover mr-8"></img>
  <p class="flex items-center justify-end text-white font-bold">1st Women Futsal at SMAK 7 BPK Penabur</p>
  </div>
  <div class="bg-blue-300 bg-opacity-10 rounded-xl h-72 w-4/5 flex items-center p-20">
  <img src={baskom} alt="baskom" className="w-36 h-auto rounded-lg w-30 h-40 object-cover mr-8"></img>
  <p class="flex items-center justify-end text-white font-bold">3rd Women Futsal at SMAN 68 Jakarta</p>
  </div>
</div>
<h1 className="text-white text-center p-10 italic">- And more to come -</h1>
    </div>
    </div>
    </>
  )
}

export default Experience