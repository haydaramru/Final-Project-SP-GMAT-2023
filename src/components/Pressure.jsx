import { useState, useEffect } from "react";
import { io } from "socket.io-client";

// eslint-disable-next-line react/prop-types
const Pressure = ({ id }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const socket = io("https://gmat.haikalhilmi.my.id/");
        
        socket.on("connect", () => {
            console.log("Pressure data received from Socket.IO server");
        });

        socket.on("message", (mess) => {
            const dataArray = mess.split(",");
            const pressure = parseFloat(dataArray[8]);      // data[8] = Pressure
            // console.log(pressure);

            setData(pressure)
        });
    })

    return (
        <div>{id} = {data} Pa</div>
    )
}

export default Pressure