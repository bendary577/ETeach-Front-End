import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { faMoneyCheck } from '@fortawesome/free-solid-svg-icons';
import book from '../../../public/images/book_1.png';

class StoreItemCardDemo extends Component {

    constructor(props) {
        super(props);
      }

      render() {
        return (
            <div class="card" /*style={{height:400}}*/>
                 <img src={book} calssName="card-img img-responsive" alt="" /> 
                <div className="card-body">
                    {/* ----------------------------------------- name and ratings------------------ */}
                    <div className="clearfix">
                        <h6 className="float-left">Product Name</h6>
                        <div className="float-right">
                            <FontAwesomeIcon icon={faStar} className="checked"></FontAwesomeIcon>
                            <FontAwesomeIcon icon={faStar} className="checked"></FontAwesomeIcon>
                            <FontAwesomeIcon icon={faStar} className="checked"></FontAwesomeIcon>
                        </div>
                    </div>

                    {/* ----------------------------------------- descripripton and price------------------ */}
                    <div /*style={{height:160}}*/>
                        <p className="text-secondary">Lorem Ipsum is simply dummy text of the printing</p>
                        <p className="text-success mt-2">$12.00</p>
                    </div>

                    <div className="">
                        <a className="btn btn-success" href="/viewitemdetails">
                            <FontAwesomeIcon icon={faShoppingCart} className="mr-2"></FontAwesomeIcon>
                            View Item Details
                        </a>
                    </div>

                    <div className="clearfix my-4">
                        <a className="btn btn-warning float-right" href="/viewitem" role="button">
                            <FontAwesomeIcon icon={faCartPlus} className="mr-2"></FontAwesomeIcon>
                            add to cart
                        </a>
                        <a className="btn btn-danger float-left" href="/viewitemdetails" role="button">
                            <FontAwesomeIcon icon={faMoneyCheck} className="mr-2"></FontAwesomeIcon>
                            buy now
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default StoreItemCardDemo;