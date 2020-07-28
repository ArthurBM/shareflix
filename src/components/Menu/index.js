import React from 'react';
import Logo from '../../assets/img/Logo_shareflix.png';
import './Menu.css';
import Button from '../Button';
//import ButtonLink from './components/ButtonLink';

function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
                <img src={Logo} alt="Shareflix logo" className="Logo"/>
            </a>

            {/*Sem styled components (Puxa do css do componente usando props):
            <ButtonLink className="ButtonLink" href="/">
                Novo Vídeo
            </ButtonLink>
            */}

            {/*Usando styled components (Puxa do index .js do Button)*/}
            <Button as="a" className="ButtonLink" href="/">
                Novo Vídeo
            </Button>
        </nav>  
    );
}

export default Menu;