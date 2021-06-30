import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import "../../public/css/signup.css";


class Signup extends Component {

    state = {
        firstname:'',
        secondname: '',
        email: '',
        password:'',
        confirmpassword:'',
        phonenumber: '',
        birthday: '',
        specialization: '',
        address: '',
        province: '',
        city:'',
        zipcode:'',
        gender:''
      };

      handleChange = event => {
        this.setState({ firstname : event.target.value,
                        secondname : event.target.value,
                        email : event.target.value,
                        password : event.target.value,
                        confirmpassword : event.target.value,
                        phonenumber : event.target.value,
                        birthday : event.target.value,
                        specialization : event.target.value,
                        address : event.target.value,
                        province: event.target.value,
                        city: event.target.value,
                        zipcode: event.target.value,
                        gender: event.target.value,  
                    });
      };
    
      handleSubmit = event => {
        event.preventDefault();
        const user = {
            firstname : this.state.firstname,
            secondname : this.state.secondname,
            email : this.state.email,
            password : this.state.password,
            confirmpassword : this.state.confirmpassword,
            phonenumber : this.state.phonenumber,
            birthday : this.state.birthday,
            specialization: this.state.specialization,
            address: this.state.address,
            province: this.state.province,
            city: this.state.city,
            zipcode: this.state.zipcode,
            gender: this.state.gender
        };
        axios.post(`https://jsonplaceholder.typicode.com/users`, { user })
              .then(res => {
                    console.log(res);
                    console.log(res.data);
      })
    }

    render() {
        return (
            <div class="container">
                <div class="row">
                <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
                    <div class="card card-signin my-5">
                    <div class="card-body">
                        <h5 class="card-title text-center my-3">Sign Up</h5>
                        <form class="form-signin">
                            
                        <div class="form-label-group">
                            <label for="inputEmail">Email address</label>
                            <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus />
                        </div>

                        <div class="form-label-group">
                            <label for="inputPassword">Username</label>
                            <input type="password" id="inputPassword" class="form-control" placeholder="Password" required /> 

                        </div>

                        <div class="form-label-group">
                            <label for="inputPassword">Password</label>
                            <input type="password" id="inputPassword" class="form-control" placeholder="Password" required /> 

                        </div>

                        <div class="form-label-group">
                            <label for="inputPassword">Confiem Password</label>
                            <input type="password" id="inputPassword" class="form-control" placeholder="Password" required /> 
                        </div>


                        <div class="custom-control custom-checkbox mb-3">
                            <input type="checkbox" class="custom-control-input" id="customCheck1" />
                            <label class="custom-control-label" for="customCheck1">Remember password</label>
                        </div>
                        <button class="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Sign in</button>
                        <hr class="my-4" />
                        <button class="btn btn-lg btn-danger btn-block text-uppercase" type="submit"><i class="fab fa-google mr-2"></i> Sign in with Google</button>
                        <button class="btn btn-lg btn-success btn-block text-uppercase" type="submit"><i class="fab fa-facebook-f mr-2"></i> Sign in with Facebook</button>
                        </form>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        );
    }
}

export default Signup;
