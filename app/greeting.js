'use strict';

import React from 'react';
import $ from 'jquery';
import SearchBar from 'solr-reaction/app/SearchBar';

export default class Greeting extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="container-fluid">
                <h3>Hello, {this.props.name}!</h3>

            </div>
        );
    }
}

Greeting.propTypes = {
    name: React.PropTypes.string.isRequired
};

Greeting.defaultProps = {
    name: ''
};