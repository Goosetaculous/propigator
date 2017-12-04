import React, {Component} from "react";
import PlacesAutocomplete from 'react-places-autocomplete';
import FontAwesome from 'react-fontawesome';
import Header from '../../shared/header';
import RaisedButton from 'material-ui/RaisedButton';
import {white} from "material-ui";
import {parseLocation} from 'parse-address';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { address: '' };
        this.onChange = (address) => this.setState({ address })
    }

    handleClick(address){
        address = address !== undefined ? address : false;
        if (address === false){
            address = this.state.address;
        }
        let parsedAddress =  parseLocation(address);
        console.log(parsedAddress);
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
                        <PlacesAutocomplete inputProps={inputProps} onEnterKeyDown={this.handleClick} />
                        <RaisedButton style={{minWidth:"none"}}  className="search_button" primary={true} onClick={() => this.handleClick()}>
                            <FontAwesome name="search" inverse={true}/>
                        </RaisedButton>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;