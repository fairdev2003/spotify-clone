import React from 'react'
import './card.css'
import { BiPlay } from 'react-icons/bi';
import { motion } from 'framer-motion';

const Card = (props: {img: string, playlist_name: string , year: number,}) => {
  return (
    <div className='h-[auto] w-[200px] bg-[#181717] p-5 pb-8 rounded-lg relative cursor-pointer hover:bg-[#383737]' id='card-container'>
        {props.img !== "blank" ? <div className='flex justify-center'><motion.div whileHover={{scale: 1.05}} initial={{y: -100}} animate={{y: 0}} className='absolute right-[30px] cursor-pointer top-[120px] w-[50px] h-[50px] hidden rounded-full bg-green justify-center' id='playbutton'><BiPlay className='ml-1' size={40}/></motion.div><img className='rounded-lg h-[160px] w-[160px]' src={props.img}></img></div> : <div className='h-[150px] rounded-lg flex items-center justify-center bg-[#474646]'><svg viewBox="0 0 24 24" className='w-[100px] h-[100px] fill-[white] text-[white]'><path d="M6 3h15v15.167a3.5 3.5 0 1 1-3.5-3.5H19V5H8v13.167a3.5 3.5 0 1 1-3.5-3.5H6V3zm0 13.667H4.5a1.5 1.5 0 1 0 1.5 1.5v-1.5zm13 0h-1.5a1.5 1.5 0 1 0 1.5 1.5v-1.5z"></path></svg></div>}
        <div>
            <h1 className='text-[white] mt-3 text-md font-[600]'>{props.playlist_name}</h1>
            <p className='text-[#525050] text-sm font-[500]'>{props.year}</p>
        </div>
    </div>
  )
}

export default Card;