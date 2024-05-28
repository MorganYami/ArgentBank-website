import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../store/reducer";
import { useNavigate } from "react-router-dom";

function Form() {
  //mocking temporaire
  const [formdata, setFormdata] = useState({
    email: "tony@stark.com",
    password: "password123",
  });

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleChange = (e) => {
    setFormdata({ ...formdata, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault()

     fetch('http://localhost:3001/api/v1/user/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formdata)
      // Si la réponse est réussie, extraire les données JSON de la réponse.
    }).then(response => {
        if (response.ok) {
          console.log("Connected");
            return response.json()
        }
        else {
          console.log("Error: " ,response);
        }
      // Si les données JSON sont valides, connecter l'utilisateur.
    }).then(data => {
        dispatch(login(data.body))
        navigate('/User');
    })
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