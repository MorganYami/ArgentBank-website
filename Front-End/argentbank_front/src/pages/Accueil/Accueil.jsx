import Intro from '../../components/Intro/Intro'
import Item from '../../components/Item/Item'
import iconChat from '../../assets/icons/icon-chat.png'
import iconMoney from '../../assets/icons/icon-money.png'
import iconSecurity from '../../assets/icons/icon-security.png'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'


function Accueil () {
  return (
    <div className='accueil'>
      <Header />
      <Intro /><div className='items'>
        <Item image={iconChat} titre='You are our #1 priority' description='Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.' />
        <Item image={iconMoney} titre='More savings means higher rates' description='The more you save with us, the higher your interest rate will be!' />
        <Item image={iconSecurity} titre='Security you can trust' description='We use top of the line encryption to make sure your data and money is always safe.' />
      </div>
      <Footer />
    </div>
  )
}

export default Accueil