import { useState, useEffect } from "react"
import { io } from "socket.io-client"

// eslint-disable-next-line react/prop-types
const TeamID = ({ id }) => {
    const [dataID, setDataID] = useState([]);

    useEffect(() => {
        const socket = io("https://gmat.haikalhilmi.my.id/");
        
        socket.on("connect", () => {
            console.log("Team ID received from Socket.IO server");
        });

        socket.on("message", (mess) => {
            const dataArray = mess.split(",");
            const TeamID = parseFloat(dataArray[0]);        // data[0] = Team ID
            // console.log(TeamID);

            setDataID(TeamID)
        });
    })

    return (
        <div>{id} = {dataID}</div>
    )
}

export default TeamID