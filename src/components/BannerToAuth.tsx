import '../styles/BannerToAuth.css'

const BannerToAuth = () => {
    return ( 
        <div className="authBanner">
            <div className="blockInfo">
                <span className='infoTitle'>ПРЕДВАРИТЕЛЬНЫЙ ПРОСМОТР SPOTIFY</span>
                <span className='authPlease'>Зарегистрируйся, чтобы слушать музыку и подкасты без ограничений. Иногда мы будем показывать рекламу, но ты сможешь пользоваться сервисом бесплатно!</span>
            </div>
            <button className='toAuthBtn'>Зарегистрироваться</button>
        </div>
     );
}
 
export default BannerToAuth;