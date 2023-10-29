// eslint-disable-next-line react/prop-types
const Pressure = ({ id, pressureData }) => {
    return (
        <>
        <div>{id}</div>
        <div className="text-5xl text-center">
            {pressureData} Pa
        </div>
        </>
    )
}

export default Pressure