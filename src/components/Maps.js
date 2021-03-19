import { useRef } from 'react';
import GoogleMapReact from 'google-map-react';
//import logoImg from '../assets/logotab.png';
import { FiMapPin } from 'react-icons/fi';
import { IconContext } from "react-icons";

const markerStyle = {
    position: 'absolute',
    transform: 'translate(-50%, -50%)',
    cursor: 'pointer',
}

function MapMarker() {
    const handleMarkerClick = (e) => {
        console.log(e.target);
    }
    return (
        <IconContext.Provider value={{ size: "2em" }}>
            <div onClick={handleMarkerClick} style={markerStyle} className="MapBalloon">
                <FiMapPin />
            </div>
        </IconContext.Provider >
    );
}

const location = {
    address: "12437 Lewis Street, Suite 206, Garden Grove, CA 92840",
    lat: 33.782093,
    lng: -117.897859,
}

const GoogleMap = () => {
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
                />
            </GoogleMapReact>
        </div>
    );

}

export default GoogleMap;