import Navbar  from "../components/Navbar/Navbar"
import Background from "../components/Background/Background"
import  Subtitles  from "../components/Subtitles/Subtitles"
import SectionProducts from "../components/SectionProducts/SectionProducts"
import ThemeEmbroidery from '../assets/themeEmbroidery.png'
import TshirtEmbroidery from '../assets/starwars.jpg'
import MiniEmbroidery from '../assets/miniEmbroidery.png'
import Interactive from '../assets/interactive.jpg'
import Footer from "../components/Footer/Footer"



const Products = ()=>{
    return (
        <>
            <Navbar/>
            <Background/>
            <Subtitles>Produtos</Subtitles>
            <div className="category">
                
            <SectionProducts category='Bordados em Bastidor' categoryText='Bastidores são as molduras circulares, estão disponíveis em 14cm e 16cm podendo ser em MDF ou madeira reflorestada. O bordado é feito em algodão cru e o tema fica ao seu critério, podendo ser escolhido o ponto linha ou cheio (preenchido).'>{ThemeEmbroidery}</SectionProducts>
            <SectionProducts category='Bordados em T-shirts' categoryText='As T-shirts são 100% algodão, disponíveis em P, M  ou G. O tamanho e posição do bordado fica ao seu critério. Além disso, é adicionado um detalhe nos ombro da camisa em Zig Zag.'>{TshirtEmbroidery}</SectionProducts>
            <SectionProducts category='Bordados em chaveiros' categoryText='Os chaveiros são em mini molduras circulares de 4cm e acompanham um tassel de linha'>{MiniEmbroidery}</SectionProducts>
            </div>
            <Subtitles>Bordado Interativo</Subtitles>
            <SectionProducts categoryText='Os bordados interativos podem ser tanto em bastidor quanto em camisa. Consiste na adição do código bordado de uma música disponível no Spotify. '>{Interactive}</SectionProducts>
             <Footer></Footer>
        </>
    )
}
    


export default Products