import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPrice, toggleActiveCrypto, toggleActive } from '../actions';
import Graph from '../components/graph';

class SelectCrypto extends Component {

  render(){
  const  { toggleActiveCrypto, toggleActive } = this.props;
  console.log(this.props.prices)

  const buttonStyle = {
    height: "100px",
    width: "100px",
    fontWeight: "900",
    fontSize: "30px",
    margin: "5px",
    border: "none",
    borderRadius: "5px",
    borderBottom: "2px solid black",
    background: "#f5f5f5"
  }

return (
      <div className="container" style={{
          height: "100vh",
        }}>
        <h1 className="text-center" style={{fontWeight: "900"}}>CRYPTO CHECKER</h1>

      <div id="crypto-buttons">
        <button style={buttonStyle} onClick={() => toggleActiveCrypto("BTC")}>BTC</button>
        <button style={buttonStyle} onClick={() => toggleActiveCrypto("ETH")}>ETH</button>
        <button style={buttonStyle} onClick={() => toggleActiveCrypto("LTC")}>LTC</button>
      </div>
      <div id="curr-buttons">
        <button style={buttonStyle} onClick={() => toggleActive("USD")}>USD</button>
        <button style={buttonStyle} onClick={() => toggleActive("GBP")}>GBP</button>
        <button style={buttonStyle} onClick={() => toggleActive("EUR")}>EUR</button>
      </div>
        <Graph />
      <div style={{
          padding: "20px",
          margin: "10px",
          background: "#f5f5f5",
          width: "50%"
        }}>
        <h2>{this.props.activeCryptocurrency}: </h2>
      </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    prices: fetchPrice(`${state.activeCryptocurrency}-${state.activeCurrency}`).payload,
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
