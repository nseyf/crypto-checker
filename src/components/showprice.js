import React from 'react';

const ShowPrice = (data) => {
  return (
    <div className="row">
    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12" style={{
        border: "1px solid grey",
        borderRadius: "5px"
      }}>
      <h2 style={{marginLeft: "20px", fontWeight: "900"}}>{data.ticker.base}/{data.ticker.target}<br />{data.ticker.price} </h2>
    </div>
    </div>
  )
}

export default ShowPrice;
