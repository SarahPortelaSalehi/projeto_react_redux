import { useState } from 'react'
import React from 'react'
import { Provider } from 'react-redux';
import { store } from './store/store';
import SideBar from './components/sideBar';
import Usuarios from './components/usuarios';

function App() {

  return (
    <Provider store= {store}>
      <div className='App'>
        <SideBar/>
        <Usuarios/>
      </div>
    </Provider>

  );
}

export default App
