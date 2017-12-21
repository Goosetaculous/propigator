import React, {Component} from 'react';
import FontIcon from 'material-ui/FontIcon';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';

const recentsIcon = <FontIcon className="fa fa-bookmark"/>;
const favoritesIcon = <FontIcon className="fa fa-heart"/>;
const nearbyIcon = <IconLocationOn />;

/**
 * A simple example of `BottomNavigation`, with three labels and icons
 * provided. The selected `BottomNavigationItem` is determined by application
 * state (for instance, by the URL).
 */
class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedIndex: 0,
        };
    }

    select(index) {this.setState({selectedIndex: index});}

    render() {
        return (
            <Paper zDepth={1}>
                <BottomNavigation selectedIndex={this.state.selectedIndex}>
                    <BottomNavigationItem
                        label="Recents"
                        icon={recentsIcon}
                        onClick={() => this.select(0)}
                    />
                    <BottomNavigationItem
                        label="Favorites"
                        icon={favoritesIcon}
                        onClick={() => this.select(1)}
                    />
                    <BottomNavigationItem
                        label="Nearby"
                        icon={nearbyIcon}
                        onClick={() => this.select(2)}
                    />
                </BottomNavigation>
                <span style={{textAlign:'center',display: 'block'}}><p className="fa fa-copyright" /> 2018 Copyright Propigator</span>
            </Paper>
        );
    }
}

export default Footer;