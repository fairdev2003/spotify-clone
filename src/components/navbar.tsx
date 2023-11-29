import React from 'react'
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import { motion } from 'framer-motion';
import { FiBell } from "react-icons/fi";
import { LiaUserFriendsSolid } from "react-icons/lia";


const Navbar = () => {
  return (
    <div className='w-auto flex gap-3 justify-between p-4 sticky top-0 bg-scroll' style={{background: 'rgb(133, 4, 4)'}}>
        <div className='flex gap-3'>
            <div className='w-8 h-8 bg-[black] rounded-full flex justify-center items-center opacity-90 cursor-pointer'><GoChevronLeft className='text-[white]' size={20}/></div>
            <div className='w-8 h-8 bg-[black] rounded-full flex justify-center items-center opacity-90 cursor-pointer'><GoChevronRight className='text-[white]' size={20}/></div>
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