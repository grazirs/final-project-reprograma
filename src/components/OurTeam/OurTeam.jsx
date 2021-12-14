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
                    <h3>Graziele Ribeiro</h3>
                    <p>Prazer! <br></br>Sou Ilustradora da BeMagic Ateliê</p>
                </div>

                <div className="colaborator">
                    <img src={Joana} alt="foto da colaboradora" className="colaborator-img" />
                    <h3>Joana Angélica</h3>
                    <p>Prazer!<br></br> Sou Designer textil da BeMagic Ateliê</p>
                </div>
            </section>

        </>
    )
}

export default OurTeam