import React from 'react';
import Menu from '../Menu';
import Footer from '../Footer';
import styled from 'styled-components';

const Main = styled.main`
    background-color: var(--black);
    color: var(--white);
    flex: 1;
    padding-top: 50px;
    padding-left: 5%;
    padding-right: 5%;
`;

//Aqui você tá usando a props só que já destrinchada, já que ela é um objeto
//Você poderia passar props em cima e usar props.children embaixo
function PageDefault({children}) {
    //Nesse caso também poderiamos colocar dentro React.Fragment, isso serve pra não criar uma cascata de divs desnecessárias
    return (
        <>
            <Menu/>
                <Main>
                    {children}
                </Main>
            <Footer/>
        </>
    )
}

export default PageDefault;