
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import {
  updateProfile,
} from "../../store/reducer";
import { Navigate } from "react-router-dom";
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Compte from '../../components/Compte/Compte'
import Information from '../../components/Information/Information'
import { getUserProfile } from "../../service/api";


function User() {

  const dispatch = useDispatch();
  const accessToken = useSelector(store => store.user);
  // get the profile :
  useEffect(() => {
  if (!accessToken) {
    console.log("No token!")
    return Navigate('/SignIn');
  }
  try  {
    const getProfile = async () => {
      const response = await getUserProfile(accessToken);
      dispatch(
        updateProfile({
          ...response,
        })
      );
    };
    getProfile();
  } catch(error){
    if (error.response?.status === 400) {
      console.log("Token Invalid");
      return Navigate('/SignIn');
    }
    else {
      console.log("Server Error");
      return Navigate('/SignIn');
    }
    }
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