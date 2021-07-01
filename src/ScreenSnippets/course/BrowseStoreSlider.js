import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import tv from '../../../public/images/Products/tv.jpg';
import food from '../../../public/images/Products/food.jpg';
import laptob from '../../../public/images/Products/laptob.jpg';

class BrowseStoreSlider extends Component {
    render() {
        const imageStyle = {
            hight : 250
        };
        return (
            <Carousel indicators={false}>
                <Carousel.Item>
                    <img
                        className="w-100"
                        src={tv}
                        style={imageStyle}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3 className="text-dark">Browse all kinds of home appliances !</h3>
                        <a href="" className="btn btn-primary">Visit Now</a>
                    </Carousel.Caption>
                    
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="w-100"
                        src={food}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3 className="text-dark">Browse all kinds of home appliances !</h3>
                        <a href="" className="btn btn-primary">Visit Now</a>
                    </Carousel.Caption>

                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="w-100"
                        src={laptob}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3 className="text-dark">Browse all kinds of home appliances !</h3>
                        <a href="" className="btn btn-primary">Visit Now</a>
                    </Carousel.Caption>

                </Carousel.Item>
            </Carousel>
        )
    }
}

export default BrowseStoreSlider;