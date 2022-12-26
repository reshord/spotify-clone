const PlaylsitsSection = () => {
    return ( 
        <div className="blockPlaylists">
            <span className='blockPlaylitsTitle'>Плейлисты</span>
                <div className="blockPlaylistsCards">
                    <div className="favouritesTracks">
                        <div className="favouritesTracksBlock">
                            <div className="favouritesTracksInfo">
                                <span className="favouritesTrackAuthor">Ice Cube</span>
                                <span className="favouritesTrackTitle">It Was A Good Day</span>
                            </div>
                        </div>
                        <span className='favouritesTitle'>Любимые треки</span>
                        <span className='countOfFavouritesTracks'>1 любимые треки</span>
                    </div>
                </div>
            </div>
     );
}
 
export default PlaylsitsSection;