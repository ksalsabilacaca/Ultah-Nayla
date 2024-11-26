import React, { useState, useEffect } from 'react'
import NavBar from '../components/NavBar'
import axios from 'axios';

const Home = () => {
    const[data,setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
             try {
                const res = await axios.get('https://api.github.com/users/ksalsabilacaca');
                setData(res.data);
        } catch (error){
            console.error(error);
        }
    }
        fetchData();
    },[] )

    return (
    <>
    <NavBar />
    <div>
    <div className='bg-<div class="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div> w-full h-full'>
        <img src={data.avatar_url} alt="ksalsabilacaca's avatar" className='w-32 h-32 rounded-full absolute top-[7cm] left-[17.4cm]'/>
        <p className='text-xl font-bold text-white italic absolute top-[10.6cm] left-[15.7cm]'>{data.name}</p>
       <div class="grid place-items-center h-screen">
        <p className='italic text-8xl font-bold font-italic text-white absolute top-[12cm] left-[13cm]'>Welcome !</p>
        <p className='italic text-3xl text-white absolute top-[14.8cm] left-[11.2cm]'>Hello, I'm Salsabila and let's go to know me !</p>
    </div>
    </div>
    </div>
     </>
    )
}

export default Home