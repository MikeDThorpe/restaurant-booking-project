import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Carousel } from 'react-bootstrap'
import '../styles/ImageCarousel.css'
import Arctic from '../assets/restaurant-thumbnails/arctic.jpg'
import Antarctic from '../assets/restaurant-thumbnails/antarctic.jpg'
import Sahara from '../assets/restaurant-thumbnails/sahara.jpg'
import Everest from '../assets/restaurant-thumbnails/everest.jpg'
import Amazon from '../assets/restaurant-thumbnails/amazon.jpg'

let ImageCarousel = (props) => {
    return (
        <div>
            <Carousel className="carousel-slider">
                <Carousel.Item interval={1000}>
                <img
                className="d-block w-100"
                alt="Arctic"
                />
            </Carousel.Item>
            <Carousel.Item interval={1000}>
                <img
                className="d-block w-100"
                src={Antarctic}
                alt="Antarctic"
                />
            </Carousel.Item>
            <Carousel.Item interval={1000}>
                <img
                className="d-block w-100"
                src={Sahara}
                alt="Sahara"
                />
            </Carousel.Item>
            <Carousel.Item interval={1000}>
                <img
                className="d-block w-100"
                src={Everest}
                alt="Everest"
                />
            </Carousel.Item>
            <Carousel.Item interval={1000}>
                <img
                className="d-block w-100"
                src={Amazon}
                alt="Amazon"
                />
            </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default ImageCarousel