import { Component } from "react";
import { Container } from "react-bootstrap";
import Banner from "../../../components/banner/Banner";

import '../../SiteStyles.scss';

import { slideData } from '../../home-banner';

export default class HomePage extends Component {
    render() {
        return (
            <div>
                <Banner slides={slideData.slides} config={slideData.config} />
                <div className="content-area page-content">
                    <Container>
                        <h1 className="serendipity-title text-center">What will you encounter at Serendipity?</h1>
                    </Container>
                </div>
            </div>
        );
    }
}