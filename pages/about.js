import React from 'react';
import Layout from "../components/Layout";
import { BackTop } from 'antd'

export default class About extends React.Component {
    constructor(props) {
      super(props);
    }
    static getInitialProps() {
      return {
        "contact": {
          contactTitle: "Contacto",
          contactContent: "Not for the men they cheat on. I'm sorry, Morty. It's a bummer. In reality you're as dumb as they come. Isn't it obvious Morty?",
          contactPhone: "(33) 3333 3333",
          location: "This isn't Game of Thrones, Morty. I can finally go on that trip I've been talking about. I love morty and i hope morty loves me.",
          schedule: "Then it's time to get your beak wet tonight playa! Sometimes science is a lot more art, than science. A lot of people don't get that."
        },
        "footer": {
          by: "By Guaostudio",
          legal: "Política de Privacidad", 
          terms:"Términos y Condiciones",
        },
        "topBanner": {
          phone:"(55) 5555 5555",
          email:"ventas@travari.mx"
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
   <h1>Nosotros</h1>
   </Layout>
   </div>
      )
    }
  }



// const About = ({contactTitle, contactContent, contactPhone, location, schedule,
//     by, legal, terms, phone, email, children}) => (
        
//         <Layout
//         contactTitle={contactTitle}
//         contactContent={contactContent}
//         contactPhone={contactPhone}
//         location={location}
//         schedule={schedule}
//         by={by}
//         legal={legal}
//         terms={terms}
//         phone={phone}
//         email={email}
//         >
//    <h1>Nosotros</h1>
//    </Layout>
//     )
  
//    About.getInitialProps = ({}) => {
//        return {
//         "overlay": {
//             line1: "La mejor calidad",
//             line2:"para tu hogar",
//             text: "Then it's time to get your beak wet tonight playa! Sometimes science is a lot more art, than science. A lot of people don't get that.",
//             button1:"Conocenos",
//             button2:"Cotiza"
//           },
//           "services":{
//             cleaningHeader: "Limpieza de tapetes",
//             repairHeader: "Reparación de tapetes",
//             saleHeader:"Venta de tapetes",
//             cleaningContent: "That just sounds like slavery with extra steps. He threatened to turn me in to the government, so I made him and the government go away! I know you're real because i have a ton of bad memories with you.",
//             repairContent: "This isn't Game of Thrones, Morty. I can finally go on that trip I've been talking about. I love morty and i hope morty loves me. I want to wrap my arms around him and feel him deep inside me. A price for everything.",
//             saleContent: "Rick, I don't like glowing rocks in the kitchen trash! God? God's turning people into insect monsters Beth. I'm the one beating them to death. Thank me. I'd like to order one large person with extra people please."
//           },
//           "contact": {
//             contactTitle: "Contacto",
//             contactContent: "Not for the men they cheat on. I'm sorry, Morty. It's a bummer. In reality you're as dumb as they come. Isn't it obvious Morty?",
//             contactPhone: "(33) 3333 3333",
//             location: "This isn't Game of Thrones, Morty. I can finally go on that trip I've been talking about. I love morty and i hope morty loves me.",
//             schedule: "Then it's time to get your beak wet tonight playa! Sometimes science is a lot more art, than science. A lot of people don't get that."
//           },
//           "footer": {
//             by: "By Guaostudio",
//             legal: "Política de Privacidad", 
//             terms:"Términos y Condiciones",
//           },
//           "topBanner": {
//             phone:"(55) 5555 5555",
//             email:"ventas@travari.mx"
//           },
          
//           "carousel": {
//             img1: "https://travari.s3-us-west-2.amazonaws.com/images/lobby-rug.jpg",
//             img2: "https://travari.s3-us-west-2.amazonaws.com/images/ryan-christodoulou-Vra_DPrrBlE-unsplash.jpg",
//             img3: "https://travari.s3-us-west-2.amazonaws.com/images/jonathan-stout-Pa-kKr31C7o-unsplash.jpg"
//           },
//           "catalog": {
//             cat1: "https://travari.s3-us-west-2.amazonaws.com/images/mata-pod-dywan.jpg",
//             cat2: "https://travari.s3-us-west-2.amazonaws.com/images/mata-pod-dywan.jpg"
//           }}
//    }


// export default About