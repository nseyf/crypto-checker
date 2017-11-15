import React from 'react';
import * as d3 from 'd3';

const Graph = (props) => {
  const { Data } = props.prices;

// Put d3 logic here


const renderGraph = (graphData) => {
    if (graphData) {

      const convertTime = (seconds) => {
        const time = new Date(1970, 0, 1);
        time.setSeconds(seconds);
        return time
}

console.log(graphData.map((entry) => {
  const convertedEntry = {
    ...entry,
    time: convertTime(entry.time)
  }
  return convertedEntry
}))


    return (
      <div>Graph!</div>
    )
  }
  }


  return (
    <div>
    {renderGraph(Data)}
    </div>
  )
}

export default Graph;
