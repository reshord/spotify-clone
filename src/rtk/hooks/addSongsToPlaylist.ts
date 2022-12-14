export const addSongsToPlaylist = (items: any, ) => {
    return items.map((song: any) => {
        return {
            title: song.track.name,
            img: song.track.album.images[2].url,
            albumName: song.track.album.name,
            author: song.track.artists[0].name
        }
     })
}