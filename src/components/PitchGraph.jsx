import { useState, useEffect } from "react";
import Plotly from "plotly.js-dist";
import { io } from "socket.io-client";

// eslint-disable-next-line react/prop-types
const PitchGraph = ({ id }) => {
    const [dataPitch, setDataPitch] = useState([]);
    const [timeData, setTimeData] = useState([new Date()]);
    const maxDataPoints = 60;

    useEffect(() => {
        const socket = io("https://gmat.haikalhilmi.my.id/");
        
        socket.on("connect", () => {
            console.log("Pitch Connected to Socket.IO server");
        });

        socket.on("message", (mess) => {
            const dataArray = mess.split(",");
            const pitch = parseFloat(dataArray[3]);     // data[3] = Pitch
            // console.log(pitch);

            setDataPitch((prevData) => {
                const newData = [...prevData, pitch].slice(-maxDataPoints);
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
                y: dataPitch,
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
            width: 472,
            height: 128, 
            xaxis: {
                type: "date"
            }
        }

        Plotly.newPlot(id, data, layout);
    }, [dataPitch, timeData, id]);

    return (
        <div className="p-0 w-full h-full col-span-5 overflow-hidden">
            <div className="h-6 text-center">{id}</div>
            <div id={id} />
        </div>
    )
}

export default PitchGraph;
