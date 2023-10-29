/* eslint-disable react/prop-types */
// import { useState, useEffect } from "react";
import { MapContainer, TileLayer, Circle, ScaleControl } from "react-leaflet"
import tileLayer from "../utils/tileLayer";
import "leaflet/dist/leaflet.css"

const MapWrapper = () => {
    // const [center, setCenter] = useState({
    //     lat: -7.7701778,
    //     long: 110.377862,
    // });
    // const [center, setCenter] = useState([-7.7701778, 110.377862]);

    // useEffect(() => {
        // console.log(latitudeData);
        // console.log(longitudeData);

    //     setCenter([latitudeData,longitudeData])
    // }, [center])
    
    const center = [-7.7701778, 110.377862]

    return (
        
        <MapContainer 
            center={center} 
            zoom={16} 
            scrollWheelZoom={false}
        >
            <TileLayer {...tileLayer}/>
            <ScaleControl imperial={false} />

            <Circle 
                center={center} 
                weight={2} 
                color={'red'} 
                fillColor={'red'} 
                fillOpacity={0.1} 
                radius={50}>    
            </Circle>


            {/* <SetViewOnClick /> */}

            {/* <Location /> */}
        
        </MapContainer>
    )
}

export default MapWrapper