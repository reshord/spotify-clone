export const addSongsToPlaylist = (items: any) => {
    return items.map((song: any) => {
        return {
            title: song.track.name,
            id: song.track.id,
            img: song.track.album.images[2].url,
            albumName: song.track.album.name,
            author: song.track.artists[0].name,
            isFavourite: false
        }
     })
}
export const getNewShowListItems = (items: any) => {
    return items.map((song: any) => {
        return {
            description: song.description,
            title: song.name,
            image: song.images[1].url,
        }
     })
}