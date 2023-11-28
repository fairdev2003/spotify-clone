import React from 'react'
import { BiLibrary } from "react-icons/bi";
import { FiPlus } from "react-icons/fi";
import { FaArrowRight } from "react-icons/fa6";
import Playlist1 from '../assets/playlist_logo1.jpg'
import Playlist2 from '../assets/playlist_logo2.jpg'
import Playlist3 from '../assets/playlist_logo3.jpg'
import Playlist4 from '../assets/playlist_logo4.jpg'
import { TiPin } from "react-icons/ti";

export default function Library() {
  return (
    <div className='m-4'>
        <div className='font-[Poppins] font-[500] text-white text-xl flex justify-between items-center'>
            <div className='flex gap-3 items-center'><BiLibrary /><p>Biblioteka</p></div>
            <div className='flex gap-4'>
            <div className='hover:bg-[#111111] rounded-full w-8 h-8 flex items-center justify-center'><FiPlus className='cursor-pointer'/></div>
                <div className='hover:bg-[#111111] rounded-full w-8 h-8 flex items-center justify-center'><FaArrowRight className='cursor-pointer hover:'/></div>
            </div>
        </div>
        <div className='mt-3'>
            <div className='h-[64px] w-full flex items-center pl-2 gap-2 font-[500] hover:bg-[#111111] hover:rounded-lg cursor-pointer'>
                <img src={Playlist1} className='w-[45px] h-[45px] rounded-lg'/>
                <div>
                    <p className='text-[#1ed760] text-[15px] ml-1 font-[600]'>All The Music</p>
                    <p className='text-[#838080] text-[13px] flex items-center gap-1'><TiPin className='text-[#1ed760]' size={17}/>Playlista • Music Channel Lol</p>
                </div>
            </div>
            <div className='h-[64px] w-full flex items-center pl-2 gap-2 font-[500] hover:bg-[#111111] hover:rounded-lg cursor-pointer'>
                <img src={Playlist2} className='w-[45px] h-[45px] rounded-lg'/>
                <div>
                    <p className='text-[white] text-[15px] ml-1 font-[600]'>Muzyka</p>
                    <p className='text-[#838080] text-[13px] flex items-center gap-1'><TiPin className='text-[#1ed760]' size={17}/>Playlista • Music Channel Lol</p>
                </div>
            </div>
            <div className='h-[64px] w-full flex items-center pl-2 gap-2 font-[500] hover:bg-[#111111] hover:rounded-lg cursor-pointer'>
                <img src={Playlist3} className='w-[45px] h-[45px] rounded-lg'/>
                <div>
                    <p className='text-[white] text-[15px] ml-1 font-[600]'>Chillhop</p>
                    <p className='text-[#838080] text-[13px] flex items-center gap-1'><TiPin className='text-[#1ed760]' size={17}/>Playlista • Spotify</p>
                </div>
            </div>
            <div className='h-[64px] w-full flex items-center pl-2 gap-2 font-[500] hover:bg-[#111111] hover:rounded-lg cursor-pointer'>
                <img src={Playlist4} className='w-[45px] h-[45px] rounded-lg'/>
                <div>
                    <p className='text-[white] text-[15px] ml-1 font-[600]'>Retro</p>
                    <p className='text-[#838080] text-[13px] flex items-center gap-1'><TiPin className='text-[#1ed760]' size={17}/>Playlista • Music Channel Lol</p>
                </div>
            </div>
            <div className='h-[64px] w-full flex items-center pl-2 gap-2 font-[500] hover:bg-[#111111] hover:rounded-lg cursor-pointer'>
                <div className='w-[45px] h-[45px] flex items-center justify-center bg-[#474646] rounded-lg'><svg viewBox="0 0 24 24" className='w-[25px] h-[25px] fill-white text-[white]'><path d="M6 3h15v15.167a3.5 3.5 0 1 1-3.5-3.5H19V5H8v13.167a3.5 3.5 0 1 1-3.5-3.5H6V3zm0 13.667H4.5a1.5 1.5 0 1 0 1.5 1.5v-1.5zm13 0h-1.5a1.5 1.5 0 1 0 1.5 1.5v-1.5z"></path></svg></div>
                <div>
                    <p className='text-[white] text-[15px] ml-1 font-[600]'>Playlista bez nazwy #1</p>
                    <p className='text-[#838080] text-[13px] flex items-center gap-1'><TiPin className='text-[#1ed760]' size={17}/>Playlista • Zbigniew Kucharski</p>
                </div>
            </div>
        </div>
    </div>
  )
}
