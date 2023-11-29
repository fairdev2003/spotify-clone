import React from 'react'
import data from '../data/music_data/playlists.json'
import { useLibraries } from '../data/stores/store';
import { useStore } from 'zustand';

export default function Home() {

  const set_menu = useLibraries((state) => state.menu)

  return (
    <div id='back' style={{background: 'linear-gradient(0deg, #181717 50%, rgb(228, 24, 24) 100%)'}} className='w-full h-full rounded-xl flex justify-center'>
        
    </div>
  )
}
