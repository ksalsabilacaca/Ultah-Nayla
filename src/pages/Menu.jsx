import { useNavigate } from 'react-router-dom';
import fotonay from '../assets/fotonay.jpg';
import pita from '../assets/pita.png';
import kucingbawah from '../assets/kucingbawah.png';
import kucingatas from '../assets/kucingatas.png';
import React, { useEffect } from "react";
import confetti from "canvas-confetti";

export default function Menu() {
  const navigate = useNavigate();
  const gdriveUrl = "https://drive.google.com/file/d/19kKWG9tVttb5vYxOlX8ezAp9NJG0hbGh/view?usp=drive_link";

 useEffect(() => {
  // confetti besar sekali di awal
  confetti({
    particleCount: 150,
    spread: 250,
    origin: { y: 0.6 },
  });

  // confetti kecil2 tiap 2 detik
  const interval = setInterval(() => {
    confetti({
      particleCount: 60,
      spread: 150,
      origin: {
        x: Math.random(),
        y: Math.random() * 0.5,
      },
    });
  }, 2000);

  return () => clearInterval(interval);
}, []);

  const handlePesan = () => {
    window.open(gdriveUrl, "_blank");
  };

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-gradient-to-r from-pink-300 via-pink-400 to-purple-300">
   <div
  className="absolute top-0 right-0 animate-verticalMove"
>
  <img
    src={kucingatas}
    alt="kucingatas"
    className="w-[8rem] h-[15rem] rotate-[-45deg]"
  />
</div>
<style>
{`
@keyframes verticalMove {
  0%, 100% {
    transform: translateY(0); /* posisi awal */
  }
  50% {
    transform: translateY(120px); /* turun dulu */
  }
}

.animate-verticalMove {
  animation: verticalMove 2s ease-in-out infinite;
}
  `}
</style>
      {/* Navigasi tiap halaman */}
      <div className="absolute top-0 left-0 w-full flex justify-center p-8 z-10 bg-opacity-100">
        <button onClick={() => navigate('/home')} className="text-white mx-6 hover:text-xl">
          Home
        </button>
        <button onClick={() => navigate('/about')} className="text-pink-700 mx-6 hover:text-xl">
          Love
        </button>
        <button onClick={() => navigate('/LoginPage')} className="text-white mx-6 hover:text-xl">
          Friendship
        </button>
        <button onClick={() => navigate('/review')} className="text-pink-700 mx-6 hover:text-xl">
          Notes
        </button>
      </div>
      
      <div className="absolute inset-20 bg-white bg-opacity-20 backdrop-blur-full rounded-xl"></div>
      {/* Tahu Bulat */}
      <img
      src={fotonay}
      alt="fotonay"
      className="w-[23rem] h-[23rem] object-cover rounded-full absolute top-[4cm] left-[5cm]"/>
      <img src={pita} alt="pita" className="w-[7rem] h-[7rem] absolute top-[12.3cm] left-[8.2cm]"/>
      <img src={kucingbawah} alt="kucingbawah" className="w-[11rem] h-[18rem] absolute top-[13cm] left-[1.5cm]"
      style={{
    animation: 'leftright 2s ease-in-out infinite',
    transform: 'rotate(90deg)',
  }}
/>

<style>
{`
  @keyframes leftright {
    0%, 100% { transform: rotate(90deg) translateX(0); }
    50% { transform: rotate(90deg) translateX(-120px); }
  }
`}
</style>
      <h1 className="text-white absolute top-[4cm] left-[16.9cm] text-xl font-bold ">Happy Birthday Nay 🎂🎉</h1>
      <h1 className="text-white absolute top-[4.9cm] left-[16.9cm] text-lg">Semoga di usia ini lu selalu dikelilingi hal-hal baik, dilimpahin kebahagiaan yang tulus,</h1>
      <h1 className="text-white absolute top-[5.5cm] left-[16.9cm] text-lg">dan terus dikuatin buat jalanin semua proses di jurusan impian lu. I hope life treats you</h1>
      <h1 className="text-white absolute top-[6.1cm] left-[16.9cm] text-lg">kindly, dan semoga lu selalu punya alasan buat tersenyum, sekecil apapun itu.</h1>
      <h1 className="text-white absolute top-[6.84cm] left-[16.9cm] text-lg ">Gw tau lu orangnya nggak gampang cerita, tapi kalau bisa… tetep cerita ya ke gw.</h1>
      <h1 className="text-white absolute top-[7.44cm] left-[16.9cm] text-lg">Karena itu satu- satunya cara biar kita tetep keep in touch. Gw beneran nggak mau kita</h1>
      <h1 className="text-white absolute top-[8.04cm] left-[16.9cm] text-lg">jadi jauh. Lu tuh salah satu alasan kenapa gw bersyukur banget bisa keterima di 67,</h1>
      <h1 className="text-white absolute top-[8.64cm] left-[16.9cm] text-lg">selain ketemu **** hehe.</h1>
      <h1 className="text-white absolute top-[9.38cm] left-[16.9cm] text-lg">Jujur, temen-temen SMA tuh menurut gw yang paling tulus dan berkesan selama 19</h1>
      <h1 className="text-white absolute top-[9.98cm] left-[16.9cm] text-lg ">tahun hidup gw, dan lu termasuk sahabat terbaik gw. Gw udah percaya banget sama lu,</h1>
      <h1 className="text-white absolute top-[10.58cm] left-[16.9cm] text-lg ">jadi… plis jangan ninggalin gw, jangan kayak temen-temen yang dulu deket tapi</h1>
      <h1 className="text-white absolute top-[11.18cm] left-[16.9cm] text-lg ">sekarang cuma jadi silent viewers.</h1>
      <h1 className="text-white absolute top-[11.92cm] left-[16.9cm] text-lg "> Sehat terus ya, Nay. Bahagia juga. Gw tau, nanti pas udah masuk kepala dua, hidup</h1>
      <h1 className="text-white absolute top-[12.52cm] left-[16.9cm] text-lg ">pasti mulai makin serius dan complicated. Tapi please, no matter what happens, don’t</h1>
      <h1 className="text-white absolute top-[13.12cm] left-[16.9cm] text-lg ">give up. Jangan nyakitin diri sendiri. Lu itu berharga banget, Nay. Gw sayang banget</h1>
      <h1 className="text-white absolute top-[13.72cm] left-[16.9cm] text-lg ">sama lu. Gw ikut sedih tiap kali tau lu lagi nggak baik-baik aja even if from the outside</h1>
      <h1 className="text-white absolute top-[14.32cm] left-[16.9cm] text-lg ">gw cuma ketawa-ketawa, tapi lu pasti ngerti dalemnya gw kayak gimana kan.</h1>
      <h1 className="text-white absolute top-[15.06cm] left-[16.9cm] text-lg italic ">Lu selalu punya tempat di hidup gw, Nay. Makasih udah jadi diri lu yang sekarang</h1>
      <h1 className="text-white absolute top-[15.06cm] left-[33.8cm] text-lg ">🫶🏻🌈</h1>
  
      {/* Klik Video */}
      <div className="bg-pink-400 hover:bg-opacity-50 w-[7.4cm] h-[1.3cm] rounded-xl border-pink-500 border-2 absolute top-[15.3cm] left-[5.9cm]">
      <button 
        id="PesanButton" 
        onClick={handlePesan} 
        className="w-[7.4cm] p-2 rounded-xl text-white text-lg">🎥 Birthday Surprise Inside!</button>
      </div>
      </div>
     );
}

