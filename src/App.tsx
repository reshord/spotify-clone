import React from 'react';
import './App.css';
import BannerToAuth from './components/BannerToAuth';
import Content from './components/Content/Content';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <>
    <div className="App">

        <Sidebar />
        <Content />

    </div>
    <BannerToAuth />

    </>
  );
}

export default App;
