import React , {Component} from 'react';
import app4 from "../../../public/images/Home/home-courses-1.png";
import app5 from "../../../public/images/Home/home-courses-2.png";


class Offers extends Component {
    render(){

        const imageStyle={
            width:400,
            height:400
        }

        return (
            <div className="offers" id="offers">
                <div className="container my-5">
                        <div className="">
                            <div className="text-center">
                                <h2 className="mb-4">What We Can Offer !</h2>
                                <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-12 col-lg-6">
                                <img src={app4} style={imageStyle} alt="" />
                            </div>
                            <div className="col-xs-12 col-lg-6">
                                <h3 className="mb-4">We Believe</h3>
                                <p className="mb-4">Trusted comes with tons of custom widgets, color options, font
                                    control and much more.</p>
                                <p className="mb-4">We aim to eliminate the task of dividing your project between different agency, corporate and business template. We are a company that offers services for our clients to solve problems and planing strategies for humanity all over the world.</p>
                            </div>
                        </div>
                        
                        {/**--------------------------------------second row---------------------------------------------- */}
                        <div className="row mt-5">
                            <div className="col-xs-12 col-lg-6">
                                <h3 className="mb-4">We Believe</h3>
                                <p className="mb-4">Trusted comes with tons of custom widgets, color options, font
                                    control and much more.</p>
                                <p className="mb-4">We aim to eliminate the task of dividing your project between different agency, corporate and business template. We are a company that offers services for our clients to solve problems and planing strategies for humanity all over the world.</p>
                            </div>
                            <div className="col-xs-12 col-lg-6">
                                <img src={app5} style={imageStyle} alt="" />
                            </div>
                        </div>
                </div>
            </div>
        )
    }
}

export default Offers;