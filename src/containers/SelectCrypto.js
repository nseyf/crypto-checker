import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPrice, toggleActiveCrypto, toggleActive } from '../actions';
import Graph from '../components/graph';

class SelectCrypto extends Component {

componentDidMount(){
  this.props.fetchPrice(`${this.props.activeCryptocurrency}-${this.props.activeCurrency}`)
}



  render(){
  const  { toggleActiveCrypto, toggleActive } = this.props;
  console.log(this.props)

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


return (
      <div className="container" style={{
          height: "100vh",
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
      <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12" style={{
          background: "#f5f5f5",
          paddingBottom: "10px",
          border: "1px solid grey",
          borderRadius: "5px"
        }}>
        <h2 style={{fontWeight: "900"}}>{this.props.activeCryptocurrency}: </h2>
      </div>
      </div>
    )
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
