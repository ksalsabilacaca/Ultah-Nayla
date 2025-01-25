import React from 'react'
import { useNavigate } from 'react-router-dom';
import Tahu2 from '../assets/Tahu2.jpg'; 
import { useState } from 'react';

const Order = () => {
  const navigate = useNavigate();

  {/* Inisiasi untuk menyimpan review */}
  const [userReview, setUserReview] = useState("");
  const [allReviews, setAllReviews] = useState([]); // Menyimpan semua review yang ditulis

  {/* Nomor WhatsApp yang punya toko */}
  const whatsappNumber = "6281283510553"; 
  {/* Pesan yang mau dikirim */}
  const message = "Halo,%20saya%20ingin%20membeli%20tahu%20anda"; 

  {/* Link WhatsApp */}
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

  const handleSubmitReview = (e) => {
    e.preventDefault();
    if (userReview.trim() !== "") {
      setAllReviews([...allReviews, userReview]); // Menambahkan review 
      setUserReview(""); // Reset setelah review dikirim
    } else {
      alert("Please write a review before submitting.");
    }
  };
  
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
      
        {/* Bagian Order */}
        <div className="absolute w-[13cm] h-[8cm] bg-white bg-opacity-70 backdrop-blur-full rounded-full top-[3.2cm] left-[3.5cm]">
        <h1 className="text-2xl font-bold text-yellow-700 absolute top-[2.5cm] left-[4.5cm]">Order Now</h1>
        <h2 className="text-yellow-700 absolute top-[3.5cm] left-[1.2cm] ">Click the button below to place an order via WhatsApp :</h2>
        
        {/* Tombol Order via WhatsApp */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-2 bg-white hover:bg-opacity-50 border-2 border-yellow-700 text-yellow-700 rounded-lg absolute top-[4.5cm] left-[3.2cm]"
        > Order Now via WhatsApp </a>
      </div>
      
       {/* Tempat Menulis review */}
       <div className="absolute w-[13cm] h-[8cm] bg-white bg-opacity-70 backdrop-blur-full rounded-full top-[3.2cm] right-[3.5cm]">
        <div className="mt-14 text-center">
        <h2 className="text-xl font-semibold text-yellow-700">Write your review</h2>
        <form 
            onSubmit={handleSubmitReview}>
        <textarea
            className="w-80 h-24 mt-4 p-2 border-2 border-yellow-700 rounded-lg text-center"
            placeholder="Write your review here..."
            value={userReview}
            onChange={(e) => setUserReview(e.target.value)}/>
        <div 
            className="mt-4">
            <button
                type="submit"
                className="px-4 py-2 bg-yellow-700 text-white rounded-lg hover:bg-yellow-800">
                Send
            </button>
        </div>
        </form>
      </div>

      {/* Menampilkan review terakhir*/}
      <div className="absolute w-[13cm] h-[8cm] bg-white bg-opacity-70 backdrop-blur-full rounded-full top-[8.4cm] right-[9cm]">
        <div className="p-20">
        <h2 className="text-xl font-semibold text-yellow-700 text-center">Your Review</h2>
        <div className="text-center">
            {allReviews.length > 0 ? (
            <div className="mt-2 text-gray-800">{allReviews[allReviews.length - 1]}</div> // untuk menampilkan review terakhir
            ) : (
            <p className="text-gray-500">No review visible yet</p>
          )}
        </div>
      </div> 
      </div>
      </div>
    </div>
  );
};
export default Order