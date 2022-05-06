import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css';
import logo from '../../imgas/logo.jpg';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';

const Header = () => {
    const [user] = useAuthState(auth)

    const handleSignOut = () => {
        signOut(auth);
    }

    return (

        <Navbar bg="primary" sticky='top' style={{ height: "40px" }} variant="dark">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    <img src={logo} height="20px" alt="" />
                </Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="home#services">Services</Nav.Link>
                    <Nav.Link href="home#expert">Bike</Nav.Link>

                </Nav>
                <Nav>
                    <Nav.Link as={Link} to="/about">About</Nav.Link>
                    {
                        user ?
                            <button className='btn btn-link text-white text-decoration-none' onClick={handleSignOut}>Sing out</button>
                            :
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>}
                </Nav>
            </Container>
        </Navbar>


    );
};

export default Header;