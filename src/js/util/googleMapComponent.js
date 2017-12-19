import React from "react";
import { compose, withProps, withState, withHandlers } from "recompose";
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker,
} from "react-google-maps";

const GoogleMapComponent = (state) => (
    compose(
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
            };

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
    )
);

export default GoogleMapComponent;