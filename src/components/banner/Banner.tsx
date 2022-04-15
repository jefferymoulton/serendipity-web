import { Carousel, Image } from "react-bootstrap";

import './Banner.scss';

interface ISlides {
    slides: ISlide[];
    config: ISlidesConfig;
}

interface ISlide {
    imageUrl: string;
    altText: string;
    captionClass: string;
    captionTitleClass: string;
    captionTitle: string;
    captionTextClass: string;
    captionText: string;

}

interface ISlidesConfig {
    itemClass: string;
    bannerClass: string;
}

const Banner: React.FC<ISlides> = ({config, slides}) => {
    return (
        <Carousel interval={null} className={config.bannerClass}>
            {slides.map((slide) => {
                return (
                    <Carousel.Item>
                        <Image src={slide.imageUrl} className={config.itemClass} alt={slide.altText} />

                        <Carousel.Caption className={slide.captionClass}>
                            <h3 className={slide.captionTitleClass}>{slide.captionTitle}</h3>
                            <p className={slide.captionTextClass}>
                                {slide.captionText}
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                )
            })}
        </Carousel>
    );
};

export default Banner;
