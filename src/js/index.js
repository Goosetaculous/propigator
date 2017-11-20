import React, {Component} from 'react';
import {render} from 'react-dom';
import App from "./app";
import '../css/style.css'; // Import CSS -> ADDED IN THIS STEP

render(<App/>, document.getElementById('app'));