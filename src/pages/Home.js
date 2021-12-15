
import Navbar from '../components/Navbar/Navbar'
import Header from '../components/Header/Header'
import Sentences from '../components/Sentences/Sentences'
import Footer from '../components/Footer/Footer'
import SectionHome from '../components/SectionHome/SectionHome'
import ContentHome from '../components/ContentHome/ContentHome'
import CardsAbout from '../components/CardsAbout/CardAbout'

const Home = () => {

    return (
        <>
            <Navbar />
            <Header />
            <ContentHome></ContentHome>
            <Sentences> "Valorizamos a cultura do feito à mão"</Sentences>
            <SectionHome></SectionHome>
            <Sentences> "Sentimento em Linhas"</Sentences>
            <CardsAbout/>
            <Footer />
        </>
    )
}

export default Home