import React from 'react';
import Logo from '../../assets/img/Logo_shareflix.png';
import './Menu.css';
import Button from '../Button';
import { Link } from 'react-router-dom'
//import ButtonLink from './components/ButtonLink';

function Menu() {
    return (
        <nav className="Menu">
            <Link to="/">
                <img src={Logo} alt="Shareflix logo" className="Logo"/>
            </Link>

            {/*Sem styled components (Puxa do css do componente usando props):
            <ButtonLink className="ButtonLink" to="/">
                Novo Vídeo
            </ButtonLink>
            */}

            {/*Usando styled components (Puxa do index .js do Button)*/}
            <Button className="ButtonLink" to="/cadastro/video">
                Novo Vídeo
            </Button>
        </nav>  
    );
}

export default Menu;