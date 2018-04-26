import React from 'react';

const DisplayMarkets = (props) => {

  // Only display market data if it is available
  if(props.markets) {

    const { markets } = props.markets;

    const renderMarket = (marketData, id) => {

    const { market, price, volume } = marketData;

    const marketItemStyle = {
      borderBottom: "1px solid #f8f8f8",
      marginTop: "20px",
      marginBottom: "20px",
      fontWeight: "900"
    }
// Create a block with relevant market data.
    return (
      <div key={id}
      className="col-lg-2 col-md-3 col-sm-4 col-xs-6 text-center"
      style={marketItemStyle}>
         <p>{market.toUpperCase()}</p>
         <p>{price}</p>
         <p>VOL: {volume}</p>
    </div>
  )
}
  return (
      <div className="row">
      {markets.map(renderMarket)}
      </div>
  )
} else if(!props.markets || props.markets.length === 0) {
    return (
      <div>No data</div>
  )
}
}

export default DisplayMarkets;
