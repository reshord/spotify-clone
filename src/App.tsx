import { useEffect } from 'react';
import './App.css';
import BannerToAuth from './components/BannerToAuth';
import Content from './components/Content/Content';
import MobileModal from './components/MobileModal';
import Sidebar from './components/Sidebar/Sidebar';
import { RootState, store } from './rtk/store';
import { useStateProvider } from './utils/StateProvider'
import { useAppDispatch, useAppSelector } from './rtk/hooks/RTKHook'
import { setToken } from './rtk/slices/Auth'
import LoginPage from './components/Auth/LoginPage';
import MobileFooter from './components/Footer/MobileFooter';


function App() {

  const {Modals, auth} = useAppSelector<RootState>(store.getState)

  const dispatch = useAppDispatch()

  useEffect(() => {
      const hash = window.location.hash
      if(hash) {
          const token = hash.substring(1).split('&')[0].split('=')[1]
          dispatch(setToken(token))
          window.localStorage.setItem('token', token)
      }
    }, [auth.token]);

  
  return (
    <>
        {auth.token ? (
          <>
              <div className="App">
                <Sidebar />
                <Content />
              </div>

              <BannerToAuth />
              {auth.token && (
                <MobileFooter />
              )}
              {Modals.mobileModal && (
                <MobileModal />
              )}
          </>
        ) : <LoginPage />}
    </>
  );
}

export default App;
