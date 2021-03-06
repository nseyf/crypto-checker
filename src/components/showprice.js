import React from 'react';

const ShowPrice = (data) => {

const { currency, cryptocurrency, convertedPrice } = data;


// Use a switch statement to return the appropriate symbol
// for each currency
const symbol = (currency) => {
  switch(currency) {
    case "USD":
    return "$";
    case "EUR":
    return "€";
    case "GBP":
    return "£"
    default:
    return
  }
}

  return (
    <div className="row">
    <div className="col-lg-5 col-xs-12">
      <h3 style={{
        borderBottom: "1px solid rgba(0, 0, 0, 0.2)",
        boxShadow: "0 1px 5px rgba(0, 0, 0, 0.15)",
        color: "grey",
        padding: "20px",
        transition: "1s",
        marginBottom: "20px",
        fontWeight: "100"}}>
        <span style={{
          fontSize: "1.2em",
          paddingRight: "3px",
          color: "black"}}>
          {cryptocurrency}:
        <span style={{
          fontSize: "1.5em",
          paddingLeft: "5px"}}>
          {symbol(currency)}{convertedPrice[currency]}
          </span>
        </span>
        </h3>
    </div>
    </div>
  )
}

export default ShowPrice;
