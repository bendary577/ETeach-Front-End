import React, { Component } from "react";
import StoreCard from "../ScreenSnippets/store/CourseCard";


class CoursesCarousel extends Component {

    render() {
        return (
            <div className="parent-div">


                    {/* --------------------------- indicators ------------------------------- */}
                        <div id="multi-item-example" class="carousel slide carousel-multi-item" data-ride="carousel">

                            <div class="controls-top text-center">
                                <a class="btn btn-floating" href="#multi-item-example" data-slide="prev"><i class="fa fa-chevron-left"></i></a>
                                <a class="btn btn-floating" href="#multi-item-example" data-slide="next"><i class="fa fa-chevron-right"></i></a>
                            </div>

                            <ol class="carousel-indicators">
                                <li data-target="#multi-item-example" data-slide-to="0" class="active"></li>
                                <li data-target="#multi-item-example" data-slide-to="1"></li>
                                <li data-target="#multi-item-example" data-slide-to="2"></li>
                            </ol>

                            <div class="carousel-inner" role="listbox">

                            <div class="carousel-item active">

                                <div class="row">
                                <div class="col-md-4">
                                    <StoreCard />
                                </div>

                                <div class="col-md-4 clearfix d-none d-md-block">
                                    <StoreCard />
                                </div>

                                <div class="col-md-4 clearfix d-none d-md-block">
                                    <StoreCard />
                                </div>
                                </div>

                            </div>

                            <div class="carousel-item">

                                <div class="row">
                                <div class="col-md-4">
                                    <StoreCard />
                                </div>

                                <div class="col-md-4 clearfix d-none d-md-block">
                                    <StoreCard />
                                </div>

                                <div class="col-md-4 clearfix d-none d-md-block">
                                    <StoreCard />
                                </div>
                                </div>

                            </div>

                            <div class="carousel-item">

                                <div class="row">
                                <div class="col-md-4">
                                    <StoreCard />
                                </div>

                                <div class="col-md-4 clearfix d-none d-md-block">
                                    <StoreCard />
                                </div>

                                <div class="col-md-4 clearfix d-none d-md-block">
                                     <StoreCard />
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
{/* ---------------------------------- end carousel ------------------- */}
                    </div>

        );
    }
}

export default CoursesCarousel;
