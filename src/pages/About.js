
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import CardAbout from '../components/CardsAbout/CardAbout'
import Subtitles from '../components/Subtitles/Subtitles'
import OurTeam from '../components/OurTeam/OurTeam'


const About = () => {

    return (
        <>
            <Navbar/>
            <Subtitles>Sobre Nós</Subtitles>
             <CardAbout/> 
             <Subtitles>Nosso Time</Subtitles> 
             <OurTeam></OurTeam>
            
            <Footer></Footer>
        </>
    )
}

export default About