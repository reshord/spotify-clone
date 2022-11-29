export interface ISongInfo {
    number: number
    img: string
    title: string
    albumName: string
    dateUpdate: string
    songTime: string
}

export interface IPlaylist {
    img: string
    title: string
    description: string
    songs?: ISongInfo[]
}