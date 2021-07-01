
import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import { faMoneyBill } from "@fortawesome/free-solid-svg-icons";
import AccNavbar from "../ScreenSnippets/accounts/AccNavbar";
import Footer from "../ScreenSnippets/accounts/Footer";


class Categories extends Component {

    state = {
        categories: []
      }
    
    componentDidMount() {
        axios.get("http://127.0.0.1:8000/api/orders/")
          .then(res => {
            const categories = res.data;
            this.setState({ categories });
          })
    }

    render() {

        return (
            <div className="parent">

                <AccNavbar />

                    <div className="container" style={{height:500}}>
                        <div className="intro-headline d-flex my-5">
                            <FontAwesomeIcon icon={faMoneyBill} className=" fa-2x mr-2 mt-1"></FontAwesomeIcon>
                            <h2 className="font-weight-bold">Categories</h2>
                        </div>

                        <div className="my-3">
                            <button className="btn btn-success">Add New Category</button>
                        </div>

                        <div className="content">
                                { this.state.categories === [] ? 
                                    <div className="noOrders my-5 d-flex">
                                    <h1>no categories are available yet!</h1>
                                    <div className="mx-5">
                                        <a href="/stores" className="btn btn-lg btn-success">Add a Category Now !</a>
                                    </div>
                                </div>
                                :    
                                <table class="table table-striped">
                                <thead>
                                    <tr>
                                        <th>Category Name</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.categories.map(category =><tr key={category.id}>
                                                                        <td>{category.name}</td>
                                                                        <td>
                                                                            <a href="/orderdetails" className="btn btn-md btn-warning">update</a>
                                                                            <a href="/orderdetails" className="btn btn-md btn-danger">delete</a>
                                                                        </td>
                                                                    </tr>
                                                        )}
                                </tbody>
                            </table>
                           
                                }            
                        </div>
                    </div>
                <Footer />
            </div>
        );
    }
}

export default Categories;
