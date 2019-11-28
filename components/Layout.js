import React from 'react';
import Nav from './Nav';
import TopBanner from './TopBanner'
import PageFooter from './Footer'
import Contact from './Contact'
import { BackTop } from "antd";
import Head from "next/head"
import "../styles/index.css"
console.log("layout")
const Layout = ({children, phone, email, home, about, services, contact, by, legal, terms,
                  contactTitle, contactContent, contactPhone, location, schedule}) => (    
  <div >
    <Head>
      <title>Tapetes Ravari</title>
    </Head>
    <TopBanner phone={phone} email={email} />
    <Nav home={home} about={about} services={services} contact={contact} />
   
      {children} 
      <Contact 
      // contactTitle={contactTitle}
      // contactContent={contactContent}
      // contactPhone={contactPhone}
      // location={location}
      // schedule={schedule}
    />
      <PageFooter 
      by={by} legal={legal} terms={terms}
      />
      <BackTop />
    </div>
)


export default Layout