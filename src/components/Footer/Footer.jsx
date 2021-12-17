import '../Footer/footer.css'
import InstagramIcon from '@mui/icons-material/Instagram';
import { pink } from '@mui/material/colors';
import { Box } from '@mui/system';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import PixIcon from '@mui/icons-material/Pix';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

const Footer = () => {
    return (
        <>
        <footer>
        <div class="rodape">
       
        <div class="payment">
        <h4>Formas de pagamento</h4>
            <ul>
                <li class="card-type"/>
                <Box sx={{display:'flex', justifyContent:'center'}}>
                        <CreditCardIcon className='icon'sx={{ color:pink[300], fontSize: 30}}/>
                        </Box>
                
                <Box sx={{display:'flex', justifyContent:'center'}}>
                        <PixIcon className='icon'sx={{ color:pink[300], fontSize: 30}}/>
                        </Box>
                <Box sx={{display:'flex', justifyContent:'center'}}>
                        <AttachMoneyIcon className='icon'sx={{ color:pink[300], fontSize: 30}}/>
                        </Box>
                
               
            </ul>
        </div>
        <div class="social-media">
        <h4>Nos acompanhem:</h4>
            <ul>
            <Box sx={{display:'flex', justifyContent:'right'}}>
                <a href='https://www.instagram.com/bemagicatelie/' target="_blank ">
                <InstagramIcon className='icon' sx={{ color:pink[300], fontSize: 30}}/>
                </a>
                </Box> 
                    
            </ul>
        </div>
    </div>
        <div class="text">
                <p>Copyright © 2021 Be Magic Ateliê| Todos os direitos reservados. Desenvolvido por Graziele Ribeiro Santos</p>
            </div>
           
    </footer>
     </>
        
    )
}
export default Footer