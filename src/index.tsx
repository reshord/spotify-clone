import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { StateProvider } from './utils/StateProvider';
import reducer, { inititalState } from './utils/reduces';
import SimpleBarReact from 'simplebar-react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>

    <StateProvider initialState={inititalState} reducer={reducer}>

    <BrowserRouter>    
                <Routes>
                  <Route path='/' element={<App />}/>
                </Routes>
    </BrowserRouter>

    </StateProvider>

  </React.StrictMode>
);
