import { useState, useEffect } from "react";
import Plotly from "plotly.js-dist";
import { io } from "socket.io-client";

// eslint-disable-next-line react/prop-types
const AltitudeGraph = ({ id }) => {
    const [dataAltitude, setDataAltitude] = useState([]);
    const [timeData, setTimeData] = useState([new Date()]);
    const maxDataPoints = 60;

    useEffect(() => {
        const socket = io("https://gmat.haikalhilmi.my.id/");
        
        socket.on("connect", () => {
            console.log("Altitude Connected to Socket.IO server");
        });

        socket.on("message", (mess) => {
            const dataArray = mess.split(",");
            const altitude = parseFloat(dataArray[9]);      // data[9] = Altitude
            // console.log(altitude);

            setDataAltitude((prevData) => {
                const newData = [...prevData, altitude].slice(-maxDataPoints);
                return newData;
            });

            setTimeData((prevTimeData) => {
                const time = new Date();
                const newTimeData = [...prevTimeData, time].slice(-maxDataPoints);
                return newTimeData;
            });
        });

        return () => socket.disconnect();
    }, []);

    useEffect(() => {
        const data = [
            {
                x: timeData,
                y: dataAltitude,
                mode: 'lines',
                line: { color: '#4B5563' },
            }
        ];

        const layout = {
            autosize: true,
            margin: {
              l: 32,
              r: 0,
              b: 20,
              t: 0,
              pad: 0,
            },
            width: 838,
            height: 128, 
            xaxis: {
                type: "date"
            }
        }

        Plotly.newPlot(id, data, layout);
    }, [dataAltitude, timeData, id]);

    return (
        <div className="p-0 w-full h-full col-span-5 overflow-hidden">
            <div className="h-6 text-center">{id}</div>
            <div id={id} />
        </div>
    )
}

export default AltitudeGraph;
