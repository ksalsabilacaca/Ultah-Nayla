import React from 'react'
import { useNavigate } from 'react-router-dom';
import home from '../assets/home.jpg'; 

const About = () => {
  const navigate = useNavigate();
  return (
    <div
      className="relative h-screen w-screen bg-cover bg-center backdrop-blur-full"
      style={{ backgroundImage: `url(${home})` }}>

        {/* Paragraf About Us */}
        <div className="absolute inset-40 bg-white bg-opacity-70 backdrop-blur-full rounded-full justify-center items-center">
        <h1 className="text-yellow-700 text-2xl font-bold text-center px-6 my-14 italic">ABOUT US</h1>
        <h2 className="text-yellow-700 text-lg text-center px-24 italic">
          Di Tahu Bulat & Co., kami percaya bahwa camilan sederhana bisa menjadi pengalaman luar biasa. Sebagai pelopor tahu bulat modern, kami menghadirkan inovasi 
          dengan tetap mempertahankan keaslian rasa khas Indonesia. Dengan komitmen 100% halal dan bahan-bahan berkualitas terbaik, kami memberikan produk yang tidak 
          hanya lezat, tetapi juga aman dan terpercaya untuk dinikmati semua kalangan. Prestasi kami sebagai salah satu usaha camilan terkemuka tidak lepas dari dedikasi 
          dalam menjaga standar kualitas dan pelayanan. Dengan penghargaan di bidang kuliner lokal, kami terus berinovasi untuk menciptakan variasi produk yang mengikuti 
          tren tanpa melupakan akar tradisional. Kami berkomitmen untuk memberikan lebih dari sekadar tahu bulat—kami membawa kehangatan, kebersamaan, dan kepuasan di setiap 
          gigitannya. Jadikan Tahu Bulat & Co. sebagai pilihan utama Anda untuk camilan modern yang menggugah selera : "Nikmati Raosna Tahu dengan Gaya!".
          </h2>
      </div>

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
    </div>
  )
}
export default About