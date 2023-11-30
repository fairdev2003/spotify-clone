import React, { useRef } from 'react'
import { FaHouse } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";
import '../App.css';
import Library from './library';
import { createStore } from 'zustand';
// @ts-ignore
import Home from './home';
import { useLibraries } from '../data/stores/store';
// @ts-ignore
import Playlist from './playlist';
import Album from './album';
import Search from './search';

export default function Main() {

  const menu = useLibraries((state) => state.menu)

  const ChoosenMenu = ( prop: string ) => {
    if (prop === "Playlista") {
      return (<Playlist/>)
    } if (prop === "Dom") {
      return (<Home/>)
    } if (prop === "Album") {
      return (<Album/>) 
    } if (prop === "Szukaj") {
      return (<Search/>)
    }
  }

  const set_menu = useLibraries((state) => state.set_menu)

  const changeMenu = ( menu: string ) => {
    set_menu(menu)
  }

  return (
    <div>
      <div id="whole-app">
        <div className='' id='left'>
          <div className='grid font-[Poppins] font-[500] m-2 bg-[#181717] w-[400px] h-[auto] rounded-xl'>
            <ul>
              <li onClick={() => {
                changeMenu('Dom');
                
              }} className='cursor-pointer m-4 flex text-center items-center gap-5 text-lg font-[500] text-[white]'><FaHouse/>Dom</li>
              <li onClick={() => {
                changeMenu('Szukaj');

                }} className='cursor-pointer m-4 flex text-center items-center gap-5 text-lg font-[500] text-[white]'><IoIosSearch />Szukaj</li>
            </ul>
          </div>
          <div className='grid font-[Poppins] m-2 bg-[#181717] w-[400px] h-[700px] rounded-xl'>
            <Library/>
          </div>
          
        </div>
        <div className='font-[Poppins] m-2 bg-[#181717] rounded-xl max-height:[100vh]; overflow-y: scroll' id='right'>
          {ChoosenMenu(menu)}
        </div>
        <div className='w-[auto] h-[120px] bg-[black] m-2 mt-0 mb-0 rounded-xl' id='player'>Siema</div>
      </div>
      
    </div>
  )
}
