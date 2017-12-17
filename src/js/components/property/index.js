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
                containerElement: <div style={{ height: `400px` }} />,
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

        return (
            <div className="home">
                <Header/>
                <div>
                    <img className="main_img" src={require('../../../assets/images/bg_main.jpg')} />
                    <div className="property_wrap">
                        <Card>
                            <CardHeader
                                title={state.data.address}
                                subtitle={state.data.bedrooms + " bd " + state.data.bathrooms + " bth "}
                            />
                            <CardMedia>
                                <Slider {...slickSettings}>
                                    {propertyImages}
                                </Slider>
                                <MyMapComponent key="map" />
                            </CardMedia>
                            <CardTitle title="Description"/>
                            <CardText>
                                {state.data.description}
                            </CardText>
                            <CardActions>
                                <FlatButton label="Get Offer" />
                                <FlatButton label="New Search" />
                            </CardActions>
                        </Card>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Property);