import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Formulaire from '../../components/Formulaire/Formulaire'


function Connexion () {
  return (
    <div className='connexion'>
      <Header />
      <main>
        <Formulaire />
      </main>
      <Footer />
    </div>
  )
}

export default Connexion