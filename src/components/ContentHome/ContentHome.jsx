import './contenthome.css'
import RecommendIcon from '@mui/icons-material/Recommend';
import LoyaltyIcon from '@mui/icons-material/Loyalty';
import FavoriteIcon from '@mui/icons-material/Favorite';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import { pink } from '@mui/material/colors';
import { Box } from '@mui/system';


const ContentHome = () => {
    return (
        <>
            <h3 className='card_title-home'>Motivos para adquirir nossos produtos</h3>
            <div>
                <div className="cards_home">
                    <div className="card_home-reason">
                        <Box sx={{display:'flex', justifyContent:'center'}}>
                        <VolunteerActivismIcon className='icon'sx={{ color:pink[500], fontSize: 40}}/>
                        </Box>


                        <p className="card_home-content">
                            Todos os bordados são feitos à mão com muito carinho e amor!
                        </p>
                    </div>
                    <div className="card_home-reason">
                    <Box sx={{display:'flex', justifyContent:'center'}}>
                        <LoyaltyIcon className='icon'sx={{ color:pink[500], fontSize: 40}} />
                        </Box>
                        <p className="card_home-content">
                            Você estará apoiando jovens empreendedoras!
                        </p>
                    </div>
                    <div className="card_home-reason">
                    <Box sx={{display:'flex', justifyContent:'center'}}>
                        <FavoriteIcon  className='icon'sx={{ color:pink[500], fontSize: 40}}/>
                        </Box>
                        <p className="card_home-content">
                        Não são apenas bordados decorativos, são bordados afetivos e muito especiais!
                        </p>
                    </div>
                    <div className="card_home-reason">
                    <Box sx={{display:'flex', justifyContent:'center'}}>
                        <RecommendIcon className='icon'sx={{ color:pink[500], fontSize: 40}} />
                        </Box>
                        <p className="card_home-content">
                            Produto exclusivo, cada peça é única, personalizada do seu jeitinho!
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContentHome