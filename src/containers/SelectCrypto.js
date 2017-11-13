import React, { Component } from 'react';
import Loader from '../components/loader';
import Graph from '../components/graph';
import ShowPrice from '../components/showprice';
import DisplayMarkets from '../components/displaymarkets';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPrice, toggleActiveCrypto, toggleActive } from '../actions/actions';


class SelectCrypto extends Component {

componentWillMount(){
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
    padding: "20px",
    fontWeight: "900",
    fontSize: "20px",
    margin: "5px",
    border: "none",
    borderRadius: "5px",
    borderBottom: "2px solid black",
    background: "#f5f5f5"
  }

if(!this.props.prices.ticker){
  return <Loader />
} else {

return (
      <div className="container" style={{
          background: "white",
          borderBottomRightRadius: "15px",
          borderBottomLeftRadius: "15px",

        }}>
        <h1 className="text-center" style={{fontWeight: "900"}}>CRYPTO CHECKER</h1>
        <div className="row" style={{marginTop: "30px"}}>
      <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 text-center" id="crypto-buttons">
        <button style={buttonStyle} onClick={() => toggleActiveCrypto("BTC")}>BTC</button>
        <button style={buttonStyle} onClick={() => toggleActiveCrypto("ETH")}>ETH</button>
        <button style={buttonStyle} onClick={() => toggleActiveCrypto("LTC")}>LTC</button>
      </div>
      <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 text-center" id="curr-buttons">
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
