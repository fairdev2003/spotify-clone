import React, { useRef, useState, useEffect } from 'react'
import './player.css'

import { PiQueueFill, PiShuffleAngularBold } from "react-icons/pi";
import { MdSkipPrevious, MdSkipNext, MdOutlineDevices } from "react-icons/md";
import { FaPlay } from "react-icons/fa";
import { FaPause } from 'react-icons/fa6';
import { RiRepeat2Line } from "react-icons/ri";
import { AiOutlinePlaySquare } from "react-icons/ai";
import { ImVolumeMute } from "react-icons/im";
import { RiRepeatOneFill } from "react-icons/ri";
import { useLibraries } from '../data/stores/store';


const Player = () => {
    const musicRef: any = useRef()
    const inputRef: any = useRef()
    const volumeRef: any = useRef()

    const [currentTime, setCurrentTime] = useState('0:00')
    const [duration, setDuration] = useState('0:00')
    const [playing, setplaying] = useState(false)
    const [repeattype, setRepeatType] = useState(1)
    const [music_data, set_music_data]: any = useState([])

    const current_playlist = useLibraries((state) => state.current_playlist)
    const setTrack = useLibraries((state) => state.set_track)
    const track = useLibraries((state) => state.track)
    const event_handler = useLibraries((state) => state.playing)
    const set_music = useLibraries((state) => state.set_music)

    useEffect(() => {

        if (musicRef.current) {
            musicRef.current.play()
        }
        
    }, [track])
    useEffect(() => {
        if (musicRef.current) {
            musicRef.current.play()
        }
    }, [current_playlist])

    useEffect(() => {
        if (event_handler == true) {
            if (musicRef.current) {
                musicRef.current.play()
                set_music(current_playlist.playlist_songs[track]._id)            }
        } else {
            if (musicRef.current) {
                musicRef.current.pause()
                set_music(current_playlist.playlist_songs[track]._id)
            }
        }
    }, [event_handler])

    const onPlaying = ( ref: any ) => {
        const d = ref.current.duration
        const currentTime = ref.current.currentTime

        inputRef.current.value = (currentTime / d) * 100

        volumeRef.current.value = musicRef.current.volume  * 100


        if (Math.floor(d % 60) < 10) {
            setDuration(`${Math.floor(d / 60)}:0${Math.floor(d % 60)}`)
        } else {
            setDuration(`${Math.floor(d / 60)}:${Math.floor(d % 60)}`)
        }
        

        if (currentTime <= 60) {
            if (currentTime < 10) {
                setCurrentTime(`0:0${Math.floor(currentTime)}`)
            } else {
                setCurrentTime(`0:${Math.floor(currentTime)}`)
            }
            
        } else {
            const minutes = Math.floor(Math.floor(currentTime) / 60)
            const seconds = Math.floor(currentTime) % 60

            if (seconds < 10) {
                setCurrentTime(`${minutes}:0${Math.floor(seconds)}`)
            } else {
                setCurrentTime(`${minutes}:${Math.floor(seconds)}`)
            }

            
        }

    }

    const CalculateDuration = ( duration: number) => {

        if (Math.floor(duration % 60) < 10) {
            setDuration(`${Math.floor(duration / 60)}:0${Math.floor(duration % 60)}`)
        } else {
            setDuration(`${Math.floor(duration / 60)}:${Math.floor(duration % 60)}`)
        }
    }

    const prevSong = () => {
        
        if (track - 1 === -1) {
            setTrack(current_playlist.playlist_songs.length - 1)
        } else {
            setTrack(track - 1);
        }
        musicRef.current.load();

        musicRef.current.addEventListener('canplaythrough', () => {
            musicRef.current.currentTime = 0;
            musicRef.current.play();

            if (track - 1 === -1) {
                set_music(current_playlist.playlist_songs[current_playlist.playlist_songs.length - 1]._id)
            } else {
                set_music(current_playlist.playlist_songs[track - 1]._id)
            }

            

            
            musicRef.current.volume = 0.2
            setplaying(true)
            setRepeatType(2)
            CalculateDuration(musicRef.current.duration);
        }, { once: true });
        console.log(musicRef.current.volume)
        
    };

    const nextSong = () => {
        if (track + 1 === current_playlist.playlist_songs.length) {
            setTrack(0)
        } else {
            setTrack(track + 1);
        }
        musicRef.current.load();
        musicRef.current.addEventListener('canplaythrough', () => {
            musicRef.current.currentTime = 0;
            musicRef.current.play();

            if (track + 1 === current_playlist.playlist_songs.length) {
                set_music(current_playlist.playlist_songs[0]._id)
            } else {
                set_music(current_playlist.playlist_songs[track + 1]._id)
            }
            musicRef.current.volume = 0.2
            setplaying(true)
            setRepeatType(2)
            CalculateDuration(musicRef.current.duration);
    }, { once: true });
    console.log(musicRef.current.volume)
    };

    const PlayNext = () => {
        if (repeattype === 3) {
            musicRef.current.currentTime = 0;
            musicRef.current.play();
            set_music(current_playlist.playlist_songs[track]._id)
        } else {
            if (track + 1 === current_playlist.playlist_songs.length) {
                setTrack(0)
            } else {
                setTrack(track + 1);
            }
            musicRef.current.load();
            musicRef.current.addEventListener('canplaythrough', () => {
                musicRef.current.currentTime = 0;
                musicRef.current.play();
                if (track + 1 === current_playlist.playlist_songs.length) {
                    set_music(current_playlist.playlist_songs[0]._id)
                } else {
                    set_music(current_playlist.playlist_songs[track + 1]._id)
                }
                musicRef.current.volume = 0.2
                setplaying(true)
                CalculateDuration(musicRef.current.duration);
            }, { once: true });
            console.log(musicRef.current.volume)
        }
        
    }

    const HandleTypeChange = () => {
        if (repeattype === 1) {
            return (<RiRepeat2Line onClick={() => {
                setRepeatType(2)
            }} className='text-[white]' size={22}/>)
        } if (repeattype === 2) {
            return (<RiRepeat2Line onClick={() => {
                setRepeatType(3)
            }} className='text-green' size={22}/>)
        } else {
            return (<RiRepeatOneFill onClick={() => {
                setRepeatType(1)
            }} className='text-green' size={22}/>)
        }
    }
    

  return (
    <div className=''>
        {current_playlist.playlist_songs && current_playlist != undefined ? <div className='flex justify-between items-center pb-[23px]'>
        <audio src={current_playlist.playlist_songs[track].song_link} ref={musicRef} onEnded={PlayNext} onTimeUpdate={() => {onPlaying(musicRef)}}></audio>
        <div className='flex items-center ml-5 w-[360px]'>
            <img className='w-[60px] h-[60px] flex items-center' src={current_playlist.playlist_songs[track].image_link}></img>
            <div className='flex flex-col'>
                <p className={`font-[Poppins] text-[white] font-[600] text-[15px] w-[300px] truncate ml-2`}>{current_playlist.playlist_songs[track].song_name}</p>
                <p className='font-[Poppins] text-[white] font-[400] text-[12px] w-[300px] ml-2'>{`${music_data ? current_playlist.playlist_songs[track].song_author[0].nickname: null}${current_playlist.playlist_songs[track].contributors ? current_playlist.playlist_songs[track].contributors.map((item) => {
                    return (", " + item.nickname)
                }): null}`}</p>
            </div>
        </div>

        <div className='flex flex-col'>
            <div className='flex justify-center items-center w-[490px] gap-x-3'>
                <PiShuffleAngularBold className='text-[white]' size={22}/>
                <MdSkipPrevious className='text-[white]' size={22} onClick={prevSong}/>
                <div onClick={() => {
                    if (playing) {
                        musicRef.current.pause()
                        setplaying(false)
                        musicRef.current.volume = 0.2
                    } else {
                        musicRef.current.play()
                        setplaying(true)
                        musicRef.current.volume = 0.2
                    }
                }} className='w-10 h-10 rounded-full bg-[white] flex justify-center items-center'>{playing === false ? <FaPlay className='w-4 h-4 ml-1'/> : <FaPause className='w-5 h-5'/>}</div>
                <MdSkipNext className='text-[white]' size={22} onClick={nextSong}/>
                {HandleTypeChange()}
                <RiRepeatOneFill/>
            </div>
            <div className='flex items-center h-[30px] gap-2'>
                <p className='text-[white] text-sm'>{currentTime}</p>
                <input id='player' ref={inputRef} type='range' className='w-full flex justify-center items-center text-green' onChange={(input) => {
                    musicRef.current.currentTime = (inputRef.current.value / 100) * musicRef.current.duration
                }}></input>
                <p className='text-[white] text-sm'>{duration ? duration : "0:00"}</p>
            </div>
        </div>
        <div className='w-[360px] flex gap-2'>
                <AiOutlinePlaySquare className='text-white w-6 h-6'/>
                <PiQueueFill className='text-white w-6 h-6'/>
                <MdOutlineDevices className='text-white w-6 h-6'/>
                <ImVolumeMute className='text-white w-6 h-6'/>
                <input ref={volumeRef} onChange={() => {
                    musicRef.current.volume = volumeRef.current.value / 100
                    console.log(musicRef.current.volume)
                }} type='range'></input>
            </div>
        </div> : null}
    </div>
  )
}

export default Player;