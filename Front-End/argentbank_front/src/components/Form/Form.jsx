import { useState } from "react";
import { useDispatch } from "react-redux";
import {  saveToken } from "../../store/reducer";
import { useNavigate } from "react-router-dom";
// import instance from "../../store/axios";
import { authenticate } from "../../service/api";


function Form() {
  //mocking temp
  const [formdata, setFormdata] = useState({
    email: "tony@stark.com",
    password: "password123",
  });

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleChange = (e) => {
    setFormdata({ ...formdata, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault()
    const response = await authenticate(formdata.email, formdata.password);
    console.log(response)
    dispatch(saveToken(response.token))
    navigate('/User');

    
  }


  return (

    <section>
      <i className='fa fa-user-circle fa-4x sign-in-icon' />
      <h1> Sign In </h1>
      <form>
        <div className='input-wrapper'>
          <label htmlFor='email'>Email</label>
          <input type='text' list='usernames' id='email' autoComplete="off" required
            value={formdata.email}
            onChange={handleChange} />
        </div>
        <div className='input-wrapper'>
          <label htmlFor='password'>Password</label>
          <input type='password' id='password' autoComplete="off" required
            value={formdata.password}
            onChange={handleChange} />
        </div>
        <div className='input-remember'>
          <label htmlFor='remember-me'>Remember me</label>
          <input type='checkbox' id='remember-me' />
        </div>
        <button
          className='sign-in-button'
          type="submit"
          onClick={handleLogin}>
          Sign In
        </button>
      </form>
    </section>
  );
}

export default Form;