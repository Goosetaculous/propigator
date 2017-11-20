import React, {Component} from "react";
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Home from "./components/home/index";
import About from './components/about/index';
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
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/about">About</Link>
                            </li>
                            <li>
                                <Link to="/signup">Sign Up</Link>
                            </li>
                            <li>
                                <Link to="/login">Log in</Link>
                            </li>
                        </ul>
                        {/* <Route  path="/" component={Home} /> */}
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