import React from 'react';
import Nav from './Nav';
import TopBanner from './TopBanner'
import PageFooter from './Footer'
import Contact from './Contact'
import { BackTop } from "antd";
import "../styles/index.css"

const Layout = ({children, phone, email, home, about, services, contact, by, legal, terms,
                  contactTitle, contactContent, contactPhone, location, schedule}) => (    
  <div >
    <TopBanner phone={phone} email={email} />
    <Nav home={home} about={about} services={services} contact={contact} />
      {children} 
      <Contact 
      contactTitle={contactTitle}
      contactContent={contactContent}
      contactPhone={contactPhone}
      location={location}
      schedule={schedule}
    />
      <PageFooter 
      by={by} legal={legal} terms={terms}
      />
      <BackTop />
    </div>
)


export default Layout