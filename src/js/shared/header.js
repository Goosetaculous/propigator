import React, {Component} from "react";
import {Link, Redirect, withRouter} from 'react-router-dom';
import {AppBar, MenuItem, IconButton} from "material-ui";

class Header extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const styles = {
            title: {
                cursor: 'pointer',
            },
        };
        return (
            <AppBar className="appbar_header" title={<span style={styles.title}>Propigator</span>}
                    onTitleTouchTap={() => {this.props.history.push("/")}}
                    onLeftIconButtonTouchTap={() => {this.props.history.push("/")}}
                    iconElementLeft={<IconButton iconClassName="fa fa-home" />}>
                <MenuItem className="appbar_menuitem" containerElement={<Link to="/login" />} primaryText="Log In" />
                <MenuItem className="appbar_menuitem" containerElement={<Link to="/signup" />} primaryText="Sign Up" />
                <MenuItem className="appbar_menuitem" containerElement={<Link to="/about" />} primaryText="About" />
            </AppBar>
        )
    }
}

export default withRouter(Header);