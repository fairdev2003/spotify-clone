import { create } from 'zustand'

// types

type Store = {
}

type Library = {
    selected_playlist: number;
    main_section: string,
    set_main_theme() : void
}

// functions

export const useSchools = create<Store>((set) => ({
    school_error: false,
    error_message: '',
    loading_schools: false,
    fetch_schools : async () => {
        set(() => ({ loading_schools: true }));
        
    }
}))

export const useLibraries = create<Library>((set) => ({
    selected_playlist : 1,
    main_section: "home",
    set_main_theme : async (  ) => {
        set(() => ({ main_section: "chujec"}));
        
    }
}))