import React, { Component } from 'react';
import money from "../../../public/images/Home/online-courses-1.jpg";

class Panal extends Component {
    render() {
        return (
            <div className="panal">
                <div className="container">
                    <image className="" src={money} alt="" />
                    <h2 className="text-dark">We Can Make Youe Rich</h2>
                    <p className="text-dark">you can use your moeny to busniss it in useful work</p>
                    <a className="btn btn-dark" href="/store">Store</a>
                </div>
            </div>
        )
    }
}

export default Panal;