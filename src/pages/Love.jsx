import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import rasyabismillahbener from '../assets/rasyabismillahbener.jpg'; 
import soobin from '../assets/soobin.jpg'; 
import yoongi from '../assets/yoongi.jpg'; 

const Love = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const createHeart = () => {
      const heart = document.createElement("div");
      heart.innerText = "❤️";
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
   <div className="h-screen w-screen bg-gradient-to-br from-rose-300 via-pink-400 to-red-500">
 
  <div className="flex justify-center items-start gap-10 absolute top-[14rem] left-0 right-0">
  {/* Kotak 1 */}
  <div className="bg-white bg-opacity-70 backdrop-blur-md rounded-2xl w-64 h-70 p-6 flex flex-col items-center shadow-lg hover:scale-105 hover:shadow-2xl transition-transform duration-300">
     <img  src={yoongi}
        alt="yoongi" className="w-32 h-32 object-cover rounded-full mb-4" />
     <p className="text-center text-pink-700 font-semibold">Yoongi</p>
     <p className="text-center text-pink-700 text-sm mt-2 italic">
not your first bias (maybe)
but the first name i ever heard from you.
back when we just met,
before i knew your stories,
before i knew how bright you could be.
weren’t you basically born a BTS fan?
  </p>
  </div>

  {/* Kotak 2 */}
  <div className="bg-white bg-opacity-70 backdrop-blur-md rounded-2xl w-64 h-70 p-6 flex flex-col items-center shadow-lg hover:scale-105 hover:shadow-2xl transition-transform duration-300">
    <img  src={rasyabismillahbener}
        alt="rasyabismillahbener" className="w-32 h-32 object-cover rounded-full mb-4" />
    <p className="text-center text-pink-700 font-semibold">Rasya</p>
     <p className="text-center text-pink-700 text-sm mt-2 italic">
    you’ve cried enough.
now let love find you gently.
this is your aca.
and finally,
you don't have to try so hard to be loved. this time, may it be right. forget the past
you deserve something that stays.
  </p>
  </div>

  {/* Kotak 3 */}
  <div className="bg-white bg-opacity-70 backdrop-blur-md rounded-2xl w-64 h-70 p-6 flex flex-col items-center shadow-lg hover:scale-105 hover:shadow-2xl transition-transform duration-300">
     <img  src={soobin}
        alt="soobin" className="w-32 h-32 object-cover rounded-full mb-4" />
    <p className="text-center text-pink-700 font-semibold">Soobin</p>
     <p className="text-center text-pink-700 text-sm mt-2 italic">
    A new name, a new bias, one you found after we’d known each other for a while.
Class 11 was the era of your full on Soobin phase.
You were so whipped. And I witnessed all of it. 
  </p>
  </div>
</div>



      {/* Navigasi tiap halaman */}
      <div 
        className="absolute top-0 left-0 w-full flex justify-center p-8 z-10 bg-opacity-100">
        <button onClick={() => navigate('/home')} className="text-white mx-6 hover:text-xl">
          Home
        </button>
        <button onClick={() => navigate('/Love')} className="text-pink-600 mx-6 hover:text-xl">
          Love
        </button>
        <button onClick={() => navigate('/Friendship')} className="text-white mx-6 hover:text-xl">
          Friendship
        </button>
        <button onClick={() => navigate('/Notes')} className="text-pink-600 mx-6 hover:text-xl">
          Notes
        </button>
      </div>
    </div>
  )
}
export default Love