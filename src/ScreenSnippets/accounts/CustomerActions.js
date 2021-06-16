import React, { Component } from "react";
import store from "../../../public/icons/profile/store.png"
import invoice from "../../../public/icons/profile/invoice.png"
import complaint from "../../../public/icons/profile/complaint.png"

class CustomerActions extends Component {
    render() {

        const iconImgsStyle = {
            width: 120,
            height: 120
        };
        
        return (    
                 
            <div className="row">
            {/*---------------------------- card1-----------------------------*/}
            <div className="col-sm-12 col-md-6 mb-3 ">
                <div class="card w-100 m-0 control">
                    <div className="card-body text-center">
                        <img
                            src={store}
                            alt="Logo1"
                            calssName="img img-responsive"
                            style={iconImgsStyle}
                        />
                        <div>
                            <a class="btn btn-lg btn-primary" href="/browsestores" role="button">Browse Stores</a>
                        </div>
                    </div>
                </div>
            </div>

            {/*---------------------------- card2-----------------------------*/}

            <div className="col-sm-12 col-md-6 mb-3 ">
                <div className="card w-100 m-0 control">
                    <div className="card-body text-center">
                        <img
                            src={complaint}
                            alt="Logo1"
                            calssName="img img-responsive"
                            style={iconImgsStyle}
                        />
                        <div>
                            <a href="/complaint" className="btn btn-warning btn-lg">Make Complaint</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        );
    }
}

export default CustomerActions;
