import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import '../static/styles.css'; // Import your CSS file

function NavBar({dynamicText}) {
    return (
        <Navbar className="navbar">
            <div className="top-nav">
                <Navbar.Brand href="#home">Your Logo</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            </div>
            <div className="main-nav">
                <Nav>
                    <Nav.Link href="/criar_cto">Criar</Nav.Link>
                    <Nav.Link href="/cto">CTO</Nav.Link>
                    <Nav.Link href="/ctos">CTOS</Nav.Link>
                    <Nav.Link href="/estatisticas">Consultar Estatísticas</Nav.Link>
                </Nav>
            </div>
            <div className="bottom-nav">
                <div className="dynamicText">
                    <Nav>
                        <h2><Navbar.Text>{dynamicText}</Navbar.Text></h2>
                    </Nav>
                </div>
                <div className="logoutButton">
                    <Nav>
                        <Nav.Link href="/login">Logout</Nav.Link>
                    </Nav>
                </div>
            </div>
        </Navbar>
    );
}

export default NavBar;
