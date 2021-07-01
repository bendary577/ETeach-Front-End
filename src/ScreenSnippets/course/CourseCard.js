import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons';
import "../../../public/css/itemcartcard.css";
import product from "../../../public/images/Products/shoes.jpg";
import {Link } from 'react-router-dom';


class CourseCard extends Component {

    render() {
        return (
            <div class="card w-100 m-0 itemcartcard border">
                <img src={product} calssName="card-img img-responsive" />
                <div className="card-body">
                    <div className="clearfix">
                        <h6 className="float-left">{this.props.course.name}</h6>
                        <div className="float-right">
                            <FontAwesomeIcon icon={faStar} className="checked"></FontAwesomeIcon>
                            <FontAwesomeIcon icon={faStar} className="checked"></FontAwesomeIcon>
                            <FontAwesomeIcon icon={faStar} className="checked"></FontAwesomeIcon>
                            <FontAwesomeIcon icon={faStar} className="checked"></FontAwesomeIcon>
                            <FontAwesomeIcon icon={faStarHalf} className="checked"></FontAwesomeIcon>
                        </div>
                    </div>

                    <div class="course_details">
                        <p>{this.props.course.description}</p>
                    </div>

                    <div className="my-2">
                       {/*
                        <Link
                            className="btn btn-success btn-block"
                            to={{
                                pathname: "/view_course",
                                state: {
                                    course_id : this.props.course.id
                                }
                            }}>
                            See Course Details 
                        </Link>
                        */}
                        {/*
                        <Link
                            className="btn btn-success btn-block"
                            to={`/view_course/${this.props.course.id}`}>
                            See Course Details 
                        </Link>
                        */}
                    </div>

                </div>
            </div>
        );
    }
}

    export default CourseCard;
