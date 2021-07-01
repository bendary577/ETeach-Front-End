
import React, { Component } from "react";
import '../../public/css/signin.css';
import AuthService from "../services/AuthService";
import { withRouter } from "react-router";

class SigninPage extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
          username: "",
          password: "",
          loading: false,
          message: ""
        };
      }

    onChangeUsername = (e) => {
        this.setState({
          username: e.target.value
        });
    }
    
    onChangePassword = (e) => {
        this.setState({
          password: e.target.value
        });
    }

    handleLogin = async (e) => {
        e.preventDefault();
    
        this.setState({
          message: "",
          loading: true
        });

        const data = {
            username : this.state.username,
            password : this.state.password,
        }

        let response = await AuthService.login(data);

        if(response.status === "OK"){
            console.log("hamaaaaaaaaaaaaaaaaaaaaaaaada")
           // return (<Redirect to='/profile' />);
           this.props.history.push('/profile');
           window.location.reload();
        }else{
            console.log('response is ' + response);
        }
           
    }

    render() {
        return (
            <div class="container">
                <div class="row">
                <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
                    <div class="card card-signin my-5">
                    <div class="card-body">

                        <div className="w-100">
                            <h5 class="card-title text-center font-weight-bold">Sign In</h5>
                        </div>

                        <form class="mt-5" onSubmit={this.handleLogin}>
                       
                        <div class="form-label-group mb-2">
                            <label for="inputEmail">Username</label>
                            <input type="text" onChange={this.onChangeUsername} id="inputEmail" class="form-control" placeholder="Email address" required autoFocus />
                        </div>

                        <div class="form-label-group mb-2">
                            <label for="inputPassword">Password</label>
                            <input type="password" onChange={this.onChangePassword} id="inputPassword" class="form-control" placeholder="Password" required /> 
                        </div>

                        <div class="custom-control custom-checkbox mb-3">
                            <input type="checkbox" class="custom-control-input" id="customCheck1" />
                            <label class="custom-control-label" for="customCheck1">Remember password</label>
                        </div>
                        <button class="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Sign in</button>
                        
                        {/*
                        <hr class="my-4" />
                        <button class="btn btn-lg btn-danger btn-block text-uppercase" type="submit"><i class="fab fa-google mr-2"></i> Sign in with Google</button>
                        <button class="btn btn-lg btn-success btn-block text-uppercase" type="submit"><i class="fab fa-facebook-f mr-2"></i> Sign in with Facebook</button>
                        */}
                        <hr class="my-4" />
                        <div className="text-center">
                            <p>don't have an account ? </p>
                        </div>
                        <a href="/signup" class="btn btn-lg btn-success btn-block text-uppercase"> Sign Up</a>
                        </form>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        );
    }
}

export default withRouter(SigninPage);
