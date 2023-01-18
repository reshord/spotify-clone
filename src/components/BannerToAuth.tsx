import '../styles/BannerToAuth.css'

const BannerToAuth = () => {

    const handleClick = () => {
        const clientId = '4a4a31b6c9084d13b5499f9e8e2a2f45'
        const redirectUrl = 'http://localhost:3000/'
        const apiUrl = 'https://accounts.spotify.com/authorize'

        window.location.href = `${apiUrl}?client_id=${clientId}&redirect_uri=${redirectUrl}&response_type=token&show_daialog=true`
        
    }
    
    return ( 
        <div className="authBanner">
            <div className="blockInfo">
                <span className='infoTitle'>ПРЕДВАРИТЕЛЬНЫЙ ПРОСМОТР SPOTIFY</span>
                <span className='authPlease'>Зарегистрируйся, чтобы слушать музыку и подкасты без ограничений. Иногда мы будем показывать рекламу, но ты сможешь пользоваться сервисом бесплатно!</span>
            </div>
                <button onClick={handleClick} className='toAuthBtn'>Зарегистрироваться</button>
        </div>
     );
}
 
export default BannerToAuth;