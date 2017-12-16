import React, {Component} from "react";
import PlacesAutocomplete from 'react-places-autocomplete';
import FontAwesome from 'react-fontawesome';
import Header from '../../shared/header';
import RaisedButton from 'material-ui/RaisedButton';
import {parseLocation} from 'parse-address';
import API from '../../util/API'
import { withRouter } from 'react-router-dom';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { address: '' };
        this.onChange = (address) => this.setState({ address })
    }

    getAddressParams(parsedAddress){
        let addressParts = [parsedAddress.number, parsedAddress.street, parsedAddress.type];
        let str_address = addressParts.join(" ");
        if (parsedAddress.city && parsedAddress.state){
            var citystate = parsedAddress.city + ",+" + parsedAddress.state
        }
        else {
            var citystate = ""
        }
        let citystatezip = parsedAddress.zip || citystate;
        return {address:str_address, citystatezip:citystatezip}
    }

    handleClick(address){
        const { router } = this.props;
        address = address !== undefined ? address : false;
        if (address === false){
            address = this.state.address;
        }
        let parsedAddress =  parseLocation(address);
        let params = this.getAddressParams(parsedAddress);

        API.getAddress(params)
            .then(response => {
            console.log(response);
            router.push('/property')
        })
            .catch(error => {
            console.log(error.response)

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

export default withRouter(Home);