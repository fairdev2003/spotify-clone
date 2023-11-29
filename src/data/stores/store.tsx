import { create } from 'zustand'

// types

type Store = {
}

type LibraryFunctions = {
    
    set_menu: (menu: string) => void
    set_playlist: (index: number) => void
}

type LibraryData = {
    selected_playlist: number
    menu: string
}

// functions

export const useLibraries = create<LibraryData & LibraryFunctions>((set) => ({
    selected_playlist : 1,
    menu: "Dom",
    set_playlist: async ( index ) => {
        set(() => ({selected_playlist : index}))
    },
    set_menu : async ( menu ) => {
        set(() => ({ menu : menu}));
        
    }
}))