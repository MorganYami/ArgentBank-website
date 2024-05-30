import { useState } from "react";
import { useDispatch } from "react-redux";
import { saveToken } from "../../store/reducer";
import { useNavigate } from "react-router-dom";
import { authenticate } from "../../service/api";


function Form() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault()
    try {
      const response = await authenticate(email, password);
      dispatch(saveToken(response.token))
      setEmail("");
      setPassword("");
      navigate('/User');
    } catch (error) {
      if (!error.response) {
        console.log("No Server Response");
      } else if (error.response?.status === 400) {
        console.log("Wrong Email or Password");
      } else {
        console.log("Login Failed");
      }
    }
  }


  return (

    <section>
      <i className='fa fa-user-circle fa-4x sign-in-icon' />
      <h1> Sign In </h1>
      <form>
        <div className='input-wrapper'>
          <label htmlFor='email'>Email</label>
          <input type='text' list='usernames' id='email' autoComplete="off" required
            // value={formdata.email}
            // onChange={handleChange} 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className='input-wrapper'>
          <label htmlFor='password'>Password</label>
          <input type='password' id='password' autoComplete="off" required
            // value={formdata.password}
            // onChange={handleChange} 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
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