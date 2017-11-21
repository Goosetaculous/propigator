import React, {Component} from "react";
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Home from "./components/home";
import About from './components/about';
import Signup from './components/signup/index';
import Login from './components/login/index';

class App extends Component {
    constructor() {
        super()
    }
    render() {
        return (
            <MuiThemeProvider>
                <Router>
                    <div>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/about" component={About}/>
                        <Route exact path="/signup" component={Signup}/>
                        <Route exact path="/login" component={Login}/>
                    </div>
                </Router>
            </MuiThemeProvider>
        )
    }
}

export default App;