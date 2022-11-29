import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { StateProvider } from './utils/StateProvider';
import reducer, { inititalState } from './utils/reduces';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import BannerToAuth from './components/BannerToAuth';
import PageNotFound from './components/PageNotFound';
import { Provider } from 'react-redux';
import { store } from './rtk/store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>

    <StateProvider initialState={inititalState} reducer={reducer}>
    <Provider store={store}>
        <BrowserRouter>    
          <Routes>
              <Route path='/' element={<App />}/>
              <Route path='*' element={<PageNotFound />}/>
          </Routes>
      </BrowserRouter>
    </Provider>


    </StateProvider>

  </React.StrictMode>
);
