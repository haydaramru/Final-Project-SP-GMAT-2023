import TeamID from "./components/TeamID"
import Clock from "./components/Clock"
import YawGraph from "./components/YawGraph"
import PitchGraph from "./components/PitchGraph"
import RollGraph from "./components/RollGraph"
import AltitudeGraph from "./components/AltitudeGraph"
import Voltage from "./components/Voltage"
import Pressure from "./components/Pressure"

import Map from "./components/Map"
import "leaflet/dist/leaflet.css"

function App() {

  return (
    <div className="fixed top-0 left-0 bg-slate-600 h-screen w-screen grid grid-cols-11 grid-rows-8 gap-4 p-5">
      <div id="name" className="rounded-lg bg-white col-span-4">Haydar Amru</div>
      <div id="team-id" className="rounded-lg bg-white col-span-2 col-start-1 row-start-2">
        <TeamID id="Team ID" />
      </div>
      <div id="clock" className="rounded-lg bg-white col-span-2 col-start-3 row-start-2">
        <Clock id="Clock" />
      </div>
      <div id="yaw" className="rounded-lg bg-white col-span-4 row-span-2 col-start-1 row-start-3 grow-0">
        <YawGraph id="Yaw" />
      </div>
      <div id="pitch" className="rounded-lg bg-white col-span-4 row-span-2 col-start-1 row-start-5 grow-0">
        <PitchGraph id="Pitch" />
      </div>
      <div id="roll" className="rounded-lg bg-white col-span-4 row-span-2 col-start-1 row-start-7 grow-0">
        <RollGraph id="Roll" />
      </div>
      <div id="voltage" className="rounded-lg bg-white col-span-2 row-span-3 col-start-10 row-start-1">
        <Voltage id="Voltage" />
      </div>
      <div id="pressure" className="rounded-lg bg-white col-span-2 row-span-3 col-start-10 row-start-4">
        <Pressure id="Pressure" />
      </div>
      <div id="map" className="rounded-lg bg-white col-span-5 row-span-6 col-start-5 row-start-1 grow-0">
        <Map />
      </div>
      <div id="altitude" className="rounded-lg bg-white col-span-7 row-span-2 col-start-5 row-start-7 grow-0">
        <AltitudeGraph id="Altitude" />
      </div>
    </div>
  )
}

export default App
