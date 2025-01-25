import React from 'react'
import { useNavigate } from 'react-router-dom';
import Tahu2 from '../assets/Tahu2.jpg'; 
import {useState} from 'react';
import axios from 'axios';

const RegisterPage = () => {
    const navigate = useNavigate();

    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSpace = (e) => {
        if (e.key === ' ') {
          e.preventDefault();
        }
      };

    const handleRegister = async (e) => {
        e.preventDefault()
        if (username === "" || email === "" || password === "") {
          alert("Please fill in all fields")
          return
        }
        try {
          const response = await axios.post('http://localhost:5002/api/auth/register', {
            username, email, password
          })
          if (response.status !== 201) throw new Error('Failed to add user to database.');
            navigate("/LoginPage")
            console.log(response.data)
        }
        catch (error) {
          console.error(error)
          alert(error.response?.data || 'An error occurred');
        }
      };

  return (
    <div
      className="relative h-screen w-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${Tahu2})` }}
    >
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

      {/* Komponen Register */}
      <div 
        className="absolute w-[16cm] h-[10cm] border-2 border-yellow-900 bg-yellow-700 bg-opacity-70 backdrop-blur-full rounded-xl top-[5cm] left-[11cm]">
        <form 
            onSubmit={handleRegister}>
        <input 
            type="email" 
            placeholder="Email..." 
            onKeyDown={handleSpace} 
            onChange={(e) => setEmail(e.target.value)} 
            value={email} 
            className="absolute w-[11cm] h-[1cm] bg-white bg-opacity-90 backdrop-blur-full rounded-xl top-[2.1cm] left-[2.5cm] text-center"/>
        <input 
            type="text" 
            placeholder="Username..." 
            onKeyDown={handleSpace} 
            onChange={(e) => setUsername(e.target.value)} 
            value={username} 
            className="absolute w-[11cm] h-[1cm] bg-white bg-opacity-90 backdrop-blur-full rounded-xl top-[3.4cm] left-[2.5cm] text-center"/>
        <input 
            type="text" 
            placeholder="Password..." 
            onChange={(e) => setPassword(e.target.value)} 
            value={password} 
            className="absolute w-[11cm] h-[1cm] bg-white bg-opacity-90 backdrop-blur-full rounded-xl top-[4.7cm] left-[2.5cm] text-center"/>
        <div 
            className="absolute w-[2.5cm] h-[0.9cm] border-2 border-yellow-700 hover:bg-opacity-50 bg-white bg-opacity-90 backdrop-blur-full rounded-xl top-[7cm] left-[6.8cm]">
        <button 
            type="submit" 
            id="RegisterButton" 
            className="text-yellow-700 text-base p-0.5 absolute left-[0.37cm]">Register</button>
        </div>
        </form>
      </div>
      </div>
    
  )
}

export default RegisterPage