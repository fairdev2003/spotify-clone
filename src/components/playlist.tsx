import { useEffect, useState } from 'react'
import Navbar from './navbar'
import { useLibraries } from '../data/stores/store'
import data from '../data/music_data/playlists.json'
import { FaPlay } from "react-icons/fa";
import { motion } from 'framer-motion'
import { FaPause, FaShuffle } from "react-icons/fa6";
import { MdOutlineDownloadForOffline } from "react-icons/md";
import { MdPersonAddAlt1 } from "react-icons/md";
import { AiOutlineClockCircle } from "react-icons/ai";
import { BiPause, BiPlay } from 'react-icons/bi';
import './playlist.css'

const Playlist = () => {

  const playlist = useLibraries((state) => state.selected_playlist)
  const [isLoading] = useState(false)

  const current_playlist = useLibraries((state) => state.current_playlist)
  const set_current_playlist = useLibraries((state) => state.set_current_playlist)
  const set_track = useLibraries((state) => state.set_track)
  const track = useLibraries((state) => state.track)
  const set_music = useLibraries((state) => state.set_music)
  const music = useLibraries((state) => state.music)
  const playlist_id = useLibraries((state) => state.playlist_id)
  const set_playlist_id = useLibraries((state) => state.set_playlist_id)
  

  useEffect(() => {
    console.log(playlist)
    console.log("current_playlist")
    console.log(current_playlist)
  })

  return (
    <div>
      {playlist && playlist.length != 0 ? <div id='back' style={{background: 'linear-gradient(0deg, #181717 40%, rgb(133, 4, 4) 70%)'}} className='w-full max-h-[810px] rounded-xl flex flex-col bg-[#181717] overflow-scroll'>
        <Navbar color='normal' search={false}/>
        <div className='flex mt-5 p-4'>
          {playlist.image_url !== 'blank' ? <img className='w-[232px] h-[232px] ' src={playlist.playlist_image_link}/> : <div className='w-[232px] h-[232px] flex items-center justify-center bg-[#474646]'><svg viewBox="0 0 24 24" className='w-[150px] h-[150px] fill-[white] text-[white]'><path d="M6 3h15v15.167a3.5 3.5 0 1 1-3.5-3.5H19V5H8v13.167a3.5 3.5 0 1 1-3.5-3.5H6V3zm0 13.667H4.5a1.5 1.5 0 1 0 1.5 1.5v-1.5zm13 0h-1.5a1.5 1.5 0 1 0 1.5 1.5v-1.5z"></path></svg></div>}
          <div>
              <p className='mt-7 ml-6 mb-0 font-[500] text-[white]'>{playlist.playlist_type}</p>
              <h1 className='ml-6 font-[800] text-[white] text-[100px]'>{playlist.playlist_name}</h1>
              <p className='mt-7 ml-6 mb-0 font-[500] text-[white]'>{playlist.playlist_desc}</p>
          </div>
        </div>
        <div className='flex flex-col mt-4 h-full pb-5' style={{background: '	rgb(0,0,0, 0.3)'}}>
          <div className='flex gap-6 items-center pt-4 pl-4 pb-4'>
            <motion.div whileHover={{scale: 1.05}} className='bg-green w-[70px] h-[70px] rounded-full flex justify-center items-center cursor-pointer' onClick={() => {
              set_track(0)
              set_current_playlist(playlist)
              set_music(playlist.playlist_songs[0]._id)
              set_playlist_id(current_playlist._id)
              }} >{playlist._id === playlist_id ? <FaPlay size={30} className='ml-1'/> : <FaPause size={30}/>}</motion.div>
            <FaShuffle className='text-[gray] hover:text-[white] w-[35px] h-[35px] cursor-pointer hover:'/>
            <MdOutlineDownloadForOffline className='text-[gray] hover:text-[white] w-[40px] h-[40px] cursor-pointer'/>
            <MdPersonAddAlt1 className='text-[gray] hover:text-[white] w-[40px] h-[40px] cursor-pointer'/>
            
          </div>
          <div className='flex text-[white] text-[15px] pl-6 pr-6 select-none'>
              <p className='w-[35px]'>#</p>
              <p className='w-[400px]'>Tytuł</p>
              <p className='w-[300px]'>Album</p>
              <AiOutlineClockCircle/>
          </div>
          <div className='h-2 border-t-[1px] border-[white] mt-1 ml-5 mr-5'></div>
            {playlist.playlist_songs.map((item, index) => {
              return (<>
                <div key={index} className='h-[60px] ml-3 mr-6 p-3 flex items-center gap-3 rounded-lg hover:bg-[#474646] hover:text-[white]' id='music-record'>
                  {item._id === music ? <p><div className='icon'><span></span><span></span><span></span></div></p> : <BiPlay onClick={() => {
                    set_track(index)
                    set_current_playlist(playlist)
                    set_music(playlist.playlist_songs[index]._id)
                  }} className='text-white w-4 h-4'></BiPlay>}
                  <div className='w-[390px] flex text-[white] gap-2 select-none'>
                    <img alt='image' className='w-[40px] h-[40px] font-[800]' src={item.image_link}></img>
                    <div className=''>
                      <p className={`text-[14px] ${item._id === music ? "text-green" : "text-white"} select-none`}>{item.song_name}</p>
                      <p className='text-[14px] select-none'>{`${item.song_author[0].nickname}${item.contributors && item.contributors.length > 0 ? item.contributors.map((i) => {
                        return ((", " + i.nickname))
                      }): ""}`}</p>
                    </div>
                  </div>
                  <div className='w-[290px] text-[13px] text-[gray] select-none'>
                  </div>
                  <div className='w-[300px] text-[13px] text-[gray] select-none'>
                      
                  </div>
                </div>
               
              </>)
            })}
            <div className='m-6'>
              <h1 className='text-xl text-[white] font-[700] mb-4'>Więcej utworów od {playlist.playlist_author[0].nickname}</h1>
              <div className='flex gap-4'>
              </div>
                
              
            </div> 
        </div>
        
      </div>: null}
    </div>
  )
}

export default Playlist