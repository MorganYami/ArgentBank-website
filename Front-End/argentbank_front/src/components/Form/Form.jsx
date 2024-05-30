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
  const addErrorMsg = (msg) => {
    let formulaire = document.getElementsByTagName('form')[0];
    let pError = document.getElementsByClassName('error')[0];
    if (pError === undefined) {
      pError = document.createElement('p')
      pError.classList.add('error')
      pError.textContent = msg
      formulaire.appendChild(pError)
      console.log(msg);
    }
    else {
      pError.textContent = msg
      console.log(msg);
    }
  }

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
        const errorMsg = "No Server Response: try again later";
        addErrorMsg(errorMsg);
      } else if (error.response?.status === 400) {
        const errorMsg = "Wrong Email or Password";
        addErrorMsg(errorMsg);
      } else {
        const errorMsg = "Login Failed: something went wrong";
        addErrorMsg(errorMsg);
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className='input-wrapper'>
          <label htmlFor='password'>Password</label>
          <input type='password' id='password' autoComplete="off" required
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