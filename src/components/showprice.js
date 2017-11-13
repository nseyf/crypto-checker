import React from 'react';

const ShowPrice = (data) => {
  return (
    <div className="row">
    <div className="col-xs-12" style={{
      }}>
      <h3 style={{
        border: "3px solid #f5f5f5",
        color: "grey",
        padding: "10px",
        fontWeight: "100"}}>{data.ticker.base}/{data.ticker.target}
        <br />
        <span style={{fontSize: "1.75em", color: "black"}}>{data.ticker.price}</span>
        </h3>
    </div>
    </div>
  )
}

export default ShowPrice;
