import React, {Component} from "react";
import {Link} from 'react-router-dom';
import {AppBar, MenuItem} from "material-ui";

class Header extends Component {
    constructor() {
        super()
    }
    render() {
        return (
            <AppBar title="Propigator" iconClassNameRight="muidocs-icon-navigation-expand-more">
                <MenuItem containerElement={<Link to="/login" />} primaryText="Log In" />
                <MenuItem containerElement={<Link to="/signup" />} primaryText="Sign Up" />
                <MenuItem containerElement={<Link to="/about" />} primaryText="About" />
            </AppBar>
        )
    }
}

export default Header;