// import { useState, useEffect } from "react"
import { MapContainer, TileLayer } from "react-leaflet"
import tileLayer from "./util/tileLayer";
import "leaflet/dist/leaflet.css"

const Map = () => {
    const center = [-7.7701778, 110.377862];

    return (
        <div className="fixed top-0 left-0 rounded-lg place-content-center" >
            <MapContainer 
                center={center} 
                zoom={18} 
                scrollWheelZoom={false}
                style={{ height: '100vh', width: '100wh' }}
            >
                <TileLayer {...tileLayer}/>
            </MapContainer>
        </div>
    )
}

export default Map