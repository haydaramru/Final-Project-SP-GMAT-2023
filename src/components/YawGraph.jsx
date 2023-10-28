import { useState, useEffect } from "react";
import Plotly from "plotly.js-dist";
import { io } from "socket.io-client";

// eslint-disable-next-line react/prop-types
const YawGraph = ({ id }) => {
    const [dataYaw, setDataYaw] = useState([]);
    const [timeData, setTimeData] = useState([new Date()]);
    const maxDataPoints = 30; // Maximum number of data points to display

    // Initialize Graph
    useEffect(() => {
        const socket = io("https://gmat.haikalhilmi.my.id/");
        
        socket.on("connect", () => {
            console.log("Yaw Connected to Socket.IO server");
        });

        socket.on("message", (mess) => {
            const dataArray = mess.split(",");
            const yaw = parseFloat(dataArray[2]);       // data[2] = Yaw
            // console.log(yaw);

            setDataYaw((prevData) => {
                const newData = [...prevData, yaw].slice(-maxDataPoints);
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

    // Update the graph when dataPitch changes
    useEffect(() => {
        const data = [
            {
                x: timeData,
                y: dataYaw,
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
    }, [dataYaw, timeData, id]);

    return (
        <div className="p-0 w-full h-full col-span-5 overflow-hidden">
            <div className="h-6 text-center">{id}</div>
            <div id={id} />
        </div>
    )
}

export default YawGraph;
