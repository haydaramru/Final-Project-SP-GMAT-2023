import { useState, useEffect } from "react";
import { io } from "socket.io-client";

// eslint-disable-next-line react/prop-types
const Voltage = ({ id }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const socket = io("https://gmat.haikalhilmi.my.id/");
        
        socket.on("connect", () => {
            console.log("Voltage data received from Socket.IO server");
        });

        socket.on("message", (mess) => {
            const dataArray = mess.split(",");
            const voltage = parseFloat(dataArray[7]);       // data[7] = Voltage
            // console.log(voltage);

            setData(voltage)
        });
    })

    return (
        <div>{id} = {data} V</div>
    )
}

export default Voltage