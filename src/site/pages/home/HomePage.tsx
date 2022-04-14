import { Component } from "react";
import Banner from "../../../components/banner/Banner";

import '../../SiteStyles.scss';
import { Container } from "react-bootstrap";

export default class HomePage extends Component {
    render() {
        return (
            <div>
                <Banner />
                <div className="content-area page-content">
                    <Container>
                        <h1 className="serendipity-title text-center">What will you encounter at Serendipity?</h1>
                    </Container>
                </div>
            </div>
        );
    }
}