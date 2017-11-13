import React, { Component } from 'react';
import "./index.css";
import SelectCrypto from './containers/SelectCrypto';

class App extends Component {
  render() {
    return (
      <div className="App container-fluid">
        <SelectCrypto />
      </div>
    );
  }
}


export default App;
