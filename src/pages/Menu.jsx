import React from 'react';
import { useNavigate } from 'react-router-dom';
import Tahu2 from '../assets/Tahu2.jpg'; 
import bulat from '../assets/bulat.jpeg';
import bakso from '../assets/bakso.jpeg';
import cireng from '../assets/cireng.jpg';
import crispy1 from '../assets/crispy1.webp';

const Menu = () => {
  const navigate = useNavigate();
  const handlePesan = () => {
    navigate('/Order');
  }

  return (
    <div
      className="relative h-screen w-screen bg-cover bg-center backdrop-blur-full"
      style={{ backgroundImage: `url(${Tahu2})` }}>
    
      {/* Navigasi tiap halaman */}
      <div className="absolute top-0 left-0 w-full flex justify-center p-8 z-10 bg-opacity-100">
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

      <div className="absolute inset-20 bg-white bg-opacity-70 backdrop-blur-full rounded-xl"></div>
      {/* Tahu Bulat */}
      <img src={bulat} alt="bulat" className="w-56 h-36 rounded-lg absolute top-[4cm] left-[5cm]"></img>
      <h1 className="text-yellow-700 absolute top-[4.8cm] left-[12cm] text-xl font-bold ">Tahu Bulat</h1>
      <h1 className="text-yellow-700 absolute top-[5.5cm] left-[12cm] text-base italic ">(Asin, Pedas, Keju, BBQ)</h1>
      <div className="bg-white w-[3.5cm] h-[1cm] rounded-lg absolute top-[6.5cm] left-[12cm]">
      <p className="p-1 text-center text-yellow-700 text-lg">Rp7.000</p>
      </div>
      {/* Bakso Goreng */}
      <img src={bakso} alt="bakso" className="w-56 h-36 rounded-lg absolute top-[10cm] left-[5cm]"></img>
      <h1 className="text-yellow-700 absolute top-[10.8cm] left-[12cm] text-xl font-bold ">Bakso Goreng</h1>
      <h1 className="text-yellow-700 absolute top-[11.5cm] left-[12cm] text-base italic ">(Asin, Pedas, Keju, BBQ)</h1>
      <div className="bg-white w-[3.5cm] h-[1cm] rounded-lg absolute top-[12.5cm] left-[12cm]">
      <p className="p-1 text-center text-yellow-700 text-lg">Rp12.000</p>
      </div>
      {/* Cireng */}
      <img src={cireng} alt="cireng" className="w-56 h-36 rounded-lg absolute top-[4cm] right-[12cm]"></img>
      <h1 className="text-yellow-700 absolute top-[4.8cm] right-[9.3cm] text-xl font-bold ">Cireng</h1>
      <h1 className="text-yellow-700 absolute top-[5.5cm] right-[6.3cm] text-base italic ">(Original / Bumbu Rujak)</h1>
      <div className="bg-white w-[3.5cm] h-[1cm] rounded-lg absolute top-[6.5cm] right-[7.5cm]">
      <p className="p-1 text-center text-yellow-700 text-lg">Rp8.000</p>
      </div>
      {/* Tahu Crispy */}
      <img src={crispy1} alt="crispy1" className="w-56 h-36 rounded-lg absolute top-[10cm] right-[12cm]"></img>
      <h1 className="text-yellow-700 absolute top-[10.8cm] right-[8cm] text-xl font-bold ">Tahu Crispy</h1>
      <h1 className="text-yellow-700 absolute top-[11.5cm] right-[6.3cm] text-base italic ">(Original / Bumbu Rujak)</h1>
      <div className="bg-white w-[3.5cm] h-[1cm] rounded-lg absolute top-[12.5cm] right-[7.5cm]">
      <p className="p-1 text-center text-yellow-700 text-lg">Rp10.000</p>
      </div>
      {/* Klik Order */}
      <div className="bg-yellow-700 hover:bg-opacity-50 w-[28cm] h-[1.3cm] rounded-xl border-yellow-900 border-2 absolute top-[16cm] left-[4.8cm]">
      <button 
        id="PesanButton" 
        onClick={handlePesan} 
        className="w-[28cm] p-2 rounded-xl text-white text-lg">Order Here</button>
      </div>
      </div>
  )
}

export default Menu