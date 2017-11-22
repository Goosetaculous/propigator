import React, {Component} from "react";
import {Link} from 'react-router-dom';

import Header from '../../shared/header';
import TextField from 'material-ui/TextField';
import {white} from "material-ui";

const styles = {
    textRootStyle: {
        backgroundColor: white,
        padding: "0 10px 0 10px"
    }
};

class Home extends Component {
    constructor() {
        super()
    }
    render() {
        return (
            <div className="home">
                <Header/>
                <div>
                    <img className="main_img" src="assets/images/bg_main.jpg" />
                    <div className="search_wrap">
                        <TextField style={styles.textRootStyle}
                                   underlineStyle={{display: 'none'}}
                                   className="address_search"
                                   type="search"
                                   hintText="Enter address to start"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;