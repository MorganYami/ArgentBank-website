import mainLogo from '../../assets/argentBankLogo.png'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { deconnexion } from '../../redux/action'
import store from '../../redux/store'
import { useEffect } from 'react'

function Header () {
  const connected = useSelector(state => state.connected)
  const userName = useSelector(state => state.user.userName)

  useEffect(() => {
    const divConnected = document.getElementsByClassName('connected')[0]
    const aNotConnected = document.getElementsByClassName('notConnected')[0]

    if (divConnected !== undefined || aNotConnected !== undefined) {
      if (connected) {
        divConnected.style.display = 'flex'
        aNotConnected.style.display = 'none'
      } else {
        divConnected.style.display = 'none'
        aNotConnected.style.display = 'flex'
      }
    }
  }, [connected])

  return (
    <header>
      <nav>
        <Link to='/'>
          <img src={mainLogo} alt='Argent Bank Logo' />
        </Link>
        <Link to='/Login' className='notConnected'>
          <i className='fa fa-2x fa-user-circle' />
          <p> Sign In </p>
        </Link>
        <div className='connected'>
          <Link to='/Profile'>
            <i className='fa-solid fa-2x fa-circle-user' />
            <p> {userName} </p>
          </Link>
          <Link to='/' onClick={(event) => { store.dispatch(deconnexion()) }}>
            <i className='fa-solid fa-arrow-right-from-bracket' />
            <p> Sign out </p>
          </Link>
        </div>
      </nav>
    </header>
  )
}

export default Header
