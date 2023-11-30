import React, { useEffect } from 'react'
import data from '../data/music_data/playlists.json'
import { useLibraries } from '../data/stores/store';
import { useStore } from 'zustand';
import Navbar from './navbar';

export default function Home() {

  const set_playlist = useLibraries((state) => state.set_playlist)

  useEffect(() => {
    set_playlist(-1)
  })

  return (
    <div>
        <Navbar color='none' search={false}/>
    </div>
  )
}
