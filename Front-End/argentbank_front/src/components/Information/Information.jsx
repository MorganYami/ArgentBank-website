import { updateUserInfo } from '../../service/api';
import { useSelector } from 'react-redux';


function Information() {
  let userName = useSelector(state => state.user.userName)
  let prenom = useSelector(state => state.user.firstName)
  let nom = useSelector(state => state.user.lastName)

  function editData() {
    const divInfo = document.getElementsByClassName('information')[0]
    if (divInfo !== undefined) {
      const button = divInfo.lastChild
      button.style.display = 'none'
      divInfo.firstChild.textContent = 'Welcome back'

      const inputUserName = document.createElement('input')
      const inputPrenom = document.createElement('input')
      const inputNom = document.createElement('input')
      const buttonSave = document.createElement('button')
      const buttonCancel = document.createElement('button')
      const divButton = document.createElement('div')

      divInfo.appendChild(inputUserName)
      divInfo.appendChild(inputPrenom)
      divInfo.appendChild(inputNom)
      divButton.appendChild(buttonSave)
      divButton.appendChild(buttonCancel)
      divInfo.appendChild(divButton)
      inputUserName.value = userName
      inputPrenom.value = prenom
      inputNom.value = nom
      buttonSave.textContent = 'Save'
      buttonCancel.textContent = 'Cancel'
      buttonSave.classList.add('sign-in-button')
      buttonSave.classList.add('buttonEdit')
      buttonCancel.classList.add('sign-in-button')
      buttonCancel.classList.add('buttonEdit')
      const changeUserName = async (e) => {
        try {
            await updateUserInfo(inputUserName.value)
            .then (buttonCancel.click(),
            alert('UerName Change made successfuly'),
          userName = inputUserName.value)
          } catch (error) {
            console.log("Something went: ", error.response)
          }
      }
      buttonSave.addEventListener('click', () => {
        if (userName !== inputUserName.value) {
          changeUserName();
        }
      })
      buttonCancel.addEventListener('click', () => {
        divInfo.removeChild(inputUserName)
        divInfo.removeChild(inputPrenom)
        divInfo.removeChild(inputNom)
        divInfo.removeChild(divButton)
        button.style.display = 'initial'
        divInfo.firstChild.innerHTML = 'Welcome back <br /> ' + prenom + ' ' + nom
      })
    }
  }


  return (
    <div className='information'>
      <h1 id="titleWelcome"> Welcome back <br /> {prenom} {nom} </h1>
      <button id='changeUserinfo' onClick={(e) => { editData() }} > Edit Name </button>
    </div>
  )
}

export default Information