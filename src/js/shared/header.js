import React, {Component} from "react";
import {Link} from 'react-router-dom';

class Header extends Component {
    constructor() {
        super()
    }
    render() {
        return (
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
            </div>
        )
    }
}

export default Header;