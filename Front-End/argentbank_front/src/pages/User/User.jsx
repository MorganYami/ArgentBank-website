import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Compte from '../../components/Compte/Compte'
import Information from '../../components/Information/Information'
import Connexion from '../Connexion/Connexion'
import { Routes, Route } from 'react-router-dom'
import { useSelector } from 'react-redux'

import React from "react";
import { selectToken } from "../../store/reducer";
import { Navigate } from "react-router-dom";

function User () {
  const isLogged = !!useSelector(selectToken);
  console.log(isLogged);
  if (!isLogged) {
    console.log("ERRTFYGYUHIJK");
    return <Navigate to="/" replace />;
  }
  return (
        <div className='user'>
          <Header />
          <main>
            <Information />
            <Compte titre='Argent Bank Checking (x8349)' montant='$2,082.79' description='Available Balance' />
            <Compte titre='Argent Bank Savings (x6712)' montant='$10,928.42' description='Available Balance' />
            <Compte titre='Argent Bank Credit Card (x8349)' montant='$184.30' description='Current Balance' />
          </main>
          <Footer />
        </div>
  )
}
export default User