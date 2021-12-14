import './cardabout.css'




const CardAbout = () => {
    return (

        <>
            
            <div className='card-about'>

                <div className="maincontainer">


                    <div className="thecard">
                        <div className="thefront"><h4>Be Magic Ateliê foi fundado em... <p>passe o mouse para descobrir</p></h4></div>
                        <div className="theback"><h4> dezembro de 2020 durante a pandemia.  </h4></div>
                    </div>

                    <div className="thecard">
                        <div className="thefront"><h4>Nós já produzimos mais de ... <p>passe o mouse para descobrir</p> </h4></div>
                        <div className="theback"><h4> 35 bordados exclusivos com diferentes temáticas.</h4></div>
                    </div>

                    <div className="thecard">
                        <div className="thefront"><h4>Nossos produtos já impactaram clientes... <p>passe o mouse para descobrir</p> </h4></div>
                        <div className="theback"><h4> da Bahia, Pernambuco, Paraíba, São Paulo e já chegaram até na Europa em Roma-Itália</h4></div>
                    </div>

                </div>
            </div>
        </>
    )
}
export default CardAbout