import React from 'react';
import * as d3 from 'd3';

const Graph = (props) => {

  const { Data } = props.prices;


// Function to display market data as a graph
const renderGraph = (graphData) => {
    if (graphData) {

// The API provides information in seconds, meaning
// We need to convert it to a format understandable
// by users.
      const convertTime = (seconds) => {
        const time = new Date(1970, 0, 1);
        time.setSeconds(seconds);
        return time
}
// Maps over every element in the graphData
// to replace the seconds value with the
// value provided by convertTime()
const convertedTimes = graphData.map((entry) => {
  const convertedEntry = {
    ...entry,
    time: convertTime(entry.time)
  }
  return convertedEntry
});


    return (
      <div></div>
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
