import './sectionhome.css'
import EmbroideryRussia from '../../assets/russia.jpg'
import EmbroideryFriends from '../../assets/picture.jpg'





const SectionHome =()=>{
    return(
        <div>
            <div className="pictures">
                <img src={EmbroideryRussia} alt="foto do bordado" />
                <img src={EmbroideryFriends} alt="foto do bordado" />
            </div>




        </div>

    )
}

export default SectionHome