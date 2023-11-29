import React from 'react'
import { FaHouse } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";
import '../App.css';
import Library from './library';
import { createStore } from 'zustand';
import Main from './main';

export default function Home() {

  

  return (
    <div>
      <div id="whole-app">
        <div className='' id='left'>
          <div className='grid font-[Poppins] font-[500] m-2 bg-[#181717] w-[400px] h-[auto] rounded-xl'>
            <ul>
              <li className='cursor-pointer m-4 flex text-center items-center gap-5 text-xl text-[white]'><FaHouse/>Dom</li>
              <li className='cursor-pointer m-4 flex text-center items-center gap-5 text-xl text-[white]'><IoIosSearch />Szukaj</li>
            </ul>
          </div>
          <div className='grid font-[Poppins] m-2 bg-[#181717] w-[400px] h-[700px] rounded-xl'>
            <Library/>
          </div>
          
        </div>
        <div className='font-[Poppins] m-2 bg-[#181717] rounded-xl' id='right'>
          <Main/>
        </div>
        <div className='w-[auto] h-[120px] bg-[black] m-2 mt-0 mb-0 rounded-xl' id='player'>Siema</div>
      </div>
      
    </div>
  )
}
