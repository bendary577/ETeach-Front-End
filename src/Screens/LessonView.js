import React, { Component } from 'react';
import '../../public/css/store.css';
import AccNavbar from '../ScreenSnippets/accounts/AccNavbar';
import Footer from '../ScreenSnippets/accounts/Footer';
import store from '../../public/images/store.png';
import CoursesCarousel from '../Components/CoursesCarousel';

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
                        {/* -------------------------- description --------------------------------------- */}
                        <h1 class="display-4">Lesson Name</h1>
                        <h5 class="text-primary">computer science</h5>
                        </div>
                        {/* -------------------------- trailer --------------------------------------- */}
                        <div className="lesson">
                            <video width="100%" height="500" autoplay controls="true" src="www.youtube.com/watch?v=3bGNuRtlqAQ" type="video/mp4" />
                        </div>
                        {/* --------------------------about teacher --------------------------------------- */}          
                        <div className="my-4">
                            <div className="title">
                                <h4>About Teacher</h4>
                            </div>
                            <div class="card">
                            <div class="card-body">
                            <div class="d-flex flex-column align-items-center text-center">
                                <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" class="rounded-circle" width="150" />
                                <div class="mt-3">
                                <h4>John Doe</h4>
                                <p class="text-secondary mb-1">Full Stack Developer</p>
                                <p class="text-muted font-size-sm">Bay Area, San Francisco, CA</p>
                                <button class="btn btn-primary">Follow</button>
                                <button class="btn btn-outline-primary">Message</button>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>

                    </div>
                </div>
                <div className="row mb-5">
                    <div className="header">
                        <h3>Category Name</h3>
                    </div>
                    <div className="products">
                        {/* <CoursesCarousel /> */}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
        )
    }
}

export default CourseView;