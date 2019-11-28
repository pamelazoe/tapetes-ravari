import React from 'react';
import Layout from "../components/Layout";

export default class About extends React.Component {
    constructor(props) {
      super(props);
    }  
    static getInitialProps() {
      return {
        contact: {
          contactTitle: "Contacto",
          contactContent:
            "Not for the men they cheat on. I'm sorry, Morty. It's a bummer. In reality you're as dumb as they come. Isn't it obvious Morty?",
          contactPhone: "(33) 3333 3333",
          location:
            "This isn't Game of Thrones, Morty. I can finally go on that trip I've been talking about. I love morty and i hope morty loves me.",
          schedule:
            "Then it's time to get your beak wet tonight playa! Sometimes science is a lot more art, than science. A lot of people don't get that."
        },
        footer: {
          by: "By Guaostudio",
          legal: "Política de Privacidad",
          terms: "Términos y Condiciones",
          fbLink: "https://www.facebook.com/tapetesravari/",
          instaLink: "https://travari.s3-us-west-2.amazonaws.com/images/fblogo.png",
        },
        topBanner: {
          phone: "(55) 5555 5555",
          email: "ventas@travari.mx"
        }
      }
    }
    render() {
      return (
          <div>
          <Layout
            contactTitle={this.props.contact.contactTitle}
            contactContent={this.props.contact.contactContent}
            contactPhone={this.props.contact.contactPhone}
            location={this.props.contact.location}
            schedule={this.props.contact.schedule}
            by={this.props.footer.by}
            legal={this.props.footer.legal}
            terms={this.props.footer.terms}
            phone={this.props.topBanner.phone}
            email={this.props.topBanner.email}
        >
   <h1>Contacto</h1>
   </Layout>
   </div>
      )
    }
  }

