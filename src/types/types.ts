export interface ISongInfo {
    number: number
    img: string
    title: string
    albumName: string
    dateUpdate: string
    songTime: string
    author: string
    index?: number
    className?: string
    setButtonNumber?: (num: number) => void
    buttonNumber?: number
}

export interface IPlaylist {
    id: number
    img: string
    title: string
    description: string
    songs?: ISongInfo[]
}

export interface IAllPlaylists {

}