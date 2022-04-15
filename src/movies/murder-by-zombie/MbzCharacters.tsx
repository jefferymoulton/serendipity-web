import { Component } from "react";
import { Carousel, Container, Image } from "react-bootstrap";

export default class MbzCharacters extends Component {
    render() {
        return (
          <div className="content-area mbz-content">
              <Container>
                  <h1 className="mbz-title display-3 text-center">Characters</h1>
                  <Carousel interval={null} className="movie-character-slides">
                      <Carousel.Item>
                          <Image src="/images/movies/murder-by-zombie/characters/harry-pants.svg"
                                 className="movie-character mbz-character" alt="detective" />

                          <Carousel.Caption className="movie-character-caption">
                              <h3 className="mbz-subtitle">Harry Pants</h3>
                              <p>
                                  A hard-boiled detective that could maybe have used a little more time in the pot.
                                  With their zombie partner, Joe, one of the only detectives left during the
                                  apocalypse.
                              </p>
                          </Carousel.Caption>
                      </Carousel.Item>
                      <Carousel.Item>
                          <Image src="/images/movies/murder-by-zombie/characters/joe.svg"
                                 className="movie-character mbz-character" alt="zombie detective" />

                          <Carousel.Caption className="movie-character-caption">
                              <h3 className="mbz-subtitle">Joe</h3>
                              <p>
                                  Zombie of a Harry’s old partner. Joe was a terrible detective in life, and is now
                                  trying to make up for it in the afterlife.
                              </p>
                          </Carousel.Caption>
                      </Carousel.Item>
                  </Carousel>
              </Container>
          </div>
        );
    }
}