import React, { useEffect, useRef, useState } from 'react'
import { FaHouse, FaPlay, FaPause } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";
import '../App.css';
import Library from './library';
// @ts-ignore
import Home from './home';
import { useLibraries } from '../data/stores/store';
// @ts-ignore
import Playlist from './playlist';
import Album from './album';
import Search from './search';
// @ts-ignore
import sound from '../data/temp_music/sus.mp3'
import axios from 'axios';
import { motion } from 'framer-motion';
import Player from './player';
import data from '../data/music_data/data.json'

export default function Main() {

  const inputRef: any = useRef()

  const [audio] = useState(new Audio('http://localhost:3001/file/scarlet.mp3'));
  const [playing, setPlaying] = useState(false);
  const [currentTime, setcurrentTime]: any = useState(0);


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

  const stopAudio = () => {
    audio.pause()
  }

  useEffect(() => {
    playing ? audio.play() : audio.pause()
    audio.volume = 0.5
  }, [playing])

  useEffect(() => {
    console.log("Music Ended")
  }, [audio.currentTime])


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
          <div className='grid font-[Poppins] m-2 bg-[#181717] w-[400px] h-[742px] rounded-xl'>
            <Library/>
            {/* <audio className='ml-5' controls>
              <source src='http://localhost:3001/file/fainted.mp3'  type="audio/ogg"/>
            </audio> */}
          </div>
          
        </div>
        <div className='font-[Poppins] m-2 bg-[#181717] rounded-xl max-height:[100vh]; overflow-y: scroll' id='right'>
          {ChoosenMenu(menu)}
        </div>
        
        
      </div>
      <div className='w-[100%] bg-[black]'>
          <Player music_link='http://localhost:3001/file/scarlet.mp3' music_data={data}/>
      </div>
      
    </div>
  )
}
