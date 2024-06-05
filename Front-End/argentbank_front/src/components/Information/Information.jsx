import { useState } from 'react';
import { updateUserInfo } from '../../service/api';
import { useSelector, useDispatch } from 'react-redux';
import { updateUserName } from '../../store/reducer';


function Information() {
  const dispatch = useDispatch();
  const [updatingUserName, setupdatingUserName] = useState("false");
  const {userName, firstName, lastName} = useSelector(state => state.user);

  const changeUserName = async (e) => {
    e.preventDefault();
    try {
      await updateUserInfo(e.target[0].value)
     
        .then(alert('UserName Change made successfuly'))
         dispatch(updateUserName(e.target[0].value))
    } catch (error) {
      console.log("Something went wrong: ", error.response)
    }
  }
  if (updatingUserName) {
    return (
      <div className='information'>
        <h1 id="titleWelcome"> Welcome back <br /> {firstName} {lastName} </h1>
        <button id='changeUserinfo' onClick={(e) => setupdatingUserName(!updatingUserName)} > Edit Name </button>
      </div>
    )
  } else { 
    return (
      <form className='information' onSubmit={changeUserName}>
        <h1>Edit User info</h1>
        <div className='inputUserChange'>
          <label htmlFor='userName'>User Name</label>
          <input type='text' id='userName' defaultValue={userName} autoComplete='false' required />
        </div>
        <div className='inputUserChange'>
          <label htmlFor='firstName'>First Name</label>
          <input type='text' id='firstName' defaultValue={firstName} autoComplete='false' disabled />
        </div>
        <div className='inputUserChange'>
          <label htmlFor='lastName'>Last Name</label>
          <input type='text' id='lastName' defaultValue={lastName} autoComplete='false' disabled />
        </div>
        <div className='inputUserChange inputButton'>
          <button id='saveUserinfo' type='submit' > Save </button>
          <button id='cancel' type='button' onClick={(e) => setupdatingUserName(!updatingUserName)} > Cancel </button>
        </div>
      </form>
    )
   }

}

export default Information