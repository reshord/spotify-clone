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
    author: string
    index?: number
    id: string
    setButtonNumber?: (num: number) => void
    buttonNumber?: number
    img: string
    songNumber: number
    title: string
    albumName: string
    isFavourite: boolean
}

export interface IPlaylist {
    id: string
    img: string
    title: string
    description: string
    // type: string
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
