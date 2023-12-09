import { create } from 'zustand'

// types

interface Store {

}

type LibraryFunctions = {
    
    set_menu: (menu: string) => void
    set_playlist: (index: number) => void
    set_all_playlists: (array: Object[]) => void
    set_current_playlist: (array: Object[]) => void
    set_track: (track: number) => void
    set_playing: (event: boolean) => void
    set_music: (event: string) => void
    set_playlist_id: (id: string) => void
    
}

type LibraryData = {
    selected_playlist: any
    menu: string
    all_playlists : any
    current_playlist : any
    track: number
    playing: boolean
    music: string
    playlist_id: string

}

// functions

export const useLibraries = create<LibraryData & LibraryFunctions>((set) => ({
    selected_playlist : [],
    all_playlists : [],
    current_playlist : [],
    menu: "Dom",
    track: 0,
    music: "",
    playing: false,
    playlist_id: "",
    set_playlist: async ( index ) => {
        set(() => ({selected_playlist : index}))
    },
    set_menu : async ( menu ) => {
        set(() => ({ menu : menu}));
    },
    set_all_playlists : async ( playlists ) => {
        set(() => ({ all_playlists : playlists}));
    },
    set_current_playlist : async ( playlist ) => {
        set(() => ({ current_playlist : playlist}));
    },
    set_track : async ( track ) => {
        set(() => ({ track : track}));
    },
    set_playing : async ( event ) => {
        set(() => ({ playing : event}));
    },
    set_music : async ( id ) => {
        set(() => ({ music : id}));
    },
    set_playlist_id : async ( id ) => {
        set(() => ({ playlist_id : id}));
    }
    
}))

