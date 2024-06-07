import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Form from "../../components/Form/Form";

function SignIn() {
  return (
    <div className='connexion'>
      <Header />
      <main>
        <Form />
      </main>
      <Footer />
    </div>
  )
}

export default SignIn;