import React, { Component } from 'react';

class Category extends Component {
    render() {
        return (
            <div className="left-side w-100 text-center">
                <h2>category</h2>

                <div className="panal-group category-products">
                    <div className="panel panel-default">
                        <div class="panel-heading">
                            <h4 class="panel-title"><a href="">Shoes</a></h4>
                        </div>
                    </div>

                    <div className="panel panel-default">
                        <div class="panel-heading">
                            <h4 class="panel-title"><a href="">Laptop</a></h4>
                        </div>
                    </div>

                    <div className="panel panel-default">
                        <div class="panel-heading">
                            <h4 class="panel-title"><a href="">Electronics</a></h4>
                        </div>
                    </div>

                    <div className="panel panel-default">
                        <div class="panel-heading">
                            <h4 class="panel-title"><a href="">Men</a></h4>
                        </div>
                    </div>

                    <div className="panel panel-default">
                        <div class="panel-heading">
                            <h4 class="panel-title"><a href="">Woman</a></h4>
                        </div>
                    </div>
                </div>

                <div className="price-range">
                    <h2>Price Range</h2>
                    From<input type="range" class="form-range" />0
                    <br />
                    To<input type="range" class="form-range" />1000
                </div>
            </div>
        )
    }
}

export default Category;