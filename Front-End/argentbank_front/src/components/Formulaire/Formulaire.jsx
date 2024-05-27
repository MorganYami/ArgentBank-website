import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from 'react-router-dom'
import axios from "../../app/axios";
import AuthContext from "../../app/AuthProvider";
import { useDispatch } from "react-redux";
import { logIn } from "../../app/authSlice";

const LOGIN_URL = "/user/login";

function Formulaire () {
  const { setAuth } = useContext(AuthContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [, setSuccess] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    setErrMsg("");
  }, [email, password]);

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    try {
      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({ email, password }),
        {
          headers: {
            "Content-type": "application/json",
          },
          withCredentials: false, 
        }
      );
      console.log(JSON.stringify(response));
      console.log(JSON.stringify(response?.data?.body.token));

      const accessToken = response?.data?.body.token;

      setAuth({ email, password, accessToken });
      setEmail("");
      setPassword("");
      setSuccess(true);

      navigate("/profile");

      dispatch(
        logIn({
          email: email,
          accessToken: accessToken,
        })
      );
    } catch (error) {
      if (!error.response) {
        setErrMsg("No Server Response"); 
      } else if (error.response?.status === 400) {
        setErrMsg("Wrong Email or Password"); 
      } else {
        setErrMsg("Login Failed"); 
      }
    }
  };

  // if (statutReq === 'error') {
  //   form = document.getElementsByTagName('form')[0]
  //   let pError = document.getElementsByClassName('error')[0]
  //   if (pError === undefined) {
  //     pError = document.createElement('p')
  //     pError.classList.add('error')
  //     pError.textContent = 'Invalid username or password'
  //     form.appendChild(pError)
  //   }
  // }

  return (
    <section>
      <i className='fa fa-user-circle fa-4x sign-in-icon' />
      <h1> Sign In </h1>
      <form>
        <div className='input-wrapper'>
          <label htmlFor='email'>Username</label>
          <input type='text' list='usernames' id='email' autoComplete="off" required />
        </div>
        <div className='input-wrapper'>
          <label htmlFor='password'>Password</label>
          <input type='password' id='password' autoComplete="off" required />
        </div>
        <div className='input-remember'>
          <label htmlFor='remember-me'>Remember me</label>
          <input type='checkbox' id='remember-me' />
        </div>
        <button
          className='sign-in-button'
          onClick={connexion}
        > Sign In
        </button>
      </form>
    </section>
  )
}

export default Formulaire