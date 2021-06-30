import React, { Component } from "react";
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import "../../public/css/accsidenavbar.css";

class BrowseCoursesSideNav extends Component {

    state = {
        rating: '',
        stores: '',
      }
    
    handleChange = event => {
        event.preventDefault();
        this.setState({ rating: event.target.value });

        axios.get(`https://jsonplaceholder.typicode.com/stores`)
             .then(res => {
                const stores = res.data;
                this.setState({ stores });
            })
      }

    render() {
        return (    

            <div class="bg-light border-right" id="sidebar-wrapper">
                <div class="sidebar-heading">My Easy account </div>
                <div class="list-group list-group-flush">
                    <a href="#" class="list-group-item list-group-item-action bg-light">Orders number <strong className="text-success ml-3">0</strong></a>
                    <a href="#" class="list-group-item list-group-item-action bg-light">Overview</a>
                    <div class="rating list-group-item-action  ">
                        <p className="ml-3 mt-2">Stores Ratings</p>
                        <ul class="items-list ml-3">
                            <li>
                                <div class="clearfix">
                                    <div className="float-left">
                                        <div className="d-flex">
                                            <input type="radio" id="male" name="gender" className="mt-2"/>
                                            <div className="ml-2">
                                                <FontAwesomeIcon icon={faStar} className="checked"></FontAwesomeIcon>
                                                <FontAwesomeIcon icon={faStar} className="checked"></FontAwesomeIcon>
                                                <FontAwesomeIcon icon={faStar} className="checked"></FontAwesomeIcon>
                                                <FontAwesomeIcon icon={faStar} className="checked"></FontAwesomeIcon>
                                                <FontAwesomeIcon icon={faStar} className="checked"></FontAwesomeIcon>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="float-right mr-3">
                                        <div className="bagde rounded bg-dark">
                                            <p className="text-white px-1">55</p>
                                        </div>
                                    </div>        
                                </div>
                            </li>

                            <li>
                                <div class="clearfix">
                                    <div className="float-left">
                                        <div className="d-flex">
                                            <input type="radio" id="male" name="gender" className="mt-2"/>
                                            <div className="ml-2 d-flex">
                                                <FontAwesomeIcon icon={faStar} className="checked"></FontAwesomeIcon>
                                                <FontAwesomeIcon icon={faStar} className="checked"></FontAwesomeIcon>
                                                <FontAwesomeIcon icon={faStar} className="checked"></FontAwesomeIcon>
                                                <FontAwesomeIcon icon={faStar} className="checked"></FontAwesomeIcon>
                                                <p className="ml-1">or more</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="float-right mr-3">
                                        <div className="bagde rounded bg-dark">
                                            <p className="text-white px-1">55</p>
                                        </div>
                                    </div>        
                                </div>
                            </li>

                            <li>
                                <div class="clearfix">
                                    <div className="float-left">
                                        <div className="d-flex">
                                            <input type="radio" id="male" name="gender" className="mt-2"/>
                                            <div className="ml-2 d-flex">
                                                <FontAwesomeIcon icon={faStar} className="checked"></FontAwesomeIcon>
                                                <FontAwesomeIcon icon={faStar} className="checked"></FontAwesomeIcon>
                                                <FontAwesomeIcon icon={faStar} className="checked"></FontAwesomeIcon>
                                                <p className="ml-2">or more</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="float-right mr-3">
                                        <div className="bagde rounded bg-dark">
                                            <p className="text-white px-1">0</p>
                                        </div>
                                    </div>        
                                </div>
                            </li>

                            <li>
                                <div class="clearfix">
                                    <div className="float-left">
                                        <div className="d-flex">
                                            <input type="radio" id="male" name="gender" className="mt-2"/>
                                            <div className="ml-2 d-flex">
                                                <FontAwesomeIcon icon={faStar} className="checked"></FontAwesomeIcon>
                                                <FontAwesomeIcon icon={faStar} className="checked"></FontAwesomeIcon>
                                                <p className="ml-2">or more</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="float-right mr-3">
                                        <div className="bagde rounded bg-dark">
                                            <p className="text-white px-1">12</p>
                                        </div>
                                    </div>        
                                </div>
                            </li>

                            <li>
                                <div class="clearfix">
                                    <div className="float-left">
                                        <div className="d-flex">
                                            <input type="radio" id="male" name="gender" className="mt-2"/>
                                            <div className="ml-2 d-flex">
                                                <FontAwesomeIcon icon={faStar} className="checked"></FontAwesomeIcon>
                                                <p className="ml-2">or more</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="float-right mr-3">
                                        <div className="bagde rounded bg-dark">
                                            <p className="text-white px-1">34</p>
                                        </div>
                                    </div>        
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className="sellerbadge ">
                    <p className="ml-3 mt-2">Seller Level</p>
                        <ul class="items-list ml-3">
                            <li>
                                <div class="clearfix">
                                    <div className="float-left">
                                        <div className="d-flex">
                                            <input type="checkbox" id="badge" name="badge" className="mt-2"/>
                                            <div className="ml-2">
                                                <p>golden seller</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="float-right mr-3">
                                        <div className="bagde rounded bg-dark">
                                            <p className="text-white px-1">55</p>
                                        </div>
                                    </div>        
                                </div>
                            </li>
                            <li>
                                <div class="clearfix">
                                    <div className="float-left">
                                        <div className="d-flex">
                                            <input type="checkbox" id="badge" name="badge" className="mt-2"/>
                                            <div className="ml-2">
                                                <p>silver seller</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="float-right mr-3">
                                        <div className="bagde rounded bg-dark">
                                            <p className="text-white px-1">17</p>
                                        </div>
                                    </div>        
                                </div>
                            </li>
                            <li>
                                <div class="clearfix">
                                    <div className="float-left">
                                        <div className="d-flex">
                                            <input type="checkbox" id="badge" name="badge" className="mt-2"/>
                                            <div className="ml-2">
                                                <p>bronze seller</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="float-right mr-3">
                                        <div className="bagde rounded bg-dark">
                                            <p className="text-white px-1">5</p>
                                        </div>
                                    </div>        
                                </div>
                            </li>
                        </ul>
                    </div>
                    
                    <a href="#" class="list-group-item list-group-item-action bg-light">Help</a>
                    <a href="#" class="list-group-item list-group-item-action bg-light">Privacy Policy</a>
                    <a href="#" class="list-group-item list-group-item-action bg-light">Terms and Service</a>
            
                </div>
            </div>

        );
    }
}

export default BrowseCoursesSideNav;
