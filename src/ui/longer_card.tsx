import { motion } from 'framer-motion'
import React from 'react'
import './ui.css'
import { BiPlay } from 'react-icons/bi'
import { useLibraries } from '../data/stores/store';

const LongerCard = (props: { image: string, title?: string, data: any }) => {

  const set_current_playlist = useLibraries((state) => state.set_current_playlist)
  const set_track = useLibraries((state) => state.set_track)
  const set_playlist = useLibraries((state) => state.set_playlist)
  const set_menu = useLibraries((state) => state.set_menu)

  return (
    <div className='min-w-[350px] h-[80px] bg-[#3a3939] blur-10 rounded-lg flex gap-5 items-center cursor-pointer relative' id='longer_button_container' onClick={
      () => {
        console.log(props.data)
        set_menu(props.data.playlist_type)
        set_playlist(props.data)
        
      }
    }>
        {props.image !== "blank" ? <img className='w-[80px] h-[80px] rounded-l-lg' src={props.image}/> : <div className='w-[80px] h-[80px] rounded-l-lg flex items-center justify-center bg-[#b438b4]'><svg viewBox="0 0 24 24" className='w-[45px] h-[45px] fill-[white] text-[white]'><path d="M6 3h15v15.167a3.5 3.5 0 1 1-3.5-3.5H19V5H8v13.167a3.5 3.5 0 1 1-3.5-3.5H6V3zm0 13.667H4.5a1.5 1.5 0 1 0 1.5 1.5v-1.5zm13 0h-1.5a1.5 1.5 0 1 0 1.5 1.5v-1.5z"></path></svg></div>}
        {props.title ? <p className='font-[Poppins] font-[600] text-lg items-center text-[white]'>{props.title}</p> : <p className='font-[Poppins] font-[600] text-lg items-center text-[white]'>No title</p>}
        <motion.div whileHover={{scale: 1.05}} initial={{y: -100}} animate={{y: 0}} className='absolute right-[20px] cursor-pointer top-[15px] w-[50px] h-[50px] hidden rounded-full bg-green justify-center items-center' id='playbutton_long' onClick={() => {
          set_track(0)
          set_current_playlist(props.data)
          console.log(props.data)
        }}><BiPlay className='ml-1' size={40}/></motion.div>
    </div>
  )
}

export default LongerCard;