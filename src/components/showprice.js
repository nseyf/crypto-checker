import React from 'react';

const ShowPrice = (data) => {
  return (
    <div className="row">
    <div className="col-xs-12" style={{
      }}>
      <h3 style={{
        borderBottom: "1px solid rgba(0, 0, 0, 0.2)",
        boxShadow: "0 1px 5px rgba(0, 0, 0, 0.15)",
        color: "grey",
        padding: "20px",
        marginBottom: "20px",
        fontWeight: "100"}}>{data.ticker.base}/{data.ticker.target}
        <br />
        <span style={{fontSize: "1.75em", color: "black"}}>{data.ticker.price}</span>
        </h3>
    </div>
    </div>
  )
}

export default ShowPrice;
