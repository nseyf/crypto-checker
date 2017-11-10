import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPrice } from '../actions';
import Graph from '../components/graph';

class SelectCrypto extends Component {

componentWillMount() {
  this.props.fetchPrice(`${this.props.activeCrypto}-${this.props.activeCurrency}`);
}

  render(){
console.log(this.props.prices)
return (
      <div className="container">
        <h1 className="text-center">Crypto Checker</h1>
        <Graph />
      <div className="text-center" style={{
          padding: "20px",
          border: "1px solid green",
          width: "50%"
        }}>
        <h2>{this.props.activeCrypto}:</h2>
      </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    prices: state.prices,
    activeCurrency: state.activeCurrency,
    activeCrypto: state.activeCrypto
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchPrice }, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectCrypto)
