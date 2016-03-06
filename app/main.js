'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Greeting from './Greeting.js';
import $ from 'jquery/dist/jquery.js';
import bootstrapCSS from 'bootstrap/dist/css/bootstrap.css';
import bootstrapJS from 'bootstrap/dist/js/bootstrap.js';

ReactDOM.render(<Greeting name="React"/>, document.getElementById('root'));
