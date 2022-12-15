import '../../styles/Auth/LoginPage.css'
import React, {useEffect} from 'react'


const LoginPage = () => {
    

    // const [{ token }, dispatch] = useStateProvider()


    return ( 
        <div className="loginPage">
            <img className="loginImage" src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Black.png" alt="" />
            <button className="loginBtn">Authorization</button>
        </div>
     );
}
 
export default LoginPage;