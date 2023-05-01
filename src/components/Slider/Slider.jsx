import React from 'react'
import './Slider.css'
import Slider from 'react-slick';
import { Carousel } from 'react-bootstrap';
// import HeroSlider, { Slide } from 'hero-slider'

function Carosual() {


    return (
        <>

            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.imgur.com/8DYumaY.jpg"
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.imgur.com/8IuucQZ.jpg"
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://example.com/image3."
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </>
    )
}
export default Carosual