import React, {Component} from "react";
import PlacesAutocomplete from 'react-places-autocomplete';
import FontAwesome from 'react-fontawesome';
import Header from '../../shared/header';
import RaisedButton from 'material-ui/RaisedButton';
import Snackbar from 'material-ui/Snackbar';
import {parseLocation} from 'parse-address';
import API from '../../util/API'
import { withRouter } from 'react-router-dom';
import PropFooter from "../../shared/footer";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            address: '',
            loading: false,
            failed: false
        };
        this.onChange = (address) => this.setState({ address })
    }

    getAddressParams(parsedAddress){
        console.log(parsedAddress);
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
        address = address !== undefined ? address : false;
        console.log(address);
        if (address === false){
            address = this.state.address;
        }
        if (!address){
            return
        }
        let parsedAddress =  parseLocation(address);
        let params = this.getAddressParams(parsedAddress);

        this.setState({ loading: true }, () => {
            API.getAddress(params)
                .then(response => {
                    console.log(response);
                    this.setState({loading: false });
                    this.props.history.push({
                        pathname: '/property',
                        state: {
                            data: response.data
                        }
                    });
                })
                .catch(error => {
                    console.log(error.response);
                    this.setState({
                        loading: false,
                        failed: true,
                        failedMessage: error.response.data
                    });

                })
        })
    }
    handleCloseSnackbar() {
        console.log("setting failed back to false");
        this.setState({failed: false});

    }

    render() {
        const inputProps = {
            value: this.state.address,
            placeholder: "Enter your home address, city or zip",
            onChange: this.onChange,
          };
        return (
            <div className="home">
                <Header/>
                <div>
                    <img className="main_img" src={require('../../../assets/images/bg_main.jpg')} />
                    <div className="search_wrap">

                        <PlacesAutocomplete inputProps={inputProps} onEnterKeyDown={() => this.handleClick()} />
                        <RaisedButton style={{minWidth:"none"}}  className="search_button" primary={true} onClick={() => this.handleClick()}>
                            {
                                this.state.loading && <FontAwesome name="spinner" className="fa-spin" inverse={true}/>
                            }
                            {
                                !this.state.loading && <FontAwesome name="search" inverse={true}/>
                            }

                        </RaisedButton>
                        <Snackbar
                            open={this.state.failed}
                            message="We were unable to located your home. Please check your spelling."
                            autoHideDuration={3000}
                            onRequestClose={() => this.handleCloseSnackbar()}
                            bodyStyle={{
                                maxWidth: "700px",
                                minWidth: "500px"}}
                        />

                    </div>
                </div>
                <PropFooter />
            </div>
        )
    }
}

export default withRouter(Home);