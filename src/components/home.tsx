import React, { useEffect } from 'react'
import { useLibraries } from '../data/stores/store';
import Navbar from './navbar';
import LongerCard from '../ui/longer_card';
import popular from '../data/music_data/popular.json'
import Card from '../ui/card';

export default function Home() {

  const set_playlist = useLibraries((state) => state.set_playlist)

  useEffect(() => {
    set_playlist(-1)
  })

  return (
    <div className='overflow-scroll max-h-[810px]'>
      <Navbar color='none' search={false}/>
        <h1 className='font-[Poppins] font-[700] text-2xl text-[white] p-4 pt-0'>Dzień Dobry!</h1>
        <div className='px-4 grid grid-cols-3 gap-3'>
          {popular.last.map((item) => {
            return (
              <LongerCard image={item.image_url} title={item.playlist_name}/>
            )
          })}
        </div>
        <h1 className='font-[Poppins] font-[700] text-2xl text-[white] p-4 pt-5'>Twoje ulubione składanki</h1>
        <div className='flex flex-wrap gap-5 px-5 mt-3'>
          {popular.popular.map((item, index) => {
            return (
              <Card img={item.image_url} playlist_name={item.playlist_name} card_type='album'/>
            )
          })}
        </div>
    </div>
  )
}
