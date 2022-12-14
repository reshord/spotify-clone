export interface ISong {
    description: string
    id: string

}

interface IArtist {
    external_urls: {
        spotify: string
        href: string
        id: string
        name: string
        type: string
        uri: string
    }
}

interface IImage {
    height: number
    url: string
    width: number
}

export interface ISongInfo {
    number: number
    // img: string
    // title: string
    // albumName: string
    // dateUpdate: string
    // songTime: string
    author: string
    index?: number
    // className?: string
    setButtonNumber?: (num: number) => void
    buttonNumber?: number
    img: string
    songNumber: number
    title: string
    albumName: string
    // song?: string
    // added_at?: string
    // added_by?: {
    //     external_urls: {
    //         spotify: string
    //     }
    //     href: string
    //     id: string
    //     type: string
    //     uri: string
    // }
    // is_local?: boolean
    // primary_color?: null
    // track: {
    //     album: {
    //         album_type?: string
    //         artists: IArtist[]
    //         available_markets?: string[]
    //         external_urls?: {
    //             spotify: string
    //         }
    //         href?: string
    //         id: string
    //         images: IImage[]
    //         name: string
    //         release_date?: string
    //         release_date_precision?: string
    //         total_tracks?: 23
    //         type?: string
    //         uri?: string
    //     }
    //     artists: IArtist[]
    //     available_markets?: string[]
    //     disc_number?: number
    //     duration_ms?: number 
    //     episode?: boolean
    //     explicit?: boolean
    //     external_ids?: {
    //         isrc: string
    //     }
    //     external_urls?: {
    //         spotify: string
    //     }
    //     href?: string
    //     id: string
    //     is_local?: boolean
    //     name: string
    //     popularity?: number
    //     preview_url?: string
    //     track?: boolean
    //     track_number?: number
    //     type?: string
    //     uri?: string
    // }
    // video_thumbnail?: {
    //     url: null
    // }

}

export interface IPlaylist {
    id: string
    img: string
    title: string
    description: string
    // type: string
    songs?: ISongInfo[]
}

export interface IAllPlaylists {

}