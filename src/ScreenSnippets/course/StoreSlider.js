import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Slider1 from '../../../public/images/Store/girl1.jpg';
import Slider2 from '../../../public/images/Store/girl2.jpg';
import Slider3 from '../../../public/images/Store/girl3.jpg';

class StoreSlider extends Component {
    render() {
        return (
            <Carousel indicators={false}>
                <Carousel.Item>
                    <img
                        className=" w-100"
                        src={Slider1}
                        alt="First slide"
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className=" w-100"
                        src={Slider2}
                        alt="Second slide"
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className=" w-100"
                        src={Slider3}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        )
    }
}

export default StoreSlider;