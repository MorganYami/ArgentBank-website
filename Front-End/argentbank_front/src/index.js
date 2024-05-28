import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Accueil from './pages/Accueil/Accueil';
import Connexion from './pages/Connexion/Connexion';
import User from './pages/User/User';
import { Provider } from 'react-redux';
import './main.scss';
import { store } from './store/store';
// import { AuthProvider } from "./store/AuthProvider";

const container = document.getElementById('root')
const root = createRoot(container)


root.render(
  <Provider store={store}>
    <React.StrictMode>
      {/* <AuthProvider> */}
        <Router>
          <Routes>
            <Route path='/' element={<Accueil />} />
            <Route path='/Login' element={<Connexion />} />
            <Route path='profile/*' element={<User />} />
            <Route path='/*' element={<Connexion />} />
          </Routes>
        </Router>
      {/* </AuthProvider> */}
    </React.StrictMode>
  </Provider>
)
