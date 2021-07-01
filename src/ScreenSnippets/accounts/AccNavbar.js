import React, { Component } from "react";
import egypt from "../../../public/icons/home/egypt.png";
import "../../../public/css/accnavbar.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import Pusher from 'pusher-js';
import logo from '../../../public/images/Home/logo.png'

class CustomerAccNavBar extends Component {

  state = {
    new_notification_message : "",
    notifications_number: 0,
  };

  componentDidMount() {

  }

  clearNotifications = (e)=> {
    e.preventDefault();
    this.setState({
        new_notification_message : "",
        notifications_number : 0
    })
  }

  render() {

    const langIconStyle = {
      width: 30,
      height: 30,
    };

    const logoStyle = {
      width: 80,
      height: 80,
      marginTop : 5
    };

    return (
      <nav class=" navbar navbar-expand-lg navbar-light bg-light cyan">
      <a class="navbar-brand mt-2 mt-lg-0" href="/">
        <img src={logo} alt="Logo" style={logoStyle}/>
      </a>
			<a class="navbar-brand font-bold" href="#">Eteach</a>
				<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-4" aria-controls="navbarSupportedContent-4" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse" id="navbarSuapportedContent-4">
				<ul class="navbar-nav ml-auto">
					<li class="nav-item active">
						<a class="nav-link" href="#"><i class="fa fa-envelope"></i> Contact <span class="sr-only">(current)</span></a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="#"><i class="fa fa-gear"></i> Settings</a>
					</li>
					<li class="nav-item dropdown">
						<a class="nav-link dropdown-toggle" id="navbarDropdownMenuLink-4" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="fa fa-user"></i> Profile </a>
						<div class="dropdown-menu dropdown-menu-right dropdown-cyan" aria-labelledby="navbarDropdownMenuLink-4">
							<a class="dropdown-item" href="#">My account</a>
							<a class="dropdown-item" href="/signin">Log out</a>
						</div>
					</li>
				</ul>
			</div>
		</nav>
    );
  }
}

export default CustomerAccNavBar;
