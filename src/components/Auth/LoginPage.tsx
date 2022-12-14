import '../../styles/Auth/LoginPage.css'
import React, {useEffect} from 'react'


const LoginPage = () => {
    const handleClick = () => {
        const clientId = '4a4a31b6c9084d13b5499f9e8e2a2f45'
        const redirectUrl = 'http://localhost:3000/'
        const apiUrl = 'https://accounts.spotify.com/authorize'

        window.location.href = `${apiUrl}?client_id=${clientId}&redirect_uri=${redirectUrl}&response_type=token&show_daialog=true`
    }

    // const [{ token }, dispatch] = useStateProvider()


    return ( 
        <div className="loginPage">
            <img className="loginImage" src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Black.png" alt="" />
            <button className="loginBtn" onClick={handleClick}>Authorization</button>
        </div>
     );
}
 
export default LoginPage;