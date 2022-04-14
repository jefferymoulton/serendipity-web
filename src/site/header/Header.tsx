import { Container, Image, Nav, Navbar } from "react-bootstrap";
import { Component } from "react";
import NavbarCollapse from "react-bootstrap/NavbarCollapse";

import './Header.scss';
import { Link } from "react-router-dom";

export default class Header extends Component {
    render() {
        return (
            <Navbar className="navbar navbar-expand-lg navbar-dark shadow-5-strong">
                <Container>
                    <Navbar.Brand as={Link} to="/" className="navbar-brand">
                        <Image src="/images/serendipity-logo-white-text.svg"
                               className="navbar-brand site-logo" alt="Serendipity Encounters logo" />
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />

                    <NavbarCollapse id="basic-navbar-nav">
                        <Nav className="navbar-nav mr-auto">
                            <Nav.Link as={Link} to="/" className="nav-item">Home</Nav.Link>
                            <Nav.Link as={Link} to="/about" className="nav-item">About Us</Nav.Link>
                            <Nav.Link as={Link} to="/movies" className="nav-item">Movies</Nav.Link>
                        </Nav>
                    </NavbarCollapse>
                </Container>
            </Navbar>
        );
    }
}
