import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import StoreItem from '../../Components/StoreItem';

class Recommend extends Component {
    render() {
        return (
            <div className="recommend text-center">
                <h2>Recommend For You</h2>
                <Carousel indicators={false}>
                    <Carousel.Item>
                        <div className="row">
                            <div className="col-4">
                                <StoreItem />
                            </div>
                            <div className="col-4">
                                <StoreItem />
                            </div>
                            <div className="col-4">
                                <StoreItem />
                            </div>
                        </div>
                    </Carousel.Item>

                    <Carousel.Item>
                        <div className="row">
                            <div className="col-4">
                                <StoreItem />
                            </div>
                            <div className="col-4">
                                <StoreItem />
                            </div>
                            <div className="col-4">
                                <StoreItem />
                            </div>
                        </div>
                    </Carousel.Item>
                </Carousel>
            </div>
        )
    }
}

export default Recommend;