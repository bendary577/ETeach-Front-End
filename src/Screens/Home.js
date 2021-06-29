import React, { Component } from "react";
import '../../public/css/home.css';
import Welcome from '../ScreenSnippets/home/Welcome';
import About from '../ScreenSnippets/home/About';
import Services from '../ScreenSnippets/home/Services';
import ContactUs from '../ScreenSnippets/home/ContactUs';
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
                <Panal head="We Can Make Youe Rich" p="you can use your moeny to busniss it in useful work"
                    href="/store" a="Store" />
                <About />
                <Testmonials />
                <hr />
                <Offers />
                <ContactUs />
                <Footer />
            </div>
        )
    }
}

export default Home;