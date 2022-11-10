// this defines the Bars of arrays

// index of element, length (height) of that bar
const Bars = ({index, length}) => {
    return (
        <div className="bar">
            <div className="text">{length}</div>
        </div>
    )
}

export default Bars;