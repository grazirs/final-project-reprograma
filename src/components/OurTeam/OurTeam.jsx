import './ourteam.css'
// import AboutBackground from '../../assets/thread.jpg'


import Joana from '../../assets/joana.jpg'
import Grazi from '../../assets/grazi.jpg'


const OurTeam = () => {
    return (
        <>
            <section className='team'>
                <div className="colaborator">
                    <img src={Grazi} alt="foto da colaboradora" className="colaborator-img" />
                    <div className='colaborator-text'>
                        <h3>Graziele Ribeiro</h3>
                        <p>Prazer! Sou Ilustradora da BeMagic Ateliê. Sempre gostei de desenhar e durante a pandemia decidi me aprofundar mais em técnicas de desenho. Transformo a ideia do cliente em uma ilustração que será bordada e finalizada. Gosto bastante dos bordados fotográficos e de temas geek.</p>
                    </div>
                </div>

            </section>
            <section className='team'>
                <div className="colaborator">
                <div className='colaborator-text'>
                        <h3>Joana Angélica</h3>
                        <p>Prazer! Sou Designer textil da BeMagic Ateliê. Amo o mundo da moda e costura em geral. Sou responsável por eternizar a ilustração com as linhas. A arte de bordar exige bastante paciência e dedicação. </p>
                    </div>
                <img src={Joana} alt="foto da colaboradora" className="colaborator-img" />
                    
                </div>

            </section>
           
        </>
    )
}

export default OurTeam