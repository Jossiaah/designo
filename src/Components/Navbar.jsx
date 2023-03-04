import React from 'react'
import styled from 'styled-components'
import logoImg from '../assets/shared/desktop/logo-dark.png';
import hamIcon from '../assets/shared/mobile/icon-hamburger.svg'

const Container = styled.div`
    z-index: 2;

`;
const Logo = styled.img`
    width: 200px;
`;
const Nav = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px;
    padding-top: 40px;
    padding-left: 30px;
    
`;

const MenuButton = styled.img`
width: 30px;

`;


const Navbar = () => {
    return (
        <Container>
            <Nav>
                <Logo src={logoImg} />
                <MenuButton src={hamIcon} />
            </Nav>
        </Container>
    )
}

export default Navbar