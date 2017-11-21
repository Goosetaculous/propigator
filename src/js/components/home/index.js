import React, {Component} from "react";
import {Link} from 'react-router-dom';

import Header from '../../shared/header';

class Home extends Component {
    constructor() {
        super()
    }
    render() {
        return (
            <div>
                <Header/>
                <div style={{
                    backgroundColor: "yellow"
                }}>
                </div>
            </div>
        )
    }
}

export default Home;