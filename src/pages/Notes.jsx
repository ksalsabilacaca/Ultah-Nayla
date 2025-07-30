import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";

const Review = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [randomReviews, setRandomReviews] = useState([]);

  {/* Ulasan acak */}
  const reviews = [
     "Semangat ya dalam menjalani hidup. Kamu nggak sendirian, selalu ada yang mendukungmu.",
  "Hari-hari mungkin berat, tapi kamu lebih kuat dari yang kamu kira.",
  "Jangan lupa istirahat. Dirimu juga penting untuk dirimu sendiri.",
  "Langkah kecil pun tetap kemajuan. Terus jalan, perlahan tak apa.",
  "Kalau sedang lelah, berhenti sebentar bukan berarti menyerah.",
  "Apa pun yang sedang kamu hadapi sekarang, semuanya akan berlalu.",
  "Ada hari-hari sulit, tapi juga akan ada hari yang membuatmu tersenyum lagi.",
  "Kamu layak bahagia. Kamu layak tenang.",
  "Hidup nggak harus selalu sempurna, cukup dijalani dengan hati yang tulus.",
  "Kamu tumbuh, kamu belajar, dan itu sudah luar biasa.",
  "Nggak apa-apa kalau belum tahu semua jawabannya sekarang. Pelan-pelan aja.",
  "Orang-orang yang sayang kamu akan tetap di sisimu, bahkan saat kamu diam.",
  "Tetap jadi dirimu yang hangat dan kuat, seperti biasa.",
  "Boleh nangis, boleh lelah, tapi jangan pernah meremehkan dirimu sendiri.",
  "Kamu berharga. Tanpa perlu membuktikan apa pun.",
  "Kamu sudah berjalan sejauh ini. Jangan lupa apresiasi dirimu sendiri.",
  "Ada banyak hal baik menunggu di depan. Sabar ya, satu per satu akan datang.",
  "Meski kadang tidak terlihat, ada banyak orang yang mendoakanmu diam-diam.",
  "Kamu nggak harus selalu kuat. Boleh lemah, yang penting tetap jalan.",
  "Setiap hari adalah kesempatan baru. Kamu selalu bisa mulai lagi.",
  "Jangan bandingkan prosesmu dengan orang lain. Kamu punya waktu dan jalurmu sendiri.",
  "Saat kamu ragu, ingat bahwa versi dirimu di masa lalu pasti bangga denganmu sekarang.",
  "Kamu tidak perlu menjadi segalanya untuk semua orang. Cukup jadi dirimu sendiri.",
  "Hidup memang nggak selalu mudah, tapi kamu nggak pernah sendiri menjalaninya.",
  "Semesta tahu seberapa kuat kamu. Karena itu, kamu tetap ada sampai hari ini."

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
      className="h-screen w-screen bg-gradient-to-br from-rose-200 via-pink-300 to-red-200">

        <div className="absolute inset-20 bg-white bg-opacity-20 backdrop-blur-md rounded-xl p-5">
        <h1 className="text-pink-400 text-2xl font-bold text-center mb-6 italic">
          Kata - Kata Hari Ini
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
                className="w-16 h-16 rounded-full border-2 border-pink-400"
              />
              <h3 
                className="text-lg text-pink-500 font-semibold mt-2">
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
      <div 
        className="absolute top-0 left-0 w-full flex justify-center p-8 z-10 bg-opacity-100">
        <button onClick={() => navigate('/home')} className="text-white mx-6 hover:text-xl">
          Home
        </button>
        <button onClick={() => navigate('/Love')} className="text-pink-500 mx-6 hover:text-xl">
          Love
        </button>
        <button onClick={() => navigate('/Friendship')} className="text-white mx-6 hover:text-xl">
          Friendship
        </button>
        <button onClick={() => navigate('/Notes')} className="text-pink-500 mx-6 hover:text-xl">
          Notes
        </button>
      </div>
    </div>
  );
};

export default Review;