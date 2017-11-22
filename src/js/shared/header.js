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
                <MenuItem linkButton containerElement={<Link to="/login" />} primaryText="Log In" />
                <MenuItem linkButton containerElement={<Link to="/signup" />} primaryText="Sign Up" />
                <MenuItem linkButton containerElement={<Link to="/about" />} primaryText="About" />
            </AppBar>
        )
    }
}

export default Header;