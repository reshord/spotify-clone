import '../../../styles/Content/HeaderContent.css'
import {MdKeyboardArrowLeft, MdKeyboardArrowRight} from 'react-icons/md'

const HeaderContent = () => {
    return ( 
        <header className="header">
            <div className='navigation'>
                <MdKeyboardArrowLeft />
                <MdKeyboardArrowRight />
            </div>
            <div className="blockInfoAuth">
                <div className="info">
                    <span>Premium</span>
                    <span>Справка</span>
                    <span>Скачать</span>
                </div>
                <span></span>
                <div className='auth'>
                    <span></span>
                </div>
            </div>
        </header>
     );
}
 
export default HeaderContent;