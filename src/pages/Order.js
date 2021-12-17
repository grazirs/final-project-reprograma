
import Navbar from '../components/Navbar/Navbar'
import Background from "../components/Background/Background"
import Subtitles from '../components/Subtitles/Subtitles'
import Form from '../components/Form/Form'
import Footer from '../components/Footer/Footer'
import Questions from '../components/Questions/Questions'


const Order = () => {

    return (
        <>
            <Navbar />
            <Background />
            <Subtitles>Perguntas Frequentes</Subtitles>
            <Questions></Questions>
           
            <Subtitles>Faça sua encomenda</Subtitles>
            <Form></Form>

            <Footer></Footer>
        </>
    )
}

export default Order