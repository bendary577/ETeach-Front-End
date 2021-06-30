import React, { Component } from "react";
import '../../public/css/home.css';
import Welcome from '../ScreenSnippets/home/Welcome';
import Services from '../ScreenSnippets/home/Services';
import Panal from '../ScreenSnippets/home/Panal';
import Footer from '../ScreenSnippets/accounts/Footer';
import Offers from "../ScreenSnippets/home/Offers";
import HomeNavbar from "../ScreenSnippets/home/HomeNavbar";
import Testmonials from "../ScreenSnippets/home/Testmonials";

class Home extends Component {
    render() {
        return (
            <div className="parent-div">
                <HomeNavbar />
                <Welcome />
                <Services />
                <Panal />
                <Testmonials />
                <hr />
                <Offers />
                <Footer />
            </div>
        )
    }
}

export default Home;