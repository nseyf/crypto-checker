import React from 'react';


const DisplayMarkets = (props) => {
   const { markets } = props;

   const listItemStyle = {
     listStyleType: "none",
     fontWeight: 900,
     marginTop: "10px",
     marginbottom: "50px"
   }

function DisplayMarket(market, id){
  return (
    <li className="text-center col-lg-3 col-sm-3 col-md-3 col-xs-6" style={listItemStyle} key={id}>
    <p>{market.market.toUpperCase()}</p>
    <p>{market.price}</p>
    </li>
  )
}



  return (
    <div className="row text-center">
    <ul>{markets.map(DisplayMarket)}</ul>
    </div>
  )
};

export default DisplayMarkets;
