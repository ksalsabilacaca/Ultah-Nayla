import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-cards';

import temenye from '../assets/temenye.png'
import keren from '../assets/keren.png'
import gtw from '../assets/gtw.png'
import base from '../assets/base.png'
import hh from '../assets/hh.png'
import hdh from '../assets/hdh.png'
import nangis from '../assets/nangis.png'
import tidur from '../assets/tidur.png'
import jelek from '../assets/jelek.png'
import meet1 from '../assets/meet1.jpg'
import komuk from '../assets/komuk.jpg'
import bocan from '../assets/bocan.jpg'
import main from '../assets/main.jpg'

function CardSlider() {
  return (
    <div className="flex justify-center items-center min-h-screen overflow-hidden">
      <Swiper
  effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
  className="w-[18rem] h-[26rem] rounded-2xl overflow-hidden"
>
  <SwiperSlide style={{ borderRadius: '1rem', overflow: 'hidden' }}>
    <div className="bg-gradient-to-br from-pink-300 via-rose-200 to-purple-200 rounded-2xl p-6 shadow-xl flex flex-col items-center">
      <img src={meet1} className="w-40 h-60 object-cover rounded-full mb-12" />
      <p className="text-white italic -translate-y-4">When we first met</p>
    </div>
  </SwiperSlide>

  <SwiperSlide style={{ borderRadius: '1rem', overflow: 'hidden' }}>
    <div className="bg-gradient-to-br from-pink-300 via-rose-200 to-purple-200 rounded-2xl p-6 shadow-xl flex flex-col items-center">
      <img src={komuk} className="w-40 h-60 object-cover rounded-full mb-12" />
      <p className="text-white italic -translate-y-4">Lu kalo marah mood bat dah</p>
    </div>
  </SwiperSlide>

  <SwiperSlide style={{ borderRadius: '1rem', overflow: 'hidden' }}>
    <div className="bg-gradient-to-br from-pink-300 via-rose-200 to-purple-200 rounded-2xl p-6 shadow-xl flex flex-col items-center">
      <img src={bocan} className="w-40 h-60 object-cover rounded-full mb-12" />
      <p className="text-white italic -translate-y-4">"sudah lama itu tertidur"</p>
    </div>
  </SwiperSlide>

  <SwiperSlide style={{ borderRadius: '1rem', overflow: 'hidden' }}>
    <div className="bg-gradient-to-br from-pink-300 via-rose-200 to-purple-200 rounded-2xl p-6 shadow-xl flex flex-col items-center">
      <img src={main} className="w-40 h-60 object-cover rounded-full mb-12" />
      <p className="text-white italic -translate-y-4">Gw keren disini</p>
    </div>
  </SwiperSlide>
</Swiper>
      </div>
  );
}

const Friendship = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const createHeart = () => {
      const heart = document.createElement("div");
      heart.innerText = "🤍";
      Object.assign(heart.style, {
        position: "fixed",
        top: "-30px",
        left: Math.random() * 100 + "vw",
        fontSize: "24px",
        pointerEvents: "none",
        animation: `fall 4s linear`,
        zIndex: 9999,
      });

      const animName = `fall-${Date.now()}`;
      const styleSheet = document.createElement("style");
      styleSheet.innerHTML = `
        @keyframes ${animName} {
          0% { transform: translateY(0); opacity: 1; }
          100% { transform: translateY(120vh); opacity: 0; }
        }
      `;
      document.head.appendChild(styleSheet);
      heart.style.animation = `${animName} 4s linear`;

      document.body.appendChild(heart);

      setTimeout(() => {
        heart.remove();
        styleSheet.remove();
      }, 4000);
    };

    const interval = setInterval(createHeart, 500);
    return () => clearInterval(interval);
  }, []);

  return (
   <div className="h-screen w-screen bg-gradient-to-br from-purple-200 via-pink-200 to-rose-100">
      {/* ❤️ Komponen slider kotak */}
      <CardSlider />
      <img src={temenye} alt="temenye" className="w-[20rem] h-[30rem] absolute top-[4cm] left-[3.6cm] hover:rotate-3 transition-transform duration-300"/>
      <img src={temenye} alt="temenye" className="w-[20rem] h-[30rem] absolute top-[4cm] right-[3.6cm] hover:rotate-3 transition-transform duration-300"/>
      <img src={base} alt="base"   className="w-[7rem] h-[12rem] absolute top-[1cm] left-[2cm] rotate-12 hover:rotate-3 transition-transform duration-300"/>
      <img src={hh} alt="hh"   className="w-[7rem] h-[9rem] absolute top-[1cm] right-[2cm] -rotate-12 hover:rotate-3 transition-transform duration-300"/>
      <img src={hdh} alt="hdh"   className="w-[7rem] h-[9rem] absolute top-[15cm] left-[2cm] -rotate-12 hover:rotate-3 transition-transform duration-300"/>
      <img src={nangis} alt="nangis"   className="w-[7rem] h-[9rem] absolute top-[15cm] right-[2cm] rotate-12 hover:rotate-3 transition-transform duration-300"/>
      <img src={tidur} alt="tidur"   className="w-[7rem] h-[9rem] absolute top-[15cm] right-[10cm] rotate-12 hover:rotate-3 transition-transform duration-300"/>
      <img src={jelek} alt="jelek"   className="w-[5rem] h-[5rem] absolute top-[16.3cm] left-[10.8cm] -rotate-12 hover:rotate-3 transition-transform duration-300"/>
      <img src={keren} alt="keren"   className="w-[7rem] h-[8rem] absolute top-[16cm] left-[15cm] rotate-12 hover:rotate-3 transition-transform duration-300"/>
      <img src={gtw} alt="gtw"   className="w-[7rem] h-[8rem] absolute top-[16cm] right-[15cm] -rotate-12 hover:rotate-3 transition-transform duration-300"/>

      {/* Navigasi tiap halaman */}
      <div 
        className="absolute top-0 left-0 w-full flex justify-center p-8 z-10 bg-opacity-100">
        <button onClick={() => navigate('/home')} className="text-white mx-6 hover:text-xl">
          Home
        </button>
        <button onClick={() => navigate('/Love')} className="text-pink-400 mx-6 hover:text-xl">
          Love
        </button>
        <button onClick={() => navigate('/Friendship')} className="text-white mx-6 hover:text-xl">
          Friendship
        </button>
        <button onClick={() => navigate('/Notes')} className="text-pink-400 mx-6 hover:text-xl">
          Notes
        </button>
      </div>
    </div>
  )
}
export default Friendship

