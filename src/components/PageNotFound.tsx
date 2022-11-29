import { useEffect } from 'react';
import { Link, useLocation, useMatch } from 'react-router-dom';
import '../styles/PageNotFound.css'

const PageNotFound = () => {




    return ( 
        <div className="pageNotFound">
            <div className="notFoundInfo">
                <img src="https://open.spotifycdn.com/cdn/images/error-page-logo.24aca703.svg" alt="" />
                <span className='pageNotFoundTitle'>Страница не найдена</span>
                <span className='cantFound'>Мы не нашли нужную страницу.</span>
                <Link to={'/'} className='notFoundBtn'>Главная</Link>
                <Link to={''} className='reference'>Справка</Link>
            </div>
        </div>
     );
}
 
export default PageNotFound;