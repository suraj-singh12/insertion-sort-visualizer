import React, {Component} from 'react';
import './App.css';
// Components
import Bar from './components/Bar';


class App extends Component {
  state = { 
    array: [],    // the array we are considering
    steps: [],    // steps of sorting : [[elements], [elements], ...]
    colorKey: [], // current color notation of array elements. eg all elements are sorted, then green, if not then grey
    colors: [],   // color key of steps in sorting: [colorKey, colorKey, ...]
    timeouts: [], // timeout for every step
    currentStep: 0, // the current step we are on
    count: 10,  // number of elements in the array
    delay: 300,   // delay between steps
    algorithm: '' // the algo we are going to use (off-course insertion sort)
  } 

  // return a random number between min and max
  generateRandomNumber = (min, max) => {
    return Math.floor( Math.random() * (max - min)) + min;
  }

  // generate elements in array & that many divs
  generateElements = () => {
    let count = this.state.count;
    let arr = [];

    for(let i = 0; i < count; i++) {
      arr.push(this.generateRandomNumber(50, 200));
    }
    // set the states
    this.setState({
      array: arr,       // currently generated array
      steps: [arr],   // the first step in sorting is the original array itself
      count: count,   // set the no of elements as in count
      currentStep: 0  // starting from beginning 
    });

    console.log(arr);
  }


  render() { 
    // create the bars of arrays
    const bars = this.state.array.map((index, value) => {
      return <Bar key={index} index={index} length={value} />
    });

    return (
      <div className="app">

        {/* display the bars in a frame */}
        <div className="frame">
          {bars}
        </div>
      </div>
    );
  }

  componentDidMount() {
    // generate array elements as soon component mounts
    this.generateElements();
  }
}
 
export default App;
