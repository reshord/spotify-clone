export const addSongsToPlaylist = (items: any) => {
    return items.map((song: any) => {
        return {
            title: song.track ? song.track.name : 'cannot found',
            id: song.track ? song.track.id : 'cannot found',
            img: song.track ? song.track.album.images[2].url : 'cannot found',
            albumName: song.track ? song.track.album.name : 'cannot found',
            author: song.track ? song.track.artists[0].name : 'cannot found',
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
export const getNewSearchResultsAlbums = (items: any) => {
    return items.map((album: any) => {
        return {
            image: album.images[1].url,
            name: album.name,
            id: album.id,
            author: album.artists[0].name,
        }
     })
}
export const getNewSearchResultsArtists = (items: any) => {
    return items.map((artist: any) => {
        return {
            image: artist.images[1],
            name: artist.name,
            id: artist.id,
        }
     })
}
export const getNewSearchResultsPlaylists = (items: any) => {
    return items.map((playlist: any) => {
        return {
            image: playlist.images[0].url,
            name: playlist.name,
            id: playlist.id,
            description: playlist.description,
        }
     })
}
export const getNewSearchResultsTracks = (items: any) => {
    return items.map((track: any) => {
        return {
            name: track.name,
            id: track.id,
            albumName: track.album.name,
            img: track.album.images[1].url,
            author: track.artists[0].name
        }
     })
}