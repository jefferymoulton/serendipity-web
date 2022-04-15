import { Component } from "react";
import { Container, Image, Navbar } from "react-bootstrap";

import './MoviesHeader.scss';
import { Link } from "react-router-dom";

export default class MoviesHeader extends Component {
    render() {
        return (
            <Navbar className="navbar navbar-expand-lg navbar-dark shadow-5-strong">
                <Container>
                    <Navbar.Brand as={Link} to="/" className="navbar-brand">
                        <Image src="/images/serendipity-logo-white-text.svg"
                               className="navbar-brand site-logo" alt="Serendipity Encounters logo" />
                    </Navbar.Brand>
                </Container>
            </Navbar>
        );
    }
}
