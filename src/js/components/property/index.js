import React, {Component} from "react";
import Header from '../../shared/header';
import {Card, CardActions, CardHeader, CardText, CardMedia, CardTitle} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import { Redirect, withRouter } from 'react-router-dom';
import Slider from 'react-slick';
import { compose, withProps, withState, withHandlers } from "recompose";
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker,
} from "react-google-maps";

class Property extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let state = this.props.location.state;
        if (!state){
            return <Redirect to='/' />
        }
        let slickSettings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        if (state.data.images){
            var propertyImages = state.data.images.map(function(name, index){
                return <div key={index}><img src={ name } /></div>;
            })
        }
        else {
            var propertyImages = undefined
        }
        const MyMapComponent = compose(
            withProps({
                googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyCnm70-HPqpQXoNXGMP8g-d-7Y3OXutRoQ&v=3.exp&libraries=geometry,drawing,places",
                loadingElement: <div style={{ height: `100%` }} />,
                containerElement: <div style={{ height: `200px` }} />,
                mapElement: <div style={{ height: `100%` }} />,
            }),
            withState('zoom', 'onZoomChange', 15),
            withHandlers(() => {
                const refs = {
                    map: undefined,
                }

                return {
                    onMapMounted: () => ref => {
                        refs.map = ref
                    },
                    onZoomChanged: ({ onZoomChange }) => () => {
                        onZoomChange(refs.map.getZoom())
                    }
                }
            }),
            withScriptjs,
            withGoogleMap
        )(props =>
            <GoogleMap
                defaultOptions={{
                    gestureHandling: 'cooperative',
                }}
                defaultCenter={{ lat: state.data.lat, lng: state.data.lng }}
                zoom={props.zoom}
                ref={props.onMapMounted}
                onZoomChanged={props.onZoomChanged}
            >
                <Marker
                    position={{ lat: state.data.lat, lng: state.data.lng }}
                    onClick={props.onToggleOpen}
                >
                </Marker>
            </GoogleMap>
        );
        let closeImg = {cursor:'pointer', float:'right', marginTop: '5px', width: '20px'};
        let estimate = parseFloat(state.data.estimate || state.data.estimate_from_tax);
        let instant_estimate = parseFloat(estimate * 0.75);
        return (
            <div className="home">
                <Header/>
                <div>
                    <img className="main_img" src={require('../../../assets/images/bg_main.jpg')} />
                    <div className="property_wrap">
                        <Card>
                            <CardHeader style={{textAlign:"left", padding: "16px 10px 0 32px"}} titleStyle={{fontSize:"25px"}} title={state.data.address}>
                                <a href="/" style={{display:"inline-block", float: "right"}}>
                                    <img src='https://d30y9cdsu7xlg0.cloudfront.net/png/53504-200.png' style={closeImg}/>
                                </a>
                            </CardHeader>
                            <CardMedia>
                                <div className="media_content">
                                    <div className="prop-left-column">
                                        <MyMapComponent key="map" />
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
                                            <FlatButton style={{backgroundColor:"#00bcd4", color:"white"}} labelStyle={{textTransform:'lowercase'}} label="yes, that's right" />
                                            <FlatButton style={{backgroundColor:"#00bcd4", color:"white"}} labelStyle={{textTransform:'lowercase'}} label="fix address" onClick={() => this.props.history.goBack()} />
                                        </CardActions>
                                    </div>
                                    <div className="prop-right-column">
                                        <Slider {...slickSettings}>
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