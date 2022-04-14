import { Component } from "react";

import './MurderByZombie.scss';
import { Container } from "react-bootstrap";

export default class MurderByZombie extends Component {
    render() {
        return (
            <div className="content-area mbz-content">
                <Container>
                    <h1 className="mbz-title">Murder By Zombie</h1>
                </Container>
            </div>
        );
    }
}