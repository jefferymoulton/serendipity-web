import { Carousel, Image } from "react-bootstrap";
import { Component } from "react";

import './Banner.scss';

export default class Banner extends Component {
    render() {
        return (
            <Carousel>
                <Carousel.Item>
                    <Image src="/images/carousel/movie-audience.jpg"
                           className="banner-item"
                           alt="audience watching a movie" />
                    <Carousel.Caption>
                        <h3 className="lets-make-a-movie">Let's Make a Movie!</h3>
                        <p>
                            Nulla vitae elit libero, a pharetra augue mollis interdum.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Image src="/images/carousel/father-daughter-with-clapper.jpg"
                           className="banner-item"
                           alt="audience watching a movie" />
                    <Carousel.Caption>
                        <h3 className="lets-make-a-movie">It's so much fun!!!</h3>
                        <p>
                            Nulla vitae elit libero, a pharetra augue mollis interdum.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        );
    }
};
