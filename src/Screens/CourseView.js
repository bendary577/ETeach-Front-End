import React, { Component } from 'react';
import '../../public/css/store.css';
import AccNavbar from '../ScreenSnippets/accounts/AccNavbar';
import Footer from '../ScreenSnippets/accounts/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import CoursesServices from '../services/CoursesServices';

class CourseView extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
          course : {}
        };
    }

    componentDidMount = async () => {
        console.log("course view")
        /*
        //this.props.location.state.course_id
        console.log("heeeeeeeeeeeeeeeeeeeeeere in course view")
        console.log("heeeeeeeeeeeeeeeeeeeeeere" + this.props.match.params.id)
        let response = await CoursesServices.getCourse(this.props.match.params.id);
        if(response.status === "OK"){
            this.setState({
                course : response.data
            })
        }
        */
    }

    render() {
        return (
            <div className="parent" >
            <AccNavbar />
            <div className="container">
                <div class="row my-5">
                    <div className="col-md-12">
                        <div className="card">
                            <div class="card-body bg-light p-20">
                                {/* -------------------------- description --------------------------------------- */}
                                <div className="course-info clearfix">
                                        <div className="float-left">
                                            <h1 class="display-4">{this.state.course.name}</h1>
                                            <h5 class="text-primary">{this.state.course.category.name}</h5>
                                            <h5 class="text-success">${this.state.course.price} EG.P</h5>
                                        </div>

                                        <div className="float-right">
                                            <div className="d-flex">
                                                <p className="text-success mr-2">4.6</p>
                                                <FontAwesomeIcon icon={faStar} className="checked"></FontAwesomeIcon>
                                                <FontAwesomeIcon icon={faStar} className="checked"></FontAwesomeIcon>
                                                <FontAwesomeIcon icon={faStar} className="checked"></FontAwesomeIcon>
                                                <FontAwesomeIcon icon={faStar} className="checked"></FontAwesomeIcon>
                                                <FontAwesomeIcon icon={faStar} className="checked"></FontAwesomeIcon>
                                            </div>
                                            <h5 className="text-success"> 8 ratings</h5>
                                        </div>  
                                        
                                </div>
                                <p class="lead">{this.state.course.description}</p>
                            </div>

                                {/* ------------------------------- rate course now ---------------------------------- */}

                            <div className="card-footer w-100 d-flex justify-content-around">
                                <p className="font-weight-bold mt-3">Rate our Course ! it will not take a second</p>
                                <a href="#"  className="mt-3" data-toggle="modal" data-target="#rateProduct">
                                    <div className="d-flex">
                                        <FontAwesomeIcon icon={faStar} className="mr-2 p-0 mt-1"></FontAwesomeIcon>
                                        <h5>Rate Course Now!</h5>
                                    </div>
                                </a>
                            </div>
                            
                            {/*----------------------- Modal -------------------------*/}
                            <div class="modal fade" id="rateProduct" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog" role="document">
                                    <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="exampleModalLabel">Rating</h5>
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div class="modal-body">
                                        <div className="d-flex w-10 justify-content-center">
                                            <a href="" ><FontAwesomeIcon icon={faStar} className="checked mr-5" ></FontAwesomeIcon></a>
                                            <a href="" ><FontAwesomeIcon icon={faStar} className="checked mr-5" ></FontAwesomeIcon></a>
                                            <a href="" ><FontAwesomeIcon icon={faStar} className="checked mr-5" ></FontAwesomeIcon></a>
                                            <a href="" ><FontAwesomeIcon icon={faStar} className="checked mr-5" ></FontAwesomeIcon></a>
                                            <a href="" ><FontAwesomeIcon icon={faStar} className="checked mr-5" ></FontAwesomeIcon></a>
                                        </div>
                                    </div>
                                    <div class="modal-footer text-center">
                                        <button type="button" class="btn btn-primary">Save changes</button>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* -------------------------- trailer --------------------------------------- */}
                        <div className="trailer">
                            <video width="100%" height="500" autoplay controls="true" src="www.youtube.com/watch?v=3bGNuRtlqAQ" type="video/mp4" />
                        </div>
                        {/* -------------------------- sections --------------------------------------- */}
                        <div className="sections bg-light p-4">
                            <div className="title">
                                <h4>Sections</h4>
                            </div>
                            <ul class="list-unstyled components">
                                <p class="text-white font-weight-bold text-center">welcome</p>
                                <li class="active card p-4">
                                    <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Home</a>
                                    <ul class="collapse list-unstyled" id="homeSubmenu">
                                        <li className="card p-4">
                                            <a href="#">Home 1</a>
                                        </li >
                                        <li className="card p-4">
                                            <a href="#">Home 2</a>
                                        </li>
                                        <li className="card p-4">
                                            <a href="#">Home 3</a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="active card p-4">
                                <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Pages</a>
                                    <ul class="collapse list-unstyled" id="pageSubmenu">
                                        <li className="card p-4">
                                            <a href="#">Page 1</a>
                                        </li>
                                        <li className="card p-4">
                                            <a href="#">Page 2</a>
                                        </li>
                                        <li className="card p-4">
                                            <a href="#">Page 3</a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>   
                        </div>
                        {/* -------------------------- what you will learn --------------------------------------- */}
                        <div className="my-4">
                            <div className="title">
                                <h4>What You Will Learn</h4>
                            </div>
                            {
                                this.state.course.whatWillStudentLearn.length === 0 ? 
                                <div class="card" >
                                    <h4 className="alert alert-danger">Sorry, no further details</h4>
                                </div>
                                :
                                <div class="card" >
                                    <ul class="list-group list-group-flush">
                                        {
                                            this.state.course.whatWillStudentLearn.map(learnSentence =>
                                                <li class="list-group-item" key={learnSentence.id}>{learnSentence.sentence}</li>
                                            )
                                        }
                                    </ul>
                                </div>
                            }
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
                                <h4>{this.state.course.teacherAccount.user.username}</h4>
                                <p class="text-secondary mb-1">Teacher</p>
                                <p class="text-muted font-size-sm">{this.state.course.teacherAccount.about_description}</p>
                                <button class="btn btn-primary">Follow</button>
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
                    </div>
                </div>
            </div>
            <Footer />
        </div>
        )
    }
}

export default CourseView;