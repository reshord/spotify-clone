export interface ISong {
    description: string
    id: string
}

export interface ISongInfo {
    number: number
    author?: string
    index?: number
    id?: string
    setButtonNumber?: (num: number) => void
    buttonNumber?: number
    description?: string | undefined
    img?: string
    songNumber?: number
    title?: string | undefined
    albumName?: string
    isFavourite?: boolean
    songAuthorId: string
    songUrl: string
}

export interface IPlaylist {
    id: string
    img: string
    title: string
    description: string
    songs?: ISongInfo[]
}

export interface IShowList {
    id?: string
    description?: string
    title?: string
    author?: string
    image?: string
    items?: any[] | null,
    background?: string
}

export interface ISearchedTrack {
    songs?: ISongInfo[] | undefined
    name: string | undefined
    description: string
    img: string | undefined
    id: string
    author: string,
    albumName: string,
    songAuthorId: string
    songUrl: string
    index: number
    setButtonNumber?: (num: number) => void
    buttonNumber?: number
    number: number
}
export interface ISearchedAlbums {
    image: string,
    name: string,
    author: string
    id: string
}
export interface ISearchedPlaylists {
    image: string,
    name: string,
    id: string,
    description: string,
    songsList: ISongInfo[] | undefined
}
export interface ISearchedArtists {
    image: string,
    name: string,
    id: string
    type: string
}

export interface ISearchedArtist {
    image: string
    id: string
    name: string
}

export interface IRelatedArtist {
    authorId: string
    image: string
    name: string
}
