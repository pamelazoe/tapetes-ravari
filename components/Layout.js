import React from 'react';
import Nav from './Nav';
//import logo from '../static/travari-logo.jpg'
import TopBanner from './TopBanner'
import PageFooter from './Footer'
import Contact from './Contact'

const Layout = ({children, phone, email, home, about, products, contact, by, legal, terms}) => (    
  <div >
    {/* <TopBanner phone="(55) 5555 5555" email="ventas@travari.mx"/> */}
    <Nav home="Inicio" about="Nosotros" services="Servicios" contact="Contacto" />
      {children} 
      <Contact 
    contactTitle="Contacto"
    contactContent="Not for the men they cheat on. I'm sorry, Morty. It's a bummer. In reality you're as dumb as they come. Isn't it obvious Morty?"
    contactPhone="(33) 3333 3333"
    location="This isn't Game of Thrones, Morty. I can finally go on that trip I've been talking about. I love morty and i hope morty loves me."
    schedule="Then it's time to get your beak wet tonight playa! Sometimes science is a lot more art, than science. A lot of people don't get that."/>
      <PageFooter by="By Guaostudio" legal="Política de Privacidad" terms="Términos y Condiciones"/>
    </div>
)


export default Layout