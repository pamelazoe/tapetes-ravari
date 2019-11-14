import MyLayout from "../components/Layout"
import Link from 'next/link';
import Carousel from '../components/Carousel';
import HomeOverlay from '../components/HomeOverlay'
import PageFooter from '../components/Footer'
import Contact from '../components/Contact'
import Gallery from '../components/Gallery'
import { BackTop, Layout } from 'antd'
import Nav from "../components/Nav";
import Catalog from "../components/Catalog"
import ServicesSection from "../components/ServicesSection"

const Home = () => (
    <div>
        <MyLayout>
     <HomeOverlay 
        line1="La mejor calidad"
        line2="para tu hogar"
        text="Then it's time to get your beak wet tonight playa! Sometimes science is a lot more art, than science. A lot of people don't get that."
        button1="Conocenos"
        button2="Cotiza" /> 
  <Carousel  style={{textAlign: "center", height: "2000px", lineHeight: "160px", background: "#364d79", overflow: "hidden", zIndex:"-100"}} />
  <Catalog />
  <ServicesSection cleaningHeader="Limpieza de tapetes" repairHeader="Reparación de tapetes" saleHeader="Venta de tapetes" 
  cleaningContent="That just sounds like slavery with extra steps. He threatened to turn me in to the government, so I made him and the government go away! I know you're real because i have a ton of bad memories with you."
  repairContent="This isn't Game of Thrones, Morty. I can finally go on that trip I've been talking about. I love morty and i hope morty loves me. I want to wrap my arms around him and feel him deep inside me. A price for everything."
  saleContent="Rick, I don't like glowing rocks in the kitchen trash! God? God's turning people into insect monsters Beth. I'm the one beating them to death. Thank me. I'd like to order one large person with extra people please."
  />
 </MyLayout>
 <BackTop/>
 <style jsx>{`
     font-family: 'Roboto Condensed', sans-serif;
      `}</style>

 </div>
  ) 


  export default Home