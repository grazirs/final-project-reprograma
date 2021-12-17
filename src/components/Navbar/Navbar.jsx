
import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import Logo from './Logo/Logo'
import './navbar.css';


const Navbar = ()=>{
    const [state, setState] = useState({clicked: false})


    function clicado (){
        setState({clicked: !state.clicked})
    }
    
    return(
        <nav className="NavbarItens">
            <Logo classLogo='navbar-logo'/>  
            <div className="menu-icon" onClick={clicado}>
                <span className="material-icons">
                {state.clicked? 'close':'menu'}
                </span>
            </div>
            <ul className={state.clicked? 'nav-menu active' : 'nav-menu'}>
                <li key='1' className='link-menu'>
                    <div className={state.clicked? '' : 'none'} />
                    <Link className='nav-links' to='/'>Home</Link>
                </li>
                <li key='2' className='link-menu'>
                    <div className={state.clicked? '' : 'none'}/>
                    <Link className="nav-links" to="/sobre">Sobre</Link>
                </li>
                <li key='3' className='link-menu'>
                    <div className={state.clicked? '' : 'none'} />
                    <Link className="nav-links" to="/produtos">Produtos</Link>
                </li>
                <li key='4' className='link-menu'>
                    <div className={state.clicked? '' : 'none'} />
                    <Link className="nav-links" to="/encomendas">Encomendas</Link>
                </li>

            </ul>

        </nav>
        
    )
}

export default Navbar
