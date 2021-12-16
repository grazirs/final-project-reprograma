
import Navbar from '../components/Navbar/Navbar'
import Header from '../components/Header/Header'
import Sentences from '../components/Sentences/Sentences'
import Footer from '../components/Footer/Footer'
import SectionHome from '../components/SectionHome/SectionHome'
import ContentHome from '../components/ContentHome/ContentHome'
import CardsAbout from '../components/CardsAbout/CardAbout'
import Paragraphs from '../components/Paragraphs/Paragraphs'

const Home = () => {

    return (
        <>
            <Navbar />
            <Header />
            
            <ContentHome></ContentHome>
            <Paragraphs textHome='Aqui na Be Magic Ateliê você pode fazer uma encomenda de bordado super personalizada, do seu jeitinho ou daquela pessoa que você irá presentear. Somos especializados em fazer bordados temáticos feitos à mão do mundo geek, anime, k-pop, k-drama e também de bordados fotográficos'></Paragraphs>
            <Sentences> "Valorizamos a cultura do feito à mão"</Sentences>
            <SectionHome></SectionHome>
            <Sentences> "Sentimento em Linhas"</Sentences>
            <CardsAbout/>
            <Footer />
        </>
    )
}

export default Home