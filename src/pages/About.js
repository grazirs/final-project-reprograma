
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import Subtitles from '../components/Subtitles/Subtitles'
import OurTeam from '../components/OurTeam/OurTeam'
import Header from '../components/Header/Header'

const About = () => {

    return (
        <>
            <Navbar/>
            <Header></Header>
          
             <Subtitles>Nosso Time</Subtitles> 
             <OurTeam></OurTeam>
            
            <Footer></Footer>
        </>
    )
}

export default About