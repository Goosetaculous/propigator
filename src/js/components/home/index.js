import React, {Component} from "react";
import {Link} from 'react-router-dom';
import PlacesAutocomplete from 'react-places-autocomplete';


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
    constructor(props) {
        super(props);
        this.state = { address: '' };
        this.onChange = (address) => this.setState({ address })
    }
    render() {
        const inputProps = {
            value: this.state.address,
            placeholder: "Enter address to start",
            onChange: this.onChange,
          };
        return (
            <div className="home">
                <Header/>
                <div>
                    <img className="main_img" src={require('../../../assets/images/bg_main.jpg')} />
                    <div className="search_wrap">
                        <PlacesAutocomplete inputProps={inputProps} />
                        {/* <TextField style={styles.textRootStyle}
                                   underlineStyle={{display: 'none'}}
                                   className="address_search"
                                   type="search"
                                   hintText="Enter address to start"/> */}
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;