import React, {Component} from "react";
import PlacesAutocomplete from 'react-places-autocomplete';
import FontAwesome from 'react-fontawesome';
import Header from '../../shared/header';
import RaisedButton from 'material-ui/RaisedButton';
import {parseLocation} from 'parse-address';
import API from '../../util/API'

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
        let addressParts = [parsedAddress.number, parsedAddress.street, parsedAddress.type];
        let str_address = addressParts.join(" ");
        let citystatezip = parsedAddress.zip || parsedAddress.city + ",+" + parsedAddress.state;
        API.getAddress(str_address, citystatezip)
            .then(function (response) {
            console.log(response);
        })
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