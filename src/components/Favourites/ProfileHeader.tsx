import React from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import {useLocation, useNavigate } from "react-router-dom";
import { useAppSelector } from "../../rtk/hooks/RTKHook";
import { RootState, store } from "../../rtk/store";

interface IProps {
    currSection: number
    setCurrSection: (index: number) => void
    setMobileSection: (index: number) => void
    setProfileModal: (profileModal: boolean) => void
    profileModal: boolean
    mobileSection: number

}

const ProfileHeader: React.FC<IProps> = (
    {currSection, setCurrSection, setProfileModal, profileModal, mobileSection, setMobileSection}
) => {

    const sections = ['Плейлисты', 'Подкасты', 'Исполнители']
    const {auth} = useAppSelector<RootState>(store.getState)

    const location = useLocation()
    const navigate = useNavigate()

    
    const goBack = () => {
        navigate(-1)
    }

    const goAhead = () => {
        navigate(1)
    }

    return ( 
        <div className="favouriteHeaderContent">
                    <div className="favoriteHeaderBlockMobile">  
                        <div className="favoriteHeaderMobileInfo">
                            <img className="favoriteHeaderAuthImage" src={`${auth.profile && auth.profile.images && auth.profile?.images[0].url}`} alt="" />
                            <div className="favoriteHeaderTitle">Моя медиатека</div>
                        </div>
                        <div style={{overflow: 'scroll'}}>
                            <div className="mobileSections">
                                {sections.map((el, index) => (
                                    <div key={index}
                                        className={`${mobileSection === index ? 'mobileSection' : 'defaultMobileSection'}`}
                                        onClick={() => setMobileSection(index)}
                                        >
                                            {el}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className='allSections'>
                    <MdKeyboardArrowLeft onClick={goBack} style={{background: `${location.pathname === '/search' ? 'rgb(18, 18, 18)' : ''}`, fontSize: 45, fill: 'white'}}/>
                    <MdKeyboardArrowRight onClick={goAhead} style={{background: `${location.pathname === '/search' ? 'rgb(18, 18, 18)' : ''}`, fontSize: 45, fill: 'white'}}/>
                            {sections.map((el, index) => (
                                <div key={index}
                                    className={`${currSection === index ? 'currentSection' : 'section'}`}
                                    onClick={() => setCurrSection(index)}
                                >
                                {el}
                                </div>
                            ))}
                        </div>
                        {auth.token && (
                            <div className="authProfile" onClick={() => setProfileModal(!profileModal)} style={{background: `${profileModal ? 'grey' : ''}`, }}>
                                {auth.profile?.images?.length && auth.profile.images[0] ? (
                                    <img className='profileImage' src={auth.profile.images[0].url} alt="" />
                                ) 
                                : (
                                    <div className='blockWithoutProfileImage'>
                                        <svg style={{fill: 'white'}} role="img" height="16" width="16" aria-hidden="true" viewBox="0 0 16 16" data-encore-id="icon" className="Svg-sc-ytk21e-0 uPxdw"><path d="M6.233.371a4.388 4.388 0 015.002 1.052c.421.459.713.992.904 1.554.143.421.263 1.173.22 1.894-.078 1.322-.638 2.408-1.399 3.316l-.127.152a.75.75 0 00.201 1.13l2.209 1.275a4.75 4.75 0 012.375 4.114V16H.382v-1.143a4.75 4.75 0 012.375-4.113l2.209-1.275a.75.75 0 00.201-1.13l-.126-.152c-.761-.908-1.322-1.994-1.4-3.316-.043-.721.077-1.473.22-1.894a4.346 4.346 0 01.904-1.554c.411-.448.91-.807 1.468-1.052zM8 1.5a2.888 2.888 0 00-2.13.937 2.85 2.85 0 00-.588 1.022c-.077.226-.175.783-.143 1.323.054.921.44 1.712 1.051 2.442l.002.001.127.153a2.25 2.25 0 01-.603 3.39l-2.209 1.275A3.25 3.25 0 001.902 14.5h12.196a3.25 3.25 0 00-1.605-2.457l-2.209-1.275a2.25 2.25 0 01-.603-3.39l.127-.153.002-.001c.612-.73.997-1.52 1.052-2.442.032-.54-.067-1.097-.144-1.323a2.85 2.85 0 00-.588-1.022A2.888 2.888 0 008 1.5z"></path></svg>
                                    </div>
                                )}
                                <span className='profileName' style={{color: 'white'}}>{auth.profile?.display_name}</span>
                                <svg style={{fill: 'white'}} role="img" height="16" width="16" aria-hidden="true" className="Svg-sc-ytk21e-0 uPxdw eAXFT6yvz37fvS1lmt6k" viewBox="0 0 16 16" data-encore-id="icon"><path d="M14 6l-6 6-6-6h12z"></path></svg>
                            </div>
                        )}
                    </div>
     );
}
 
export default ProfileHeader;