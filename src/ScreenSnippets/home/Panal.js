import React, { Component } from 'react';

class Panal extends Component {
    render() {
        return (
            <div className="panal">
                <div className="container">
                    <h2>{this.props.head}</h2>
                    <p>{this.props.p}</p>
                    <a className="btn btn-dark" href={this.props.href}>{this.props.a}</a>
                </div>
            </div>
        )
    }
}

export default Panal;