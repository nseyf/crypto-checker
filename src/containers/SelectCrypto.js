import React, { Component } from 'react';
import Loader from '../components/loader';
import Graph from '../components/graph';
import ShowPrice from '../components/showprice';
import DisplayMarkets from '../components/displaymarkets';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPrice, toggleActiveCrypto, toggleActive } from '../actions/actions';


class SelectCrypto extends Component {

componentDidMount(){
  this.props.fetchPrice(`${this.props.activeCryptocurrency}-${this.props.activeCurrency}`)
}

componentWillUpdate(nextProps){
  if(
    this.props.activeCryptocurrency !== nextProps.activeCryptocurrency ||
    this.props.activeCurrency !== nextProps.activeCurrency
  ) {
  this.props.fetchPrice(`${nextProps.activeCryptocurrency}-${nextProps.activeCurrency}`)
}

}


  render(){
    console.log(this.props)
  const  { toggleActiveCrypto, toggleActive } = this.props;

  const buttonStyle = {
    padding: "15px",
    fontWeight: "100",
    fontSize: "20px",
    margin: "5px",

    border: "none",
    borderRadius: "5px",
    outline: "0",

  }

if(!this.props.prices.ticker){
  return <Loader />
} else {

return (
      <div className="container" style={{
          background: "white",
          borderBottom: "1px solid rgba(0, 0, 0, 0.2)",
          boxShadow: "0 1px 5px rgba(0, 0, 0, 0.15)"
        }}>
        <h1 className="text-center" style={{fontWeight: "100"}}>CRYPTO CHECKER</h1>
        <div className="row" style={{marginTop: "30px"}}>
      <div className="col-xs-12" id="crypto-buttons">
        <button style={buttonStyle} onClick={() => toggleActiveCrypto("BTC")}>BTC</button>
        <button style={buttonStyle} onClick={() => toggleActiveCrypto("ETH")}>ETH</button>
        <button style={buttonStyle} onClick={() => toggleActiveCrypto("LTC")}>LTC</button>
      </div>
      <div className="col-xs-12" id="curr-buttons">
        <button style={buttonStyle} onClick={() => toggleActive("USD")}>USD</button>
        <button style={buttonStyle} onClick={() => toggleActive("GBP")}>GBP</button>
        <button style={buttonStyle} onClick={() => toggleActive("EUR")}>EUR</button>
      </div>
      </div>
        <Graph />
        <ShowPrice ticker={this.props.prices.ticker}  />
        <DisplayMarkets markets={this.props.prices.ticker.markets} />
      </div>
    )
  }
  }
}

const mapStateToProps = (state) => {
  return {
    prices: state.prices,
    activeCurrency: state.activeCurrency,
    activeCryptocurrency: state.activeCryptocurrency
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchPrice, toggleActiveCrypto, toggleActive }, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectCrypto)
