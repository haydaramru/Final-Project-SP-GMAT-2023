// eslint-disable-next-line react/prop-types
const Voltage = ({ id, voltageData }) => {
    return (
        <>
        <div>
            {id}
        </div>
        <div className="text-5xl text-center">
            {voltageData} V
        </div>
        </>
    )
}

export default Voltage