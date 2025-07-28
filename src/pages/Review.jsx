import React from 'react';
import { useNavigate } from 'react-router-dom';
import home from '../assets/home.jpg'; 
import { useEffect, useState } from "react";

const Review = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [randomReviews, setRandomReviews] = useState([]);

  {/* Ulasan acak */}
  const reviews = [
    "Pelayanan customer disini sangat memuaskan! Saya sangat merekomendasikan.",
    "Pelayanan cepat dan ramah. Tidak ada yang mengecewakan.",
    "Tahu disini sangat berkualitas, tahunya tidak asem, cirengnya gurih. Selain itu harga nya dapat bersaing.",
    "Pengiriman tepat waktu dan sesuai dengan deskripsi. Sangat puas!",
    "Staf sangat membantu dalam menjawab pertanyaan saya. Terima kasih!",
    "Recomended banget beli tahu bulat disini, apalagi cireng rujaknya enak banget!",
    "Saya beli tahu bulat rasa balado dan rasa asin, jujur yang balado enak bangettt !!",
    "Nama merknya berkelas banget tapi harganya murah bangett, worth it !!",
    "Bakalan langganan terus disini, borong bakso gorengnya buat nyemil.",
    "Harganya murah, bisa delivery lewat WA, pelayanan ramah dan cepat, rasa enak, perfecto !",
    "Definisi nama kelas atas harga kaki lima ya disini !",
    "Enak dimakan selagi hangat, bumbunya pas banget, nggak terlalu asin. Wajib coba deh!",
    "Tahu bulat favorit keluarga! Praktis dan selalu fresh setiap kali pesan.",
    "Bakso gorengnya crunchy maksimal, bumbu pedasnya juara banget!",
    "Dagingnya berasa, nggak cuma tepung. Cocok banget buat cemilan atau teman makan nasi.",
    "Renyah di luar, kenyal di dalam. Apalagi kalau sama bumbunya, makin mantap!",
    "Cirengnya kenyal tapi nggak alot, bumbu rujaknya bikin lidah bergoyang! 🔥",
    "Rasa tradisionalnya tetap terasa, cocok untuk ngemil sore bareng teh hangat.",
    "Cireng terenak yang pernah saya coba, isiannya banyak dan variatif!",
    "Tahu crispynya renyah di luar tapi tetap lembut di dalam. Perfect untuk semua suasana!",
    "Bumbunya meresap sampai ke dalam, gurihnya bikin ketagihan!",
    "Tahu crispy yang super crunchy, cocok banget untuk ngemil rame-rame!"

  ];

  {/* Fungsi untuk memilih ulasan acak */}
  const getRandomReview = () => {
    const randomIndex = Math.floor(Math.random() * reviews.length);
    return reviews[randomIndex];
  };

  {/* Fetch data dari Random User API */}
  useEffect(() => {
    fetch("https://randomuser.me/api/?results=6")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data.results); // Simpan data pengguna 
        const reviews = data.results.map(() => getRandomReview()); // Ulasan acak untuk setiap pengguna
        setRandomReviews(reviews);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  if (users.length === 0) {
    return <div>Loading...</div>; // Menampilkan loading 
  }

  return (
    <div
      className="relative h-screen w-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${home})` }}>
        
        <div className="absolute inset-20 bg-white bg-opacity-70 backdrop-blur-md rounded-xl p-6">
        <h1 className="text-yellow-700 text-2xl font-bold text-center mb-6 italic">
          Review Customers
        </h1>

        {/* Membuat 6 kotak */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {users.map((user, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-7 flex flex-col items-center">
              <img
                src={user.picture.large}
                alt={`${user.name.first} ${user.name.last}`}
                className="w-16 h-16 rounded-full border-2 border-yellow-700"
              />
              <h3 
                className="text-lg font-semibold mt-2">
                {`${user.name.first} ${user.name.last}`}
              </h3>
              <p 
                className="text-sm text-gray-500">
                {user.location.city}, {user.location.country}
              </p>
              <p 
                className="text-center mt-4 text-gray-800">"{randomReviews[index]}"</p>
            </div>
          ))}
        </div>
      </div>

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
      </div>
  );
};

export default Review;