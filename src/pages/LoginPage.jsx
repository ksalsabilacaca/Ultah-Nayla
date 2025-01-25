import React from 'react'
import { useNavigate } from 'react-router-dom';
import Tahu2 from '../assets/Tahu2.jpg'; 
import {useState} from 'react';
import axios from 'axios';

const LoginPage = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    axios.defaults.withCredentials = true;
    
    const handleSpace = (e) => {
    if (e.key === ' ') {
      e.preventDefault();
    }
  };

    const handleResgiterHere = () => {
        navigate('/RegisterPage');
    }

    const handleLogin = async (e) => {
        e.preventDefault()
        try {
          if (username === "" || password === "") {
            alert("Please fill in all fields")
            return
          }
            const response = await axios.post('http://localhost:5002/api/auth/login', {
            username, password
          })
          if (response.status !== (201)) throw new Error('Failed to login. Check your credentials')
          navigate('/Home')
          console.log(response.data)
        }
        catch (error) {
          console.error(error)
          alert(error.response.data)
        }
      }

  return (
    <div
      className="relative h-screen w-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${Tahu2})` }}>

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

      {/* Komponen Login */}
      <div 
        className="absolute w-[16cm] h-[10cm] border-2 border-yellow-900 bg-yellow-700 bg-opacity-70 backdrop-blur-full rounded-xl top-[5cm] left-[11cm]">
        <form 
            onSubmit={handleLogin}>
        <input 
            type="text" 
            placeholder="Email / Username ..." 
            onKeyDown={handleSpace} 
            onChange={(e) => setUsername(e.target.value)} 
            value={username} 
            className="absolute w-[11cm] h-[1cm] bg-white bg-opacity-90 backdrop-blur-full rounded-xl top-[2.6cm] left-[2.5cm] text-center"/>
        <input 
            type="password" 
            placeholder="Password..." 
            onChange={(e) => setPassword(e.target.value)} 
            value={password} 
            className="absolute w-[11cm] h-[1cm] bg-white bg-opacity-90 backdrop-blur-full rounded-xl top-[4cm] left-[2.5cm] text-center"/>
        <button 
            id="RegisterHereButton" 
            type="button" 
            onClick={handleResgiterHere} 
            className="text-white text-base absolute top-[5.9cm] left-[6.5cm]">Register Here!</button>
        <div 
            className="absolute w-[2.5cm] h-[0.9cm] border-2 border-yellow-700 hover:bg-opacity-50 bg-white bg-opacity-90 backdrop-blur-full rounded-xl top-[6.8cm] left-[6.5cm]">
        <button 
            id="LoginButton" 
            type="submit" 
            className="text-yellow-700 text-base p-0.5 absolute left-[0.6cm]">Login</button>
        </div>
        </form>
      </div>
      </div>
    
  )
}
export default LoginPage