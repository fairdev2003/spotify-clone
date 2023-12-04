import React,  { useRef, useEffect } from 'react'
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import { motion } from 'framer-motion';
import { FiBell } from "react-icons/fi";
import { LiaUserFriendsSolid } from "react-icons/lia";
import { BiSearch } from 'react-icons/bi';
import './navbar.css'
import { useLibraries } from '../data/stores/store';


const Navbar = (props: {color: string, search: boolean}) => {

  const inputRef: any = useRef();
  const set_playlist = useLibraries((state) => state.set_playlist)

  useEffect(() => {
    if (props.search) {
      inputRef.current.focus();
      set_playlist(-1)

    }
    
  }, [inputRef])

  return (
    <div className='w-auto h-auto flex gap-3 justify-between p-4 top-0 bg-scroll sticky' style={{background: `${props.color === "normal" ? 'rgb(133, 4, 4)' : "none"}`}}>
        <div className='flex gap-3 items-center'>
            <div className='w-8 h-8 bg-[black] rounded-full flex justify-center items-center opacity-90 cursor-pointer'><GoChevronLeft className='text-[white]' size={20}/></div>
            <div className='w-8 h-8 bg-[black] rounded-full flex justify-center items-center opacity-90 cursor-pointer'><GoChevronRight className='text-[white]' size={20}/></div>
            {props.search ? <div className='w-[400px] h-[45px] flex justify-start items-center bg-[#353232] rounded-full gap-1' id='text'>
              <BiSearch size={20} className='ml-5 text-[white]'/>
              <input ref={inputRef} id='input' placeholder='Czego chcesz posłuchać?' type='text' className='bg-[transparent] border-[transparent] border-none outline-none text-[white] text-sm placeholder:text-sm placeholder:text-gray active:border[1px] active:border-[black]'></input>
            </div> : null}
        </div>
        <div className='flex justify-center items-center gap-3'>
            <motion.button whileHover={{scale: 1.05}} className='h-[40px] w-[150px] bg-[white] text-[black] rounded-full text-sm font-[700]'>Odkryj Premium</motion.button>
            <div className='w-8 h-8 bg-[black] rounded-full flex justify-center items-center opacity-90 cursor-pointer'><FiBell className='text-[white]' size={18}/></div>
            <div className='w-8 h-8 bg-[black] rounded-full flex justify-center items-center opacity-90 cursor-pointer'><LiaUserFriendsSolid className='text-[white]' size={22}/></div>
            <div className='w-8 h-8 bg-[black] rounded-full flex justify-center items-center opacity-90 cursor-pointer p-1'><img src='https://i.scdn.co/image/ab67757000003b82f0f75390bade4bd450e8408d' alt='profile_picture' className='rounded-full'/></div>
        </div>
    </div>
  )
}

export default Navbar