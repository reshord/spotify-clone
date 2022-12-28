import '../../styles/Sidebar/Sidebar.css'
import {RiHome4Line} from 'react-icons/ri'
import {BiSearch} from 'react-icons/bi'
import {Link, useLocation} from 'react-router-dom'
import { useAppSelector } from '../../rtk/hooks/RTKHook'
import { RootState, store } from '../../rtk/store'

const Sidebar = () => {

    const {auth} = useAppSelector<RootState>(store.getState)
    const location = useLocation()

    return ( 
        <div className="sidebar">
            <div className="sidebarContentPC">
                <div className='SidebarMenu'>
                    <Link to={'/'}>
                    <img className='logoImg' src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_White.png" alt="spotify" />
                    </Link>
                    <div className='blockMenu'>
                        <ul>
                            <li className='homePage' style={{opacity: `${location.pathname === '/' && 1}`}}>
                                <RiHome4Line />
                                <Link to={'/'}>Главная</Link>
                            </li>
                            <li className='search' style={{opacity: `${location.pathname === '/search' && 1}`}}>
                                <BiSearch />
                                <Link  to={'/search'}>Поиск</Link>
                            </li>   
                            <li className='mediateka' style={{opacity: `${location.pathname === '/collection/playlists' && 1}`}}>
                                <svg role="img" height="24" width="24" aria-hidden="true" className="Svg-sc-ytk21e-0 uPxdw collection-icon" viewBox="0 0 24 24"><path d="M14.5 2.134a1 1 0 011 0l6 3.464a1 1 0 01.5.866V21a1 1 0 01-1 1h-6a1 1 0 01-1-1V3a1 1 0 01.5-.866zM16 4.732V20h4V7.041l-4-2.309zM3 22a1 1 0 01-1-1V3a1 1 0 012 0v18a1 1 0 01-1 1zm6 0a1 1 0 01-1-1V3a1 1 0 012 0v18a1 1 0 01-1 1z"></path></svg>
                                {auth.token ? (
                                    <Link to={'/collection/playlists'}>Моя медиатека</Link>
                                ) : (
                                    <span>Моя медиатека</span>
                                )}
                            </li>
                        </ul>
                    </div>
                    <div className="blockMusic">
                        <ul>
                            <li className='createPlaylist'>
                                <div className="Bwc9jlVb7HWs8JJupnBB"><div className="q3ABXYJT9JZIzXOOtVuO"><svg role="img" height="12" width="12" aria-hidden="true" viewBox="0 0 16 16" data-encore-id="icon" className="Svg-sc-ytk21e-0 uPxdw"><path d="M15.25 8a.75.75 0 01-.75.75H8.75v5.75a.75.75 0 01-1.5 0V8.75H1.5a.75.75 0 010-1.5h5.75V1.5a.75.75 0 011.5 0v5.75h5.75a.75.75 0 01.75.75z"></path></svg></div></div>
                                <span>Создать плейлист</span>
                            </li>
                            <li className='favorites'>
                                <div className="bFQ9NOIn1bDs8tTH0ebQ"><div className="Nd_DeCpszONzyaLe5Wd1"><svg role="img" height="12" width="12" aria-hidden="true" viewBox="0 0 16 16" className="Svg-sc-ytk21e-0 uPxdw"><path d="M15.724 4.22A4.313 4.313 0 0012.192.814a4.269 4.269 0 00-3.622 1.13.837.837 0 01-1.14 0 4.272 4.272 0 00-6.21 5.855l5.916 7.05a1.128 1.128 0 001.727 0l5.916-7.05a4.228 4.228 0 00.945-3.577z"></path></svg></div></div>
                                <span>Любимые треки</span>
                            </li>
                        </ul>
                        <div className="myPlaylistsList">

                        </div>
                    </div>
                </div>
                    
                <div className='sidebarInfo'>
                    <span>Файлы cookie</span>
                    <span>Конфиденциальность</span>
                </div>
            </div>
            <div className="sidebarContentMobile">
                 <ul>
                      <li style={{opacity: 1}}>
                        <Link to={'/'}>
                            <img style={{width: 60}} src="https://i.ibb.co/0s813m2/image.png" alt="" />
                        </Link>
                      </li>
                      <li className='homePage'>
                         <Link to={'/'}>
                            <RiHome4Line style={{fontSize: 30}}/>
                         </Link>
                      </li>
                      <li className='search'>
                         <Link to={'/search'}>
                            <BiSearch style={{fontSize: 30}}/>
                         </Link>
                      </li>   
                      <li className='mediateka'>
                        <Link to={'/collection/playlists'}>
                            <svg role="img" height="30" width="30" aria-hidden="true" className="Svg-sc-ytk21e-0 uPxdw collection-icon" viewBox="0 0 24 24"><path d="M14.5 2.134a1 1 0 011 0l6 3.464a1 1 0 01.5.866V21a1 1 0 01-1 1h-6a1 1 0 01-1-1V3a1 1 0 01.5-.866zM16 4.732V20h4V7.041l-4-2.309zM3 22a1 1 0 01-1-1V3a1 1 0 012 0v18a1 1 0 01-1 1zm6 0a1 1 0 01-1-1V3a1 1 0 012 0v18a1 1 0 01-1 1z"></path></svg>
                        </Link>
                      </li>
                 </ul>
                 <div className="blockMusicMobile">
                        <ul>
                            <li className='createPlaylist'>
                            <div className="Bwc9jlVb7HWs8JJupnBB"><div className="q3ABXYJT9JZIzXOOtVuO"><svg role="img" height="12" width="12" aria-hidden="true" viewBox="0 0 16 16" data-encore-id="icon" className="Svg-sc-ytk21e-0 uPxdw"><path d="M15.25 8a.75.75 0 01-.75.75H8.75v5.75a.75.75 0 01-1.5 0V8.75H1.5a.75.75 0 010-1.5h5.75V1.5a.75.75 0 011.5 0v5.75h5.75a.75.75 0 01.75.75z"></path></svg></div></div>
                            </li>
                            <li className='favorites'>
                                <div className="bFQ9NOIn1bDs8tTH0ebQ"><div className="Nd_DeCpszONzyaLe5Wd1"><svg role="img" height="12" width="12" aria-hidden="true" viewBox="0 0 16 16" className="Svg-sc-ytk21e-0 uPxdw"><path d="M15.724 4.22A4.313 4.313 0 0012.192.814a4.269 4.269 0 00-3.622 1.13.837.837 0 01-1.14 0 4.272 4.272 0 00-6.21 5.855l5.916 7.05a1.128 1.128 0 001.727 0l5.916-7.05a4.228 4.228 0 00.945-3.577z"></path></svg></div></div>
                            </li>
                        </ul>
                    </div>
            </div>
        </div>
     );
}
 
export default Sidebar;