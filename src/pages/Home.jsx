import React from 'react';
import { useNavigate } from 'react-router-dom';
import Tahu2 from '../assets/Tahu2.jpg'; 

const Home = () => {
  const navigate = useNavigate();
  const handleMenu = () => {
    navigate('/Menu');
  }

  return (
    <div
      className="relative h-screen w-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${Tahu2})` }}
    >
      {/* Navigasi tiap halaman */}
      <div 
        className="absolute top-0 left-0 w-full flex justify-center p-8 z-10 bg-opacity-100">
        <button onClick={() => navigate('/home')} className="text-white mx-6 hover:text-xl">
          Home
        </button>
        <button onClick={() => navigate('/about')} className="text-yellow-700 mx-6 hover:text-xl">
          About
        </button>
        <button onClick={() => navigate('/LoginPage')} className="text-white mx-6 hover:text-xl">
          Login
        </button>
        <button onClick={() => navigate('/review')} className="text-yellow-900 mx-6 hover:text-xl">
          Review
        </button>
      </div>

      <div 
        className="grid place-items-center h-full">
        <p className="italic text-8xl font-bold text-white absolute top-[7.5cm] left-[9cm]">
        Tahu Bulat & Co.
        </p>
        <p className="italic text-3xl text-white absolute top-[10.5cm] left-[12.5cm]">
        Nikmati Raosna Tahu dengan Gaya!
        </p>
       </div>
        <div className="bg-white hover:bg-opacity-50 w-[3.5cm] h-[1.2cm] rounded-xl shadow-xl absolute top-[12cm] left-[17cm]">
        <button id="MenuButton" onClick={handleMenu} className="w-[3.5cm] p-2 rounded-xl text-yellow-700 text-lg">Menu</button>
       </div>
    </div>
  );
}

export default Home;
