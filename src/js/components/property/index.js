import React, {Component} from "react";
import Header from '../../shared/header';
import {Card, CardActions, CardHeader, CardText, CardMedia} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import { Redirect, withRouter } from 'react-router-dom';
import Slider from 'react-slick';
import GoogleMapComponent from '../../util/googleMapComponent';
import FontAwesome from 'react-fontawesome';

class Property extends Component {
    constructor(props) {
        super(props);
        this.slickSettings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        this.styles = {
            cardCloseImg : {
                cursor:'pointer',
                float:'right',
                marginTop: '5px',
                width: '20px'
            },
            cardHeader: {
                textAlign:"left",
                padding: "16px 10px 0 32px"
            },
            cardHeaderTitle: {
                fontSize:"25px"
            },
            cardHeaderATag: {
                display:"inline-block",
                float: "right"
            },
            cardHeaderFA: {
                color: "#00bcd4"
            },
            cardFlatButton: {
                backgroundColor:"#00bcd4",
                color:"white"
            },
            cardFlatButtonLabel: {
                textTransform:'lowercase'
            }
        }
    }
    getImages(images) {
        if (images){
            return images.map(function(name, index){
                return <div key={index}><img src={ name } /></div>;
            })
        }
    }

    render() {
        let state = this.props.location.state;
        if (!state){
            return <Redirect to='/' />
        }
        let propertyImages = this.getImages(state.data.images);
        let MapComponent = GoogleMapComponent(state);
        let estimate = parseFloat(state.data.estimate || state.data.estimate_from_tax);
        let instant_estimate = parseFloat(estimate * 0.75);
        return (
            <div className="home">
                <Header/>
                <div>
                    <img className="main_img" src={require('../../../assets/images/bg_main.jpg')} />
                    <div className="property_wrap">
                        <Card>
                            <CardHeader style={this.styles.cardHeader}
                                        titleStyle={this.styles.cardHeaderTitle}
                                        title={state.data.address}>
                                <a href="/" style={this.styles.cardHeaderATag}>
                                    <FontAwesome name="times-circle" style={this.styles.cardHeaderFA} />
                                </a>
                            </CardHeader>
                            <CardMedia>
                                <div className="media_content">
                                    <div className="prop-left-column">
                                        <MapComponent key="map" />
                                        <table width="100%">
                                            <tbody>
                                                <tr>
                                                    <td>{state.data.bedrooms}<br/>Beds</td>
                                                    <td>{state.data.bathrooms}<br/>Baths</td>
                                                    <td>$ {estimate.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,')}<br/>Est. Offer</td>
                                                </tr>
                                                <tr>
                                                    <td>{state.data.sqft}<br/>Sq Foot</td>
                                                    <td>{state.data.yrBuilt}<br/>Year Built</td>
                                                    <td>$ {instant_estimate.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,')}<br/>Instant Offer</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <CardText>
                                            <h3>Description</h3>
                                            <div className="prop-description">
                                                {state.data.description}
                                            </div>
                                        </CardText>
                                        <CardActions>
                                            <CardText>Is this your property?</CardText>
                                            <FlatButton style={this.styles.cardFlatButton}
                                                        labelStyle={this.styles.cardFlatButtonLabel}
                                                        label="yes, that's right" />
                                            <FlatButton style={this.styles.cardFlatButton}
                                                        labelStyle={this.styles.cardFlatButtonLabel}
                                                        label="fix address"
                                                        href="/" />
                                        </CardActions>
                                    </div>
                                    <div className="prop-right-column">
                                        <Slider {...this.slickSettings}>
                                            {propertyImages}
                                        </Slider>
                                    </div>
                                </div>
                            </CardMedia>
                        </Card>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Property);