import React from 'react';

const ShowPrice = (data) => {
  return (
    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12" style={{
        background: "#f5f5f5",
        border: "1px solid grey",
        borderRadius: "5px"
      }}>
      <h2 style={{fontWeight: "900"}}>{data.ticker.base}/{data.ticker.target}<br />{data.ticker.price} </h2>
    </div>
  )
}

export default ShowPrice;
