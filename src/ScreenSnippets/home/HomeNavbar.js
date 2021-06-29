import React, { Component } from "react";
import "../../../public/css/accnavbar.css";
import egypt from "../../../public/icons/home/egypt.png";
import logo from '../../../public/images/Home/logo.png';

class HomeNavbar extends Component {
    render() {
        const langIconStyle={
            width:30,
            height:30
        };

        const logoStyle = {
            width: 70,
            height: 70,
            marginTop : 5
          };

        return (

            <nav className="topnavigation navbar navbar-expand-sm bg-light navbar-light d-flex">
                    <div className="">
                        {/*------------------------- brand logo ----------------------------------------------*/}
                        <a className="navbar-brand font-weight-bold" href="#">
                            <img src={logo} alt="Logo"  style={logoStyle}/>
                            Eteach
                        </a>
                    </div>
                    <div className="ml-auto">
                        {/*------------------------- collapsing button ---------------------------------------*/}

                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        {/*------------------------- nav links ----------------------------------------------*/}

                        <div className="ml-5 collapse navbar-collapse accLinks" id="collapsibleNavbar">
                            <ul className="navbar-nav mr-3">
                                <li className="nav-item mt-2">
                                    <a className="nav-link text-dark" href="#services">services</a>
                                </li>
                                <li className="nav-item mt-2">
                                    <a className="nav-link" href="/#about">about us</a>
                                </li>
                                <li className="nav-item mt-2">
                                    <a className="nav-link" href="#offers">offers</a>
                                </li>
                                <li className="nav-item mt-2">
                                    <a className="nav-link" href="#contacts">contacts</a>
                                </li>
                                <li className="nav-item mt-2">
                                    <a className="nav-link" href="/privacypolicy">privacy policy</a>
                                </li>
                                <li className="nav-item mt-2">
                                    <a className="nav-link" href="/termsofservice">terms of service</a>
                                </li>
                                <li className="nav-item mx-2 mt-2">
                                    <a href="">
                                        <img src={egypt} style={langIconStyle} className="mt-2" alt="" />
                                    </a> 
                                </li>
                            </ul>    
                            <a className="btn btn-sm btn-success mt-2" href="/signin">login</a>
                        </div>
                    </div>
            </nav>
        );
    }
}

export default HomeNavbar;
