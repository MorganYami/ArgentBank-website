import { useSelector } from 'react-redux'


function Information () {
  let prenom = useSelector(state => state.user.prenom)
  let nom = useSelector(state => state.user.nom)


return (
    <div className='information'>
      <h1> Welcome back <br /> {prenom} {nom} </h1>
      <button onClick={(event) => {}}> Edit Name </button>
    </div>
  )
}

export default Information