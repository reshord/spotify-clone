import {AiOutlineArrowLeft} from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { useAppSelector } from "../../rtk/hooks/RTKHook"
import { RootState, store } from "../../rtk/store"
import '../../styles/ProfilePage/ProfilePage.css'
import HeaderContent from '../Content/HeaderContent/HeaderContent'
import Sidebar from '../Sidebar/Sidebar'

const ProfilePage = () => {

    const {auth} = useAppSelector<RootState>(store.getState)


    return (
         <div className="profilePage">
            <Sidebar />
            <div className="profileContent">
                <HeaderContent />
                <Link to={'/'} className='toBackArrow'>
                    <AiOutlineArrowLeft style={{fill: 'white', fontSize: 25, margin: '15px 0px 25px 0px'}}/>
                </Link>
                <div className="userProfile">
                    <img src={`${auth.profile?.images && auth.profile?.images[0].url}`} alt="" />

                    <div className="blockAboutProfile">
                        <span className='profileTitle'>ПРОФИЛЬ</span>
                        <span className='userName'>{auth.profile && auth.profile.display_name}</span>
                    </div>
                </div>
            </div>
        </div>
    )  
}

export default ProfilePage

