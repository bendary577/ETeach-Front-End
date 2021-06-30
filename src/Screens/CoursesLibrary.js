import React, { Component } from "react";
import AccNavbar from "../ScreenSnippets/accounts/AccNavbar";
import BrowseCoursesSideNav from "../Components/BrowseCoursesSideNav";
import CategoriesNavbar from "../ScreenSnippets/accounts/CategoriesNavbar";
import CoursesCarousel from "../Components/CoursesCarousel";
import Footer from "../ScreenSnippets/accounts/Footer";
import "../../public/css/stores.css";

class CoursesLibrary extends Component {


    render() {

        return (
            <div>
                <div className="d-flex" id="wrapper">
                    <BrowseCoursesSideNav />
                    <div id="page-content-wrapper">
                        <AccNavbar />
                        <CategoriesNavbar />

                        <div class="container-fluid">

                            <div className="mt-5">
                                <div className="my-3">
                                    <h4>Computer Science</h4>
                                </div>
                                <CoursesCarousel />
                            </div>

                            <div className="my-5">
                            <div className="my-3">
                                    <h4>Mathematics</h4>
                                </div>
                                <CoursesCarousel />
                            </div>

                    </div>
                </div>
            </div>
            <Footer />
        </div>

            

        );
    }
}

export default CoursesLibrary;
