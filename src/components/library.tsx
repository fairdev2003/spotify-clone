import React, { useEffect } from 'react'
import { BiLibrary } from "react-icons/bi";
import { FiPlus } from "react-icons/fi";
import { FaArrowRight } from "react-icons/fa6";
import { TiPin } from "react-icons/ti";
import { HiSpeakerWave } from "react-icons/hi2";
import data from '../data/music_data/playlists.json'

export default function Library() {

  useEffect(() => {
    console.log(data)
  }, [])


  return (
    <div className='m-4'>
        <div className='font-[Poppins] font-[500] text-[white] text-xl flex justify-between items-center'>
            <div className='flex gap-3 items-center'><BiLibrary /><p>Biblioteka</p></div>
            <div className='flex gap-4'>
                <div className='hover:bg-hover_black rounded-full w-8 h-8 flex items-center justify-center'><FiPlus className='cursor-pointer'/></div>
                    <div className='hover:bg-hover_black rounded-full w-8 h-8 flex items-center justify-center'><FaArrowRight className='cursor-pointer hover:'/></div>
                </div>
            </div>
        <div className='mt-3'>


            {data.map((item, index) => {
                return (
                    <div key={item.playlist_name} onClick={() => {console.log(index)}} className='h-[64px] w-full flex items-center pl-2 gap-2 font-[500] hover:bg-hover_black hover:rounded-lg cursor-pointer'>
                        {item.image_url === "blank" ? <div className='w-[45px] h-[45px] flex items-center justify-center bg-[#474646] rounded-lg'><svg viewBox="0 0 24 24" className='w-[25px] h-[25px] fill-[white] text-[white]'><path d="M6 3h15v15.167a3.5 3.5 0 1 1-3.5-3.5H19V5H8v13.167a3.5 3.5 0 1 1-3.5-3.5H6V3zm0 13.667H4.5a1.5 1.5 0 1 0 1.5 1.5v-1.5zm13 0h-1.5a1.5 1.5 0 1 0 1.5 1.5v-1.5z"></path></svg></div> : <img src={item.image_url} className='w-[45px] h-[45px] rounded-lg'/>}
                        <div>
                            <p className={`text-${item.pinned ? 'green' : '[white]'} text-[15px] ml-1 font-[600]`}>{item.playlist_name}</p>
                            <div className='text-[#838080] text-[13px] flex items-center gap-1'>{item.pinned ? <p className='flex gap-1'><TiPin className='text-green' size={17}/>{item.playlist_type} • {item.playlist_author}</p>: <p className='ml-1'>{item.playlist_type} • {item.playlist_author}</p>}</div>
                        </div>
                     </div>
                )
            })}

        </div>
    </div>
  )
}
