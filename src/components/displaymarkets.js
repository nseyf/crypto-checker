import React from 'react';


const DisplayMarkets = (props) => {
   const { markets } = props;

   const listItemStyle = {
     borderBottom: "2px solid #f8f8f8",
   }

const DisplayMarket = (market, id) => {
  return (
    <li className=" col-lg-4 col-sm-4 col-md-4 col-xs-4" style={listItemStyle} key={id}>
    <p style={{color: "grey"}}>{market.market.toUpperCase()}</p>
    <p style={{fontSize: "1em"}}>{market.price}</p>
    </li>
  )
}



  return (
    <div className="row text-center">
    <ul style={{
      listStyleType: "none",
      paddingLeft: "0"
    }}  className="unstyled">{markets.map(DisplayMarket)}</ul>
    </div>
  )
};

export default DisplayMarkets;
