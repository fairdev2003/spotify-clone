import React from 'react'
import Navbar from './navbar'
import { useLibraries } from '../data/stores/store'
import data from '../data/music_data/playlists.json'
import { FaPlay } from "react-icons/fa";
import { motion } from 'framer-motion'
import { FaShuffle } from "react-icons/fa6";
import { MdOutlineDownloadForOffline } from "react-icons/md";
import { MdPersonAddAlt1 } from "react-icons/md";
import { AiOutlineClockCircle } from "react-icons/ai";

const Playlist = () => {

  const playlist = useLibraries((state) => state.selected_playlist)

  return (
    <div id='back' style={{background: 'linear-gradient(0deg, #181717 40%, rgb(133, 4, 4) 70%)'}} className='w-full max-h-[810px] rounded-xl flex flex-col bg-[#181717] overflow-scroll'>
      <Navbar/>
      <div className='flex mt-5 p-4'>
        {data[playlist].image_url !== 'blank' ? <img className='w-[232px] h-[232px] ' src={data[playlist].image_url}/> : <div className='w-[232px] h-[232px] flex items-center justify-center bg-[#474646]'><svg viewBox="0 0 24 24" className='w-[150px] h-[150px] fill-[white] text-[white]'><path d="M6 3h15v15.167a3.5 3.5 0 1 1-3.5-3.5H19V5H8v13.167a3.5 3.5 0 1 1-3.5-3.5H6V3zm0 13.667H4.5a1.5 1.5 0 1 0 1.5 1.5v-1.5zm13 0h-1.5a1.5 1.5 0 1 0 1.5 1.5v-1.5z"></path></svg></div>}
        <div>
            <p className='mt-7 ml-6 mb-0 font-[500] text-[white]'>{data[playlist].playlist_type}</p>
            <h1 className='ml-6 font-[800] text-[white] text-[100px]'>{data[playlist].playlist_name}</h1>
        </div>
      </div>
      <div className='flex flex-col mt-4 h-full pb-5' style={{background: '	rgb(0,0,0, 0.3)'}}>
        <div className='flex gap-6 items-center pt-4 pl-4 pb-4'>
          <motion.div whileHover={{scale: 1.05}} className='bg-green w-[70px] h-[70px] rounded-full flex justify-center items-center cursor-pointer' ><FaPlay size={30} className='ml-1'/></motion.div>
          <FaShuffle className='text-[gray] hover:text-[white] w-[35px] h-[35px] cursor-pointer hover:'/>
          <MdOutlineDownloadForOffline className='text-[gray] hover:text-[white] w-[40px] h-[40px] cursor-pointer'/>
          <MdPersonAddAlt1 className='text-[gray] hover:text-[white] w-[40px] h-[40px] cursor-pointer'/>
          
        </div>
        <div className='flex text-[gray] text-[15px] pl-6 pr-6'>
            <p className='w-[23px]'>#</p>
            <p className='w-[400px]'>Tytuł</p>
            <p className='w-[300px]'>Album</p>
            <AiOutlineClockCircle/>
        </div>
        <div className='h-2 border-t-[1px] border-[gray] mt-1 ml-5 mr-5'></div>
          {data[playlist].track_list.map((item, index) => {
            return (<>
              <div className='h-[60px] ml-3 mr-6 p-3 flex items-center gap-3 rounded-lg hover:bg-[#474646] hover:text-[white]'>
                <div className='flex items-center gap-4'>
                  <p className='w-[10px] text-[white]'>{index + 1}</p>
                </div>
                <div className='w-[390px] flex text-[white] gap-2'>
                  <img className='w-[40px] h-[40px] font-[800]' src={item.music_image}></img>
                  <div className=''>
                    <p className='text-[14px]'>{item.music_name}</p>
                    <p><div className='flex text-[14px] '>{item.music_authors.map(
                      (i, index) => {
                        return (<>
                          {index + 1 === item.music_authors.length ? <p>{i}</p>: <p>{i}, {" "}</p>}
                        </>)
                      }
                    )}</div></p>
                  </div>
                </div>
                <div className='w-[290px] text-[13px] text-[gray]'>
                    {item.album}
                </div>
                <div className='w-[300px] text-[13px] text-[gray]'>
                    {item.time}
                </div>
              </div>
              
            </>)
          })}
      </div>
      
    </div>
  )
}

export default Playlist