import './App.css';
import BannerToAuth from './components/BannerToAuth';
import Content from './components/Content/Content';
import MobileModal from './components/MobileModal';
import Sidebar from './components/Sidebar/Sidebar';
import { useAppSelector } from './rtk/hooks';
import { RootState, store } from './rtk/store';



function App() {

  const {Modals} = useAppSelector<RootState>(store.getState)
  
  return (
    <>
        <div className="App">
          <Sidebar />
          <Content />
        </div>

        <BannerToAuth />
        {Modals.mobileModal && (
          <MobileModal />
        )}
    </>
  );
}

export default App;
