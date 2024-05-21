import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Accueil from './pages/Accueil/Accueil'
import Connexion from './pages/Connexion/Connexion'
import User from './pages/User/User'
import { Provider } from 'react-redux'
import './main.scss';

const container = document.getElementById('root')
const root = createRoot(container)


root.render(
  <Provider>
    <React.StrictMode>
      <Router>
        <Routes>
          <Route path='/' element={<Accueil />} />
          <Route path='/Login' element={<Connexion />} />
          <Route path='/Profile/*' element={<User />} />
          <Route path='/*' element={<Connexion />} />
        </Routes>
      </Router>
    </React.StrictMode>
  </Provider>
)
