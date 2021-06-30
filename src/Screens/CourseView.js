import React, { Component } from 'react';
import '../../public/css/store.css';
import AccNavbar from '../ScreenSnippets/accounts/AccNavbar';
import Footer from '../ScreenSnippets/accounts/Footer';
import store from '../../public/images/store.png';
import ProductCarousel from '../Components/ProductsCarousel';
class CourseView extends Component {
    render() {
        const storeImgStyle = {
            width : "100%",
            height : "100%"
        }
        return (
            <div className="parent" >

            <AccNavbar />

            <div className="container">
                <div class="row my-5">
                    <div className="col-md-12">
                        <div class="jumbotron">
                        <h1 class="display-4">Course Name</h1>
                        <h5 class="text-success">computer science</h5>
                        <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                        </div>
                        <div className="trailer">
                            <video width="100%" height="500" autoplay controls="true" src="www.youtube.com/watch?v=3bGNuRtlqAQ" type="video/mp4" />
                        </div>
                        <div className="sections bg-light p-4">
                            <div className="title">
                                <h4>Sections</h4>
                            </div>
                            <ul class="list-unstyled components">
                                <p class="text-white font-weight-bold text-center">welcome</p>
                                <li class="active">
                                    <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Home</a>
                                    <ul class="collapse list-unstyled" id="homeSubmenu">
                                        <li>
                                            <a href="#">Home 1</a>
                                        </li>
                                        <li>
                                            <a href="#">Home 2</a>
                                        </li>
                                        <li>
                                            <a href="#">Home 3</a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Pages</a>
                                    <ul class="collapse list-unstyled" id="pageSubmenu">
                                        <li>
                                            <a href="#">Page 1</a>
                                        </li>
                                        <li>
                                            <a href="#">Page 2</a>
                                        </li>
                                        <li>
                                            <a href="#">Page 3</a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>   
                        </div>
                    </div>
                </div>
                <div className="row mb-5">
                    <div className="header">
                        <h3>Category Name</h3>
                    </div>
                    <div className="products">
                        <ProductCarousel />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
        )
    }
}

export default CourseView;