import { useState } from 'react';
import { updateUserInfo } from '../../service/api';
import { useSelector } from 'react-redux';


// function Information() {
//   let userName = useSelector(state => state.user.userName)
//   let prenom = useSelector(state => state.user.firstName)
//   let nom = useSelector(state => state.user.lastName)

//   function editData() {
//     const divInfo = document.getElementsByClassName('information')[0]
//     if (divInfo !== undefined) {
//       const button = divInfo.lastChild
//       button.style.display = 'none'
//       divInfo.firstChild.textContent = 'Edit User info'

//       const inputUserName = document.createElement('input')
//       const inputPrenom = document.createElement('input')
//       const inputNom = document.createElement('input')
//       const buttonSave = document.createElement('button')
//       const buttonCancel = document.createElement('button')
//       const divButton = document.createElement('div')

//       divInfo.appendChild(inputUserName)
//       divInfo.appendChild(inputPrenom)
//       divInfo.appendChild(inputNom)
//       divButton.appendChild(buttonSave)
//       divButton.appendChild(buttonCancel)
//       divInfo.appendChild(divButton)
//       inputUserName.value = userName
//       inputPrenom.value = prenom
//       inputNom.value = nom
//       buttonSave.textContent = 'Save'
//       buttonCancel.textContent = 'Cancel'
//       buttonSave.classList.add('sign-in-button')
//       buttonSave.classList.add('buttonEdit')
//       buttonCancel.classList.add('sign-in-button')
//       buttonCancel.classList.add('buttonEdit')
//       const changeUserName = async (e) => {
//         try {
//           await updateUserInfo(inputUserName.value)
//             .then(buttonCancel.click(),
//               alert('UserName Change made successfuly'),
//               userName = inputUserName.value)
//         } catch (error) {
//           console.log("Something went wrong: ", error.response)
//         }
//       }
//       buttonSave.addEventListener('click', () => {
//         if (userName !== inputUserName.value) {
//           changeUserName();
//         }
//       })
//       buttonCancel.addEventListener('click', () => {
//         divInfo.removeChild(inputUserName)
//         divInfo.removeChild(inputPrenom)
//         divInfo.removeChild(inputNom)
//         divInfo.removeChild(divButton)
//         button.style.display = 'initial'
//         divInfo.firstChild.innerHTML = 'Welcome back <br /> ' + prenom + ' ' + nom
//       })
//     }
//   }


//   return (
//     <div className='information'>
//       <h1 id="titleWelcome"> Welcome back <br /> {prenom} {nom} </h1>
//       <button id='changeUserinfo' onClick={(e) => { editData() }} > Edit Name </button>
//     </div>
//   )
// }

// export default Information

function Information() {
  const [updatingUserName, setupdatingUserName] = useState("false");
  // const [userName, setUserName] = useState("");
  let userName = useSelector(state => state.user.userName);
  let prenom = useSelector(state => state.user.firstName);
  let nom = useSelector(state => state.user.lastName);

  const changeUserName = async (e) => {
    e.preventDefault();
    userName = e.target[0].value;
    // setUserName(e.target[0].value);
    try {
      await updateUserInfo(userName)
        .then(alert('UserName Change made successfuly'))
    } catch (error) {
      console.log("Something went wrong: ", error.response)
    }
  }

  // const startChange = () => {
  //   return (
  //     <form className='information' onSubmit={changeUserName}>
  //       <h1>Edit User info</h1>
  //       <div className='inputUserChange'>
  //         <label htmlFor='userName'>User Name</label>
  //         <input type='text' id='username' defaultValue={userName} required />
  //       </div>
  //       <div className='inputUserChange'>
  //         <label htmlFor='prenom'>User Name</label>
  //         <input type='text' id='prenom' defaultValue={prenom} disabled />
  //       </div>
  //       <div className='inputUserChange'>
  //         <label htmlFor='nom'>User Name</label>
  //         <input type='text' id='nom' defaultValue={nom} disabled />
  //       </div>
  //       <div className='inputUserChange'>
  //         <button id='saveUserinfo' type='submit' > Edit Name </button>
  //         <button id='cancel' onClick={(e) => setupdatingUserName(!updatingUserName)} > Cancel </button>
  //       </div>
  //     </form>
  //   )
  // }
  if (updatingUserName) {
    return (
      <div className='information'>
        <h1 id="titleWelcome"> Welcome back <br /> {prenom} {nom} </h1>
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
          <label htmlFor='prenom'>User Name</label>
          <input type='text' id='prenom' defaultValue={prenom} autoComplete='false' disabled />
        </div>
        <div className='inputUserChange'>
          <label htmlFor='nom'>User Name</label>
          <input type='text' id='nom' defaultValue={nom} autoComplete='false' disabled />
        </div>
        <div className='inputUserChange'>
          <button id='saveUserinfo' type='submit' > Edit Name </button>
          <button id='cancel' type='button' onClick={(e) => setupdatingUserName(!updatingUserName)} > Cancel </button>
        </div>
      </form>
    )
   }

}

export default Information