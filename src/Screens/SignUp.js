import React, { Component } from "react";
import "../../public/css/signup.css";
import GeneralRequests from "../services/GeneralRequests";
import AuthService from "../services/AuthService";
import { withRouter } from "react-router";

class Signup extends Component {

    constructor(props) {
        super(props);
      
        this.state = { 
            username : '',
            email: '',
            password:'',
            confirmpassword:'',
            phone_number : '',
            accountType : null,
            grade : '',
            address: '',
            subject : '',
            facebook_link : '',
            twitter_link : '',
            isStudent : false,
            isTeacher : false,
            categories : [],
         };
      }
    
      handleRegister = async (e) => {
        e.preventDefault();

        const data = {
            username : this.state.username,
            email : this.state.email,
            password : this.state.password,
            phone_number : this.state.phone_number,
            accountType : this.state.accountType,
        };

        if(this.state.accountType === 0){
            data.grade = this.state.grade;
            data.address = this.state.address;
        }else if (this.state.accountType === 1) {
            data.subject = this.state.subject;
            data.facebook_link = this.state.facebook_link;
            data.twitter_link = this.state.twitter_link;
        }

        let response = await AuthService.register(data);

        if(response.status === "OK"){
            console.log("$$$$$$$$$$$$$$$$$$$$$$ heeeeeeeeeeeeeeeeeeeeeeeeeeeeer")
           this.props.history.push('/signin');
           window.location.reload();
        }else{
            console.log('response is ' + response);
        }  
    }

    handleUsernameChange = (e) => {
        this.setState({
          username : e.target.value
        });
    }

    handleEmailChange = (e) => {
        this.setState({
          email : e.target.value
        });
    }

    handlePasswordChange = (e) => {
        this.setState({
          password: e.target.value
        });
    }

    handleConfirmPasswordChange = (e) => {
        this.setState({
          confirmpassword: e.target.value
        });
    }

    handlePhoneNumberChange = (e) => {
        this.setState({
          phone_number: e.target.value
        });
    }

    handleSubjectChange = (e) => {
        this.setState({
            subject : e.target.value
        });
    }

    handleGradeChange = (e) => {
        this.setState({
            grade : e.target.value
        });
    }

    handleFacebookLinKChange = (e) => {
        this.setState({
            facebook_link : e.target.value
        });
    }

    handleTwitterLinkChange = (e) => {
        this.setState({
            twitter_link : e.target.value
        });
    }

    handleAddressChange = (e) => {
        this.setState({
            address : e.target.value
        });
    }

    handleStudentAccount = () => {
        this.setState({ 
            accountType : 0,
            isStudent : true,
            isTeacher : false,
        });
      };

    handleTeacherAccount = async () => {
        let data = await GeneralRequests.getAllCategories();
        console.log(data)
        this.setState({ 
            accountType : 1,
            isStudent : false,
            isTeacher : true,
            categories : data
        });
    };

    render() {
        return (
            <div class="container">
                <div class="row">
                <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
                    <div class="card card-signin my-5">
                    <div class="card-body">

                        <div className="w-100">
                            <h5 class="card-title text-center font-weight-bold">Sign Up</h5>
                        </div>

                        <form class="mt-5" onSubmit={this.handleRegister}>
                            <div class="form-label-group mb-2">
                                <label for="inputEmail">Email address</label>
                                <input type="email" onChange={this.handleEmailChange} id="inputEmail" class="form-control" placeholder="Email address" required autofocus />
                            </div>

                            <div class="form-label-group mb-2">
                                <label for="inputPassword">Username</label>
                                <input type="text" onChange={this.handleUsernameChange} id="inputPassword" class="form-control" placeholder="Password" required /> 
                            </div>

                            <div class="form-label-group mb-2">
                                <label for="inputPassword">Password</label>
                                <input type="password" onChange={this.handlePasswordChange} id="inputPassword" class="form-control" placeholder="Password" required /> 

                            </div>

                            <div class="form-label-group mb-2">
                                <label for="inputPassword">Confirm Password</label>
                                <input type="password" onChange={this.handleConfirmPasswordChange} id="inputPassword" class="form-control" placeholder="Confirm Password" required /> 
                            </div>

                            <div class="form-label-group mb-2">
                                <label for="inputPassword">Phone Number</label>
                                <input type="text" onChange={this.handlePhoneNumberChange} id="inputPassword" class="form-control" placeholder="Phone Number" required /> 
                            </div>

                            <div class="form-label-group d-flex justify-content-center text-center my-4">
                                <div className="w-50">
                                    <button className="btn btn-warning" onClick={this.handleStudentAccount}>Studetn Account</button>
                                </div>
                                <div className="w-50">
                                    <button className="btn btn-success" onClick={this.handleTeacherAccount}>Teacher Account</button>
                                </div>
                            </div>

                           {/* <div class="custom-control custom-checkbox mb-3">
                                <input type="checkbox" class="custom-control-input" id="customCheck1" />
                                <label class="custom-control-label" for="customCheck1">Student Account</label>
                            </div>
                            */}

                            {/* ------------------------------------------- student section ------------------------------ */}
                            {
                                this.state.isStudent ? 
                                <div className="my-2">
                                    <div class="form-label-group mb-2">
                                        <label for="inputPassword">Grade</label>
                                        <select class="form-control" onChange={this.handleGradeChange}>
                                            <option value="first primary" >first primary</option>
                                            <option value="second primary">second primary</option>
                                            <option value="third primary">third primary</option>
                                            <option value="fourth primary">fourth primary</option>
                                            <option value="fifth primary">fifth primary</option>
                                            <option value="sixth primary">sixth primary</option>
                                            <option value="first preparatory">first preparatory</option>
                                            <option value="second preparatory">second preparatory</option>
                                            <option value="third preparatory">third preparatory</option>
                                            <option value="first secondary">first secondary</option>
                                            <option value="second secondary">second secondary</option>
                                            <option value="third secondary">third secondary</option>
                                        </select>
                                    </div>
                                    <div class="form-label-group mb-2">
                                        <label for="inputPassword">Address</label>
                                        <input type="text" onChange={this.handleAddressChange} id="inputPassword" class="form-control" placeholder="address" required /> 
                                    </div>
                                </div>
                                :
                                <div></div>
                            }

                            {/* ------------------------------------------- teacher section ------------------------------ */}
                                                        {
                                this.state.isTeacher ? 

                                <div className="my-2">
                                    {
                                        this.state.categories.length === 0 ? 
                                    <div className="alert alert-danger">Sorry, no categories available</div>
                                    :
                                    <div class="form-label-group mb-2">
                                        <label for="inputPassword">Category</label>
                                        <select class="form-control" onChange={this.handleSubjectChange}>
                                            <option>select category</option>
                                            {this.state.categories.map(category =>
                                                <option key={category.id} value={category.name}>{category.name}</option>
                                            )}
                                        </select>
                                    </div>
                                    }

                                    <div class="form-label-group mb-2">
                                        <label for="inputPassword">Facebook account</label>
                                        <input type="text" onChange={this.handleFacebookLinKChange} id="inputPassword" class="form-control" placeholder="facebook account" required /> 
                                    </div>
                                    <div class="form-label-group">
                                        <label for="inputPassword">twitter account</label>
                                        <input type="text" onChange={this.handleTwitterLinkChange} id="inputPassword" class="form-control" placeholder="twitter account" required /> 
                                    </div>
                                </div>
                                :
                                <div></div>
                            }

                            {/* -------------------------------------- sign up ----------------------------------------- */}
                            <button class="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Sign up</button>
                        </form>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        );
    }
}

export default withRouter(Signup);
