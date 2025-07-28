import React from 'react';
import { useNavigate } from 'react-router-dom';
import home from '../assets/home.jpg'; 

const Home = () => {
  const navigate = useNavigate();
  const handleMenu = () => {
    navigate('/Menu');
  }

  return (
    <div
      className="relative h-screen w-screen bg-cover bg-center bg-opacity-50"
      style={{ backgroundImage: `url(${home})` }}
    >
     <div className="absolute inset-0 bg-black opacity-50"></div>
      {/* Navigasi tiap halaman */}
      <div 
        className="absolute top-0 left-0 w-full flex justify-center p-8 z-10 bg-opacity-100">
        <button onClick={() => navigate('/home')} className="text-white mx-6 hover:text-xl">
          Home
        </button>
        <button onClick={() => navigate('/about')} className="text-pink-300 mx-6 hover:text-xl">
          Love
        </button>
        <button onClick={() => navigate('/LoginPage')} className="text-white mx-6 hover:text-xl">
          Friendship
        </button>
        <button onClick={() => navigate('/review')} className="text-pink-300 mx-6 hover:text-xl">
          Notes
        </button>
      </div>

      <div 
        className="grid place-items-center h-full">
        <p className="italic text-8xl font-bold text-white absolute top-[7.5cm] left-[9cm]">
        Welcome Nayla !
        </p>
        <p className="italic text-3xl text-white absolute top-[10.5cm] left-[14.5cm]">
        A Special Website Just for You
        </p>
       </div>
        <div className="bg-pink-300 hover:bg-opacity-50 w-[5.2cm] h-[1.2cm] rounded-xl shadow-xl absolute top-[12cm] left-[16.8cm]">
        <button id="MenuButton" onClick={handleMenu} className="w-[5.2cm] p-2 rounded-xl text-white text-lg">Message For You 💌</button>
       </div>
    </div>
  );
}

export default Home;
