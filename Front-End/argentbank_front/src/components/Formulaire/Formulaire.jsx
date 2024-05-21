import { useNavigate } from 'react-router-dom'
import { login } from '../../redux/action'
import store from '../../redux/store'
import { useSelector } from 'react-redux'
import { useCallback, useEffect } from 'react'
import { useRef } from 'react';

function Formulaire () {
  const navigate = useNavigate()
  const statutReq = useSelector(state => state.status);
  let email = useRef(document.getElementById('email'));
  let password = useRef(document.getElementById('password'));
  let rememberMe = useRef(document.getElementById('remember-me'));
  let form = useRef(document.getElementsByTagName('form')[0]);
  let divInputUsername = useRef(document.getElementsByClassName('input-wrapper')[0]);

  const sauvegarderSession = useCallback(() => {
    try {
      email.current = document.getElementById('email')
      password.current = document.getElementById('password')
      if (email.current !== (undefined, null) || password.current !== (undefined, null)) {
        sessionStorage.setItem('email', email.current.value)
        sessionStorage.setItem('password', password.current.value)
        sessionStorage.setItem('rememberMe', rememberMe.current.checked)
      }
    } catch (error) {
      console.warn(error)
    }
  }, []);

  const supprimerSession = useCallback(() => {
    try {
      divInputUsername.current = document.getElementsByClassName('input-wrapper')[0]
      const dataList = document.getElementById('usernames')
      if (dataList !== (undefined, null)) divInputUsername.current.removeChild(dataList)
      sessionStorage.clear()
    } catch (error) {
      console.warn(error)
    }
  }, []);

  const recupererSession = useCallback(() => {
    try {
      email.current = document.getElementById('email')
      password.current = document.getElementById('password')
      rememberMe.current = document.getElementById('remember-me')
      divInputUsername.current = document.getElementsByClassName('input-wrapper')[0]
      if (email.current !== (undefined, null) || password.current !== (undefined, null)) {
        email.current.value = sessionStorage.getItem('email')
        password.current.value = sessionStorage.getItem('password')
        rememberMe.current.checked = sessionStorage.getItem('rememberMe')
        let dataList = document.getElementById('usernames')
        if (dataList === (undefined, null) && email.current.value !== '') {
          dataList = document.createElement('datalist')
          const optionUsername = document.createElement('option')
          optionUsername.value = email.current.value
          dataList.id = 'usernames'
          divInputUsername.current.appendChild(dataList)
          dataList.appendChild(optionUsername)
        }
      }
    } catch (error) {
      console.warn(error)
    }
  }, []);

  useEffect(() => {
    if (statutReq === 'void') {
      recupererSession()
    }
    if (statutReq === 'connecte') {
      rememberMe.current = document.getElementById('remember-me')
      if (rememberMe.current.checked) {
        sauvegarderSession()
      } else {
        supprimerSession()
      }
      navigate('/Profile')
    }
    if (statutReq === 'error') {
      form.current = document.getElementsByTagName('form')[0]
      let pError = document.getElementsByClassName('error')[0]
      if (pError === undefined) {
        pError = document.createElement('p')
        pError.classList.add('error')
        pError.textContent = 'Invalid username or password'
        form.current.appendChild(pError)
      }
    }
  }, [statutReq, recupererSession, sauvegarderSession, supprimerSession, navigate])

  function connexion (event) {
    event.preventDefault()
    email = document.getElementById('email')
    password = document.getElementById('password')
    if (email !== (undefined, null) || password !== (undefined, null)) {
      store.dispatch(login(email.value, password.value))
    }
  }

  

  // function sauvegarderSession () {
  //   try {
  //     email = document.getElementById('email')
  //     password = document.getElementById('password')
  //     if (email !== (undefined, null) || password !== (undefined, null)) {
  //       sessionStorage.setItem('email', email.value)
  //       sessionStorage.setItem('password', password.value)
  //       sessionStorage.setItem('rememberMe.current', rememberMe.current.checked)
  //     }
  //   } catch (error) {
  //     console.warn(error)
  //   }
  // }

  // function supprimerSession () {
  //   try {
  //     divInputUsername = document.getElementsByClassName('input-wrapper')[0]
  //     const dataList = document.getElementById('usernames')
  //     if (dataList !== (undefined, null)) divInputUsername.removeChild(dataList)
  //     sessionStorage.clear()
  //   } catch (error) {
  //     console.warn(error)
  //   }
  // }

  // function recupererSession () {
  //   try {
  //     email = document.getElementById('email')
  //     password = document.getElementById('password')
  //     rememberMe.current = document.getElementById('remember-me')
  //     divInputUsername = document.getElementsByClassName('input-wrapper')[0]
  //     if (email !== (undefined, null) || password !== (undefined, null)) {
  //       email.value = sessionStorage.getItem('email')
  //       password.value = sessionStorage.getItem('password')
  //       rememberMe.current.checked = sessionStorage.getItem('rememberMe.current')
  //       let dataList = document.getElementById('usernames')
  //       if (dataList === (undefined, null) && email.value !== '') {
  //         dataList = document.createElement('datalist')
  //         const optionUsername = document.createElement('option')
  //         optionUsername.value = email.value
  //         dataList.id = 'usernames'
  //         divInputUsername.appendChild(dataList)
  //         dataList.appendChild(optionUsername)
  //       }
  //     }
  //   } catch (error) {
  //     console.warn(error)
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