import React from 'react'
import App, { Container } from 'next/app'

import Layout from '../components/Layout'

export default class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = { 
      
          overlay: {
            line1: "La mejor calidad",
            line2: "para tu hogar",
            text:
              "Then it's time to get your beak wet tonight playa! Sometimes science is a lot more art, than science. A lot of people don't get that.",
            button1: "Servicios",
            button2: "Contacto"
          },
          services: {
            sectionHeader: "Nuestros Servicios",
            cleaningHeader: "Limpieza de tapetes",
            repairHeader: "Reparación de tapetes",
            saleHeader: "Venta de tapetes",
            cleaningContent:
              "That just sounds like slavery with extra steps. He threatened to turn me in to the government, so I made him and the government go away! I know you're real because i have a ton of bad memories with you.",
            repairContent:
              "This isn't Game of Thrones, Morty. I can finally go on that trip I've been talking about. I love morty and i hope morty loves me. I want to wrap my arms around him and feel him deep inside me. A price for everything.",
            saleContent:
              "Rick, I don't like glowing rocks in the kitchen trash! God? God's turning people into insect monsters Beth. I'm the one beating them to death. Thank me. I'd like to order one large person with extra people please."
          },
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
          },
    
          carousel: {
            img1: "https://travari.s3-us-west-2.amazonaws.com/images/lobby-rug.jpg",
            img2:
              "https://travari.s3-us-west-2.amazonaws.com/images/ryan-christodoulou-Vra_DPrrBlE-unsplash.jpg",
            img3:
              "https://travari.s3-us-west-2.amazonaws.com/images/jonathan-stout-Pa-kKr31C7o-unsplash.jpg"
          },
          catalog: {
            cat1:
              "https://travari.s3-us-west-2.amazonaws.com/images/mata-pod-dywan.jpg",
            cat2:
              "https://travari.s3-us-west-2.amazonaws.com/images/mata-pod-dywan.jpg"
          },
          about: {
            title: "¿Quienes somos?",
            subtitle: "Más de 40 años de experiencia",
            text1: "That, out there. That's my grave. On one of our adventures Rick and I basically destroyed the whole world. So we bailed on that reality and we came to this one. Because in this one the world wasn't destroyed. And in this one, we were dead. So we came here a-a-and we buried ourselves and we took their place.",
            text2: "And every morning, Summer, I eat breakfast 2 I've replaced them both as the de facto patriarch of your family and your universe. Your mom wouldn't have accepted me if I came home without you and your sister, so now you know the real reason I rescued you. I just took over the family, Morty! ",
            text3: "Shut the fuck up about moonmen! Hello Jerry, come to rub my face in urine again? Hey listen, you know, if we're all bored over here, wouldn't the common denominator be you? Yo! What up my glip glops! Nice to wheat you! Oh no. I'm late to class, bitch. And that's the wayyy, the news goes! Meeseeks were not born into this world fumbling for meaning, Jerry! Morty!",
            rpanelimg1: "https://travari.s3-us-west-2.amazonaws.com/images/central-rug.jpg",
          },
          extraInfo: {
            headerInfo:"Información extra",
            contentInfo: "Not for the men they cheat on. I'm sorry, Morty. It's a bummer. In reality you're as dumb as they come. Isn't it obvious Morty? I froze him. You have to turn them on Morty! The shoes need to be turned on!",
            li1:"Lookin' good!",
            li2:"My man!",
            li3: "Isn't it obvious Morty? I froze him.",
            li4:"Well let me check my list of powers and weaknesses: ability to do anything, but only whenever I want.",
            li5:"Nice, Mrs Pancakes. Real nice."
          },
          gallery: {
            thmb1:"https://travari.s3-us-west-2.amazonaws.com/images/large-table-rug.jpg",
            thmb2:"https://instagram.fgdl3-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/c0.180.1440.1440a/s640x640/67354125_3265452590139394_1132446391963013801_n.jpg?_nc_ht=instagram.fgdl3-1.fna.fbcdn.net&_nc_cat=110&oh=f8b39f259c0a5dc9618d207b9d59cb40&oe=5E528857",
            thmb3:"https://instagram.fgdl3-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/c0.0.1439.1439a/s640x640/69617083_159886811758830_4464376332348528817_n.jpg?_nc_ht=instagram.fgdl3-1.fna.fbcdn.net&_nc_cat=106&oh=4a38804fe8c0a402d23fd243b1adf8e9&oe=5E885C5A",
            thmb4:"https://instagram.fgdl3-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/c0.179.1440.1440a/s640x640/69596518_387907098516664_8587229336592167709_n.jpg?_nc_ht=instagram.fgdl3-1.fna.fbcdn.net&_nc_cat=104&oh=f7a9087bb89bb0fff1da887f0b35f853&oe=5E4EF913",
            thmb5:"https://instagram.fgdl3-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/c0.175.1406.1406a/s640x640/67793293_405809076742151_6086601951845881906_n.jpg?_nc_ht=instagram.fgdl3-1.fna.fbcdn.net&_nc_cat=111&oh=502c8bd57a05a5103ea1de344a9865ff&oe=5E6749E2"
          }
     }
    
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    /* your own logic */
    

    return { pageProps }
  }

  render () {
    console.log("app")
    const { Component, pageProps } = this.props
    return (
      <Container>
        <Layout {...pageProps}>
          
          <Component {...pageProps} />
        </Layout>
      </Container>
    )
  }
}