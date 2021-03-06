import React, { Component } from "react";
import '../../public/css/authenticationpassword.css';

class ForgetPassword extends Component {
    render() {
        return (
            <div class="background-3">
                <div className="container d-flex justify-content-center align-items-center h-100">
                    <div className="">
                        <div class="card">
                            <div class="card-body bg-light">
                                <div className="">
                                    <h1>Forgot Your Password ?</h1>
                                    <h5 class="my-3">Confirm your mail and we will send the instructions</h5>
                                    <form>
                                        <div class="form-group">
                                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                                            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                                            <div class="text-center">
                                                <button type="submit" class="btn btn-primary my-4">Submit</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ForgetPassword;
