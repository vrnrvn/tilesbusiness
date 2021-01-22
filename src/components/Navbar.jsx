import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
    .navbar {
        background-color: #66859f
    }

    .navbar-brand, .navbar.nav .nav-link {
        color: #efefef;
        font-family: cursive;

        &.hover {
            color: #efefef;
        }
    }
`;

const NavBar = () => {
    return ( 
        <Styles>
            <Navbar expand="lg">
                <Navbar.Brand href="/"> Blue Garden Tiles</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic navbar-nav" />
                <Navbar.Collapse id="basic-navbar nav">
                    <Nav className='ml-auto'>
                        <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link href="/tiles">Tiles</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link href="/about">About</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link href="/contact">Contact</Nav.Link></Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Navbar> 
        </Styles>
     );
}
 
export default NavBar;