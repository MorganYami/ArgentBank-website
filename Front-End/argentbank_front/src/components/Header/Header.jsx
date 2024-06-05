import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../store/reducer';

import Logo from '../../assets/images/argentBankLogo.webp';

function Header() {
    const token = useSelector(state => state.user.token);
    const userName = useSelector(state => state.user.userName)
    const dispatch = useDispatch();

    return (
        <header>
            <nav className="main-nav">
                <NavLink className="main-nav-logo" to={'/'}>
                    <img className="main-nav-logo-image" src={Logo} alt="Argent Bank Logo" />
                    <h1 className="sr-only">Argent Bank</h1>
                </NavLink>
                <div>
                    {
                        token ?
                        // if token is valid : add link to deconnect
                        <div className='user-nav'>
                            <NavLink className="user-nav-item" to={'/User'}>
                                <p className='user-nav-name'>{userName}</p>
                                <i className="user-nav-icon fa fa-user-circle"></i>
                            </NavLink>
                            <div className="user-nav-item">
                                <i className="user-nav-icon fa fa-gear"></i>
                            </div>                            
                            <NavLink className="user-nav-item" to={'/'} onClick={() => dispatch(logout())}>
                            <i className="user-nav-icon fa fa-power-off"></i>
                            </NavLink>
                        </div>
                        :
                        // else leave the Sign In
                        <NavLink className="main-nav-item" to={'/SignIn'}>
                            <i className="fa fa-user-circle"></i>
                            Sign In
                        </NavLink>
                    }
                </div>  
      </nav>
    </header>
  )
}

export default Header
