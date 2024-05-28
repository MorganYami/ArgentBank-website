import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom"
import { editName, isLogged } from "../../store/reducer";


import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Compte from '../../components/Compte/Compte'
import Information from '../../components/Information/Information'

function User () {
  const user = useSelector(store => store.user)

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [formdata] = useState({
      id: "",
      email:"",
  })

  useEffect(() => {
      // S'il n'y a pas de user.token retourne vers la page SignIn
      if (user.token === null) {
          return navigate('/SignIn');
      } else {
          const handleProfile = async() => {
              try {
                  await fetch('http://localhost:3001/api/v1/user/profile', {
                      method: 'POST',
                      headers: {
                          'Content-Type': 'application/json',
                          'Accept': 'application/json',
                          'Authorization': `Bearer ${user.token}`
                      },
                      body: JSON.stringify(formdata)
                  }).then(response => {
                      if (response.ok) {
                          return response.json()
                      }
                  }).then(data => {
                      dispatch(isLogged(data.body))
                  })
              } catch(error) {
                  console.log(error)
              }
          };

          handleProfile();
      }
  }, [dispatch, navigate, user.token, user.isLogged, formdata])

  const [showEditForm, setShowEditForm] = useState(false);

  const handleShowEditForm = () => {
      setShowEditForm(!showEditForm);
  }

  const handleEditFormSubmit = async (e) => {
      e.preventDefault();
      dispatch(editName(formdata));
      setShowEditForm(false);
  }

  const editModeUser = showEditForm ? "main" : "main user-bg-dark";

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