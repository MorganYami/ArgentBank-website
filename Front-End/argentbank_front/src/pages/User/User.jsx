
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import instance from "../../store/axios";
import {
  updateProfile,
} from "../../store/reducer";
import { Navigate } from "react-router-dom";
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Compte from '../../components/Compte/Compte'
import Information from '../../components/Information/Information'


function User() {

  const dispatch = useDispatch();
  const accessToken = useSelector(store => store.user);
  console.log("token 1: ",accessToken);
  // get the profile :
  useEffect(() => {
  console.log("token 2: ",accessToken);
  if (!accessToken) {
    console.log("pas de token valide!")
    return Navigate('/SignIn');
  }

    const getProfile = async () => {
      const response = await instance.post('/user/profile', {});
      const data = response?.data?.body;
      console.log(data);
      console.log(response);

      dispatch(
        updateProfile({
          ...data,
        })
      );
    };
    getProfile();
  }, [accessToken, dispatch]);



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