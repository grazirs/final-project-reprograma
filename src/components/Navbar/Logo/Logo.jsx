import LogoSite from '../../../assets/logoBeMagic.png'
import './Logo.css';


const Logo =(props)=>{
    return(
        <div className={props.classLogo}>
            <img src={LogoSite} alt="Ícone da logo do site" /> 
            
        </div>
    )
}

export default Logo