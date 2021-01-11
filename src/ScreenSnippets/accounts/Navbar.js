import React, { Component } from "react";

class Navbar extends Component {
    render() {
        return (
            <header className="header navbar-expand-lg header--bg">
                <div className="container">
                    <nav className="navbar">
                        <div className="navbar-header">
                            <a className="navbar-brand" href="">MY EASY</a>
                        </div>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" style={{ display: 'block !important' }} id="navbarSupportedContent">
                            <ul className="nav me-auto float-right">
                                <li className="nav-item"><a href="/" className="nav-link">HOME</a></li>
                                <li className="nav-item"><a href="/#services" className="nav-link">SERVISES</a></li>
                                <li className="nav-item"><a href="/#about" className="nav-link">ABOUT</a></li>
                                <li className="nav-item"><a href="/#contact" className="nav-link">CONTACT</a></li>
                                <li className="nav-item"><a href="/#what" className="nav-link">WHAT CLINET SAY</a></li>
                                <li className="nav-item"><a href="/signin" className="nav-link">JOIN</a></li>
                            </ul>
                        </div>
                    </nav>
                    <div className="header__content text-center">
                        <h1 className="header__content__title">CREATIVE AGENCY</h1>
                        <p className="header__content__paragraph">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna</p>
                    </div>
                </div>
            </header >
        )
    }
}

export default Navbar;