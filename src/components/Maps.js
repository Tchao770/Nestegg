import { Component, useRef } from 'react';
import GoogleMapReact from 'google-map-react';

const MapMarker = ({ text }) => <div>{text}</div>;

const location = {
    address: "12437 Lewis Street, Suite 206, Garden Grove, CA 92840",
    lat: 33.782093,
    lng: -117.897859,
}

function GoogleMap() {
    const defaultMap = useRef({
        center: {
            lat: 33.782093,
            lng: -117.897859
        },
        zoom: 17
    });

    return (
        // Important! Always set the container height explicitly
        <div style={{ height: '250px', width: '100%' }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAP_API_KEY }}
                defaultCenter={defaultMap.current.center}
                defaultZoom={defaultMap.current.zoom}
            >
                <MapMarker
                    lat={33.782093}
                    lng={-117.897859}
                    text="We're here!"
                />
            </GoogleMapReact>
        </div>
    );

}

export default GoogleMap;