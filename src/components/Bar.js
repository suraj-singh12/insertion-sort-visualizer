// this defines the Bars of arrays
import {useState} from 'react';

// index of element, length (height) of that bar (array's value)
const Bars = ({index, length, changeArray}) => {

    // for current bar
    const [len, setLen] = useState(length);
    console.log(length);
    
    let barStyle = {
        background: '#3d5af1',
        height: length,
        marginTop: 200 - length
    }
    
    // when height changes in input box, validate it here, and reflect there in input box 
    // also reflect the changed value in our array after validation (this ensures re-rendering of bars in App.js)
    // so the bars of changed height / length are formed as soon a value is changed.
    const handleChange = (e) => {
        let val = e.target.value;

        if(val === '') { 
            setLen(0);
            changeArray(index, 0);
        } else { 
            val = parseInt(val);
            if(val > 200) 
                val = 200;
            setLen(val);
            changeArray(index, val);
        }
    }

    return (
        <div className="bar" style={barStyle}>
            {/* onChange, calls handleChange to validate the current entered number and then set it here in input box again */}
            <input type="number" value={len} onChange={handleChange} />
        </div>
    )
}

export default Bars;