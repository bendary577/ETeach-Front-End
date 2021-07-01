
import React, { Component } from "react";
import AccNavbar from "../ScreenSnippets/accounts/AccNavbar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Footer from "../ScreenSnippets/accounts/Footer";
import CartItemInfoCard from "../Components/Cards/CartItemInfoCard";
import axios from 'axios';

class GetRequestRegistrationCode extends Component {

    state = {
        cartproducts: [],
        code_available : true
    }

    componentDidMount() {
        axios.get('http://127.0.0.1:8000/cart')
            .then(res => {
                const cartproducts = res.data;
                this.setState({ cartproducts });
            })
    }

    render() {

        return (
            <div className="parent" >

                <AccNavbar />

                <div className="container">

                    <div className="intro-headline d-flex my-5">
                        <FontAwesomeIcon icon={faShoppingCart} className=" fa-2x mr-2 mt-1"></FontAwesomeIcon>
                        <h2 className="font-weight-bold">Course Registration</h2>
                    </div>

                    <div className="content d-flex justify-content-center align-items-center text-center">
                         <div className="noOrders my-5" style={{ height: 500 }}>
                                <h1>Head to our office at 7 ismael kamel street Helwan Cairo to deliver the code and register in the course. thanks for your time !</h1>
                                <div className="mx-5">
                                    <a href="/stores" className="btn btn-lg btn-success">request course code</a>
                                </div>
                                {
                                    this.state.code_available === true ? 
                                    <div className="alert alert-success my-3">
                                        <h4 className="text-success">Code is : 12345</h4>
                                    </div>
                                    :
                                    <div></div>
                                }
  
                            </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default GetRequestRegistrationCode;
