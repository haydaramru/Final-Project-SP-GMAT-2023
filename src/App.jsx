import { useState, useEffect } from "react";
import socket from "./utils/socket"

import TeamID from "./components/TeamID"
import Clock from "./components/Clock"
import YawGraph from "./components/YawGraph"
import PitchGraph from "./components/PitchGraph"
import RollGraph from "./components/RollGraph"
import AltitudeGraph from "./components/AltitudeGraph"
import Voltage from "./components/Voltage"
import Pressure from "./components/Pressure"

import MapWrapper from "./components/Map"
import "leaflet/dist/leaflet.css"

function App() {
  const [socketData, setSocketData] = useState({});

  useEffect(() => {
    socket.on("connect", () => {
      console.log("Connected to Socket.IO server");
    });

    socket.on("message", (mess) => {
      const dataArray = mess.split(",");
      const data = {
        teamID:     parseFloat(dataArray[0]),
        clock:      (dataArray[1]),
        yaw:        parseFloat(dataArray[2]),
        pitch:      parseFloat(dataArray[3]),
        roll:       parseFloat(dataArray[4]),
        latitude:   parseFloat(dataArray[5]),
        longitude:  parseFloat(dataArray[6]),
        voltage:    parseFloat(dataArray[7]),
        pressure:   parseFloat(dataArray[8]),
        altitude:   parseFloat(dataArray[9]),
      }
      
      console.log(data);

      setSocketData({...data})
    });
  })

  return (
      <div className="bg-gray-900 h-screen w-screen grid grid-cols-11 grid-rows-8 gap-4 p-6">

        <div id="name" className="rounded-lg bg-white col-span-4 text-lg">
          Haydar Amru
        </div>

        <div id="team-id" className="rounded-lg bg-white col-span-2 col-start-1 row-start-2">      
          <TeamID id="Team ID" teamID={socketData.teamID} />
        </div>
        
        <div id="clock" className="rounded-lg bg-white col-span-2 col-start-3 row-start-2">
          <Clock id="Clock" clockData={socketData.clock} />
        </div>
        
        <div id="yaw" className="rounded-lg bg-white col-span-4 row-span-2 col-start-1 row-start-3 grow-0">
          <YawGraph id="Yaw" yawData={socketData.yaw}/>
        </div>
        
        <div id="pitch" className="rounded-lg bg-white col-span-4 row-span-2 col-start-1 row-start-5 grow-0">
          <PitchGraph id="Pitch" pitchData={socketData.pitch} />
        </div>
        
        <div id="roll" className="rounded-lg bg-white col-span-4 row-span-2 col-start-1 row-start-7 grow-0">
          <RollGraph id="Roll" rollData={socketData.roll} />
        </div>
        
        <div id="voltage" className="rounded-lg bg-white col-span-2 row-span-3 col-start-10 row-start-1">
          <Voltage id="Voltage" voltageData={socketData.voltage} />
        </div>
        
        <div id="pressure" className="rounded-lg bg-white col-span-2 row-span-3 col-start-10 row-start-4">
          <Pressure id="Pressure" pressureData={socketData.pressure} />
        </div>
        
        <div id="map" className="rounded-lg bg-white col-span-5 row-span-6 col-start-5 row-start-1 grow-0 overflow-hidden">
          <MapWrapper latitudeData={socketData.latitude} longitudeData={socketData.longitude} />
        </div>
        
        <div id="altitude" className="rounded-lg bg-white col-span-7 row-span-2 col-start-5 row-start-7 grow-0">
          <AltitudeGraph id="Altitude" altitudeData={socketData.altitude} />
        </div>

      </div>
  )
}

export default App
