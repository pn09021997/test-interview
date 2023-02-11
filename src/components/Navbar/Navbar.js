import React from 'react';
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import { Link } from 'react-router-dom';


//Styled components
const NavbarStyle = styled(Navbar)`
    padding: 2rem 0;
    margin-bottom: 2rem;
    //background-color: transparent;
    background-color: #f8f9fa;

    @media all and (max-width: 991px) {
        background-color: #f8f9fa;
    }
`;

const NavbarBrand = styled(Navbar.Brand)`
    font-size: 2.5rem;  
    font-weight: 500;
    padding-top: 0;
`;

const NavbarLink = styled(Link)`
    font-size: 2rem;
    transition: all .25s linear;

    &:hover {
        color: #f48225 !important;
    }
    
    @media all and (max-width: 991px) {
        padding-top: 1rem;
    }
`;

const NavbarDropdown = styled(NavDropdown)`
    font-size: 2rem;

    .dropdown-menu {
        padding: 1rem 2rem;
    }

    @media all and (max-width: 991px) {
        padding-top: 1rem;
        .dropdown-menu {
            margin-top: 1rem;
        }
    }
`;

const HeaderNavbar = () => {
    const isLoggedIn = localStorage.getItem('token');

    return (
        <NavbarStyle expand="lg">
            <Container>
                <NavbarBrand>
                    <Link to='/' className='nav-link'>
                        Home
                    </Link>
                </NavbarBrand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <NavbarLink to='/admin' className='nav-link'>
                        Admin
                    </NavbarLink>
                    <Nav className="ms-auto">
                        <NavbarDropdown title="Action" id="basic-nav-dropdown">
                            <NavbarLink to='/login' className='nav-link'>
                                {!isLoggedIn ? 'Login' : 'Logout'}
                            </NavbarLink>
                            <NavbarLink to='/register' className='nav-link'>
                                Register
                            </NavbarLink>
                        </NavbarDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </NavbarStyle>
    )
}

export default HeaderNavbar;