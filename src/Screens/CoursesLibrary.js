import React, { Component } from "react";
import AccNavbar from "../ScreenSnippets/accounts/AccNavbar";
import BrowseCoursesSideNav from "../Components/BrowseCoursesSideNav";
import CategoriesNavbar from "../ScreenSnippets/accounts/CategoriesNavbar";
import CoursesCarousel from "../Components/CoursesCarousel";
import Footer from "../ScreenSnippets/accounts/Footer";
import "../../public/css/stores.css";
import CoursesServices from "../services/CoursesServices";


class CoursesLibrary extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
          categories : []
        };
    }

    componentDidMount = async () => {
        let response = await CoursesServices.getCategoriesCourses();
        if(response.status === "OK"){
            this.setState({
                categories : response.data
            })
        }
    }

    render() {

        return (
            <div>
                <div className="d-flex" id="wrapper">
                    <BrowseCoursesSideNav />
                    <div id="page-content-wrapper">
                        <AccNavbar />
                        <CategoriesNavbar />

                        <div class="container-fluid">
                            {
                                this.state.categories.length === 0 ? 
                                <div className="text-center">
                                    <h2 className="text-danger">Sorry, no categories yet!</h2>
                                </div>
                                :
                                
                                this.state.categories.map(category =>
                                    <div className="mt-5" key={category.id}>
                                        <div className="my-3">
                                            <h3>{category.name}</h3>
                                        </div>
                                        <CoursesCarousel courses={category.courses} />
                                    </div>
                                )

                            }
                    </div>
                </div>
            </div>
            <Footer />
        </div>
        );
    }
}

export default CoursesLibrary;
