import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";

import App from './App';
import Accueil from './pages/Accueil/Accueil';
import SignIn from './pages/SignIn/SignIn';
import User from './pages/User/User';
import Error from './pages/Error/Error';

import store from './store/store';

import './main.scss';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Accueil />,
      },
      {
        path: '/SignIn',
        element: <SignIn />,
      },
      {
        path: '/User/*',
        element: <User />
      },
      {
        path: 'Error',
        element: <Error />,
      },
    ]
  },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
     <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
