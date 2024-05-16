// import "./style.scss";

function Formulaire () {
  
  return (
    <section>
      <i className='fa fa-user-circle fa-4x sign-in-icon' />
      <h1> Sign In </h1>
      <form>
        <div className='input-wrapper'>
          <label htmlFor='email'>Username</label>
          <input type='text' list='usernames' id='email' required />
        </div>
        
        <div className='input-wrapper'>
          <label htmlFor='password'>Password</label>
          <input type='password' id='password' required />
        </div>
        <div className='input-remember'>
          <label htmlFor='remember-me'>Remember me</label>
          <input type='checkbox' id='remember-me' />
        </div>
        <a href="./Profile"
          className='sign-in-button'
          // onClick={connexion}
        > Sign In
        </a>
      </form>
    </section>
  )
}

export default Formulaire