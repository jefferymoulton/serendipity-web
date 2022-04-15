import { Component } from "react";
import { Image } from "react-bootstrap";

import './MbzStyles.scss';
import '../MovieStyles.scss'
import MoviesHeader from "../movies-header/MoviesHeader";
import MbzCharacters from "./MbzCharacters";

export default class MbzHome extends Component {
    render() {
        return (
            <div className="movie-page">
                <MoviesHeader />

                <Image src="/images/movies/murder-by-zombie/murder-by-zombie-banner.png"
                       className="movie-banner"/>

                <MbzCharacters />
            </div>
        );
    }
}