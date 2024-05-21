import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Compte from '../../components/Compte/Compte'
import Information from '../../components/Information/Information'
import Connexion from '../Connexion/Connexion'
import { Routes, Route } from 'react-router-dom'
import { useSelector } from 'react-redux'

function User () {
  const connected = useSelector(state => state.connected)
  return (
    connected
      ? (
        <div className='user'>
          <Header />
          <main>
            <Information />
            <Compte titre='Argent Bank Checking (x8349)' montant='$2,082.79' description='Available Balance' />
            <Compte titre='Argent Bank Savings (x6712)' montant='$10,928.42' description='Available Balance' />
            <Compte titre='Argent Bank Credit Card (x8349)' montant='$184.30' description='Current Balance' />
          </main>
          <Footer />
        </div>
        )
        : (<Routes><Route path='/*' element={<Connexion />} /></Routes>)
  )
}
export default User