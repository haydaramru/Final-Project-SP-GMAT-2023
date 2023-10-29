/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import Plotly from "plotly.js-dist";

function YawGraph({ id, yawData }) {
    const [last, setLast] = useState(0);

    const goInterval = () => {
        setInterval(() => {
        setLast(yawData);
        }, 200);
    };

    useEffect(() => {
        const initTime = new Date();

        const data = [
            {
                x: [initTime],
                y: [last],
                mode: 'lines',
                line: { color: '#4B5563' },
            },
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
                type: "time"
            },
            yaxis: {
                type: "yaw"
            },
        };

        Plotly.newPlot(id, data, layout);
        goInterval();
    }, [id]);

    useEffect(() => {
        const time = new Date();

        const temp = yawData;

        const update = {
            x: [[time]],
            y: [[temp]],
        };

        const olderTime = time.setSeconds(time.getSeconds() - 60);
        const futureTime = time.setSeconds(time.getSeconds() + 60);

        const minuteView = {
            xaxis: {
                range: [olderTime, futureTime],
            },
        };

        Plotly.relayout(id, minuteView);
        Plotly.extendTraces(id, update, [0]);
    }, [yawData, id]);

    return (
        <div className="p-0 w-full h-full col-span-5 overflow-hidden">
            <div className="h-6 text-center">{id} = {yawData}</div>
            <div id={id} />
        </div>
    );
}

export default YawGraph;
