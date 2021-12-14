import { Link } from 'react-router-dom'
import '../Navbar/navbar.css'


const Navbar = () => {
    return (
        
    
    <ul className='navbar'>
    <li>
        <Link to="/">Home</Link>
    </li>
    <li>
        <Link to="/Sobre">Sobre</Link>
    </li>
    <li>
        <Link to="/Produtos">Produtos</Link>
    </li>
    <li>
        <Link to="/Encomendas">Encomendas</Link>
    </li>
</ul>

    )
};
export default Navbar 
