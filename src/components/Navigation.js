import React from 'react';
import favicon from '../img/favicon.png'
import { Navbar, Nav, Container } from 'react-bootstrap'


const Navigation = () => {
    return (
        <Container fluid>
            <Navbar className="navigation" fixed="top" >
                <Navbar.Brand href='/'>
                    <img
                        alt=""
                        src={favicon}
                        width="70"
                        height="70"
                        className="d-inline-block align-top"
                    />
                </Navbar.Brand>
                <Navbar.Collapse className="justify-content-end">
                    <Nav.Link className="link" href='#about'> About </Nav.Link>
                    <Nav.Link className="link" href='#skills'> Skills </Nav.Link>
                    <Nav.Link className="link" href='#projects'> Projects </Nav.Link>
                    <Nav.Link className="link" href='#contact'> Contact </Nav.Link>
                </Navbar.Collapse>
            </Navbar>
        </Container>
    );
};

export default Navigation;