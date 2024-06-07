import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Routes, } from "react-router-dom";

import Accueil from './pages/Accueil/Accueil';
import SignIn from './pages/SignIn/SignIn';
import User from './pages/User/User';
import Error from './pages/Error/Error';

import store from './store/store';

import './main.scss';
import Guard from './components/Guard/guard';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<Accueil/>}/>
        <Route path='/SignIn' element={<SignIn/>}/>
        <Route path='/' element={<Guard/>}>
        <Route path='User/*' element={<User/>}/>
        </Route>
        <Route path='Error' element={<Error/>}/>
      </Routes>
     </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
