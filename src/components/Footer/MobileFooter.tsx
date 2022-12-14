import {RiHome4Line} from 'react-icons/ri'
import {BiSearch} from 'react-icons/bi'
import {Link} from 'react-router-dom'
import '../../styles/Footer/MobileFooter.css'

const MobileFooter = () => {
    return ( 
        <div className="mobileFooter">
            <Link to={'/'}>
                <div className='toHomeBtn'>
                    <RiHome4Line />
                    <span>Главная</span>
                </div>
            </Link>
            <Link to={'/search'}>
                <div className='toSearchBtn'>
                    <BiSearch />
                    <span>Поиск</span>
                </div>
            </Link>
            <Link to={'/collection/library'}>
                <div className='toMediatekaBtn'>
                    <svg role="img" height="24" width="24" aria-hidden="true" className="Svg-sc-ytk21e-0 uPxdw collection-icon" viewBox="0 0 24 24"><path d="M14.5 2.134a1 1 0 011 0l6 3.464a1 1 0 01.5.866V21a1 1 0 01-1 1h-6a1 1 0 01-1-1V3a1 1 0 01.5-.866zM16 4.732V20h4V7.041l-4-2.309zM3 22a1 1 0 01-1-1V3a1 1 0 012 0v18a1 1 0 01-1 1zm6 0a1 1 0 01-1-1V3a1 1 0 012 0v18a1 1 0 01-1 1z"></path></svg>
                    <div>Моя медиатека</div>
                </div>
            </Link>
            
        </div>
     );
}
 
export default MobileFooter;