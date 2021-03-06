
import React, { Component } from "react";
import AccNavbar from "../ScreenSnippets/accounts/AccNavbar";
import "../../public/css/makecomplaint.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";


class MakeComplaint extends Component {

    render() {

        const imageStyle = {
            width : 250,
            hight : 250
        };

        return (
            <div className="parent-div">

                <AccNavbar />

                {/*------------------------------ intro --------------------------------------------- */}

                <div className="container">
                    <div className="row">

                        <div className="intro-headline d-flex my-5">
                            <FontAwesomeIcon icon={faExclamationTriangle} className="fa-2x mr-2 "></FontAwesomeIcon>
                            <h2 className="font-weight-bold">Make Complaint</h2>
                        </div>

                        <div className="badge">
                            <h3 className="mt-4">We're feeling so sorry for you &#128532;</h3>
                        </div>

                    </div>

                        {/*------------------------------ complaint text --------------------------------------------- */}

                    <div className="row">

                        <div className="col-sm-12 col-lg-4">
                            <div className="mt-5 p-3 bg-light">
                                <h4>Send your complaint</h4>
                                <ul>
                                    <li><h6>we work 24/7 to solve your proplems</h6></li>
                                    <li><h6>we respond too fast to your messages</h6></li>
                                    <li><h6>making you pleasure is our first concern</h6></li>
                                </ul>
                            </div>
                        </div>

                        <div className="co,-sm-12 col-lg-8 mt-4">
                            <div className="complaint">
                                <label for="complaint">please describe your complaint breifly</label>
                                <br />
                                <textarea id="complaint" form="editprofile-form" rows="5" cols="100" placeholder="Complaint description ..."></textarea>
                            </div>

                            <div className="browseDocuments">
                                <h6>please provide us with any prooving documents</h6>
                                <input type="file" id="file" name="file" />
                            </div>

                            <div className="text-center my-5">
                                <button type="submit" class="btn btn-lg btn-warning">Send</button>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        );
    }
}

export default MakeComplaint;
