import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from 'react-router-dom'
import instance from "../../store/axios";
import AuthContext from "../../store/AuthProvider";
import { useDispatch } from "react-redux";
import { logIn } from "../../store/reducer";

const LOGIN_URL = "/user/login";

function Formulaire() {
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
      const response = await instance.post(
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

  return (
    <section>
      <p className={errMsg ? "errmsg" : "offscreen"}>{errMsg}</p>
      <i className='fa fa-user-circle fa-4x sign-in-icon' />
      <h1> Sign In </h1>
      <form onSubmit={handleSubmit}>
        <div className='input-wrapper'>
          <label htmlFor='email'>Email</label>
          <input type='text' list='usernames' id='email' autoComplete="off" required
            value={email}
            onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className='input-wrapper'>
          <label htmlFor='password'>Password</label>
          <input type='password' id='password' autoComplete="off" required
            value={password}
            onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div className='input-remember'>
          <label htmlFor='remember-me'>Remember me</label>
          <input type='checkbox' id='remember-me' />
        </div>
        <button
          className='sign-in-button'
          type="submit">
          Sign In
        </button>
      </form>
    </section>
  )
}

export default Formulaire