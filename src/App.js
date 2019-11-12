import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CurrencyConverter from "./components/CurrencyConverter/CurrencyConverter";

class App extends Component {
  render(){
    return(
      <div>
          <CurrencyConverter />
      </div>
    );
  }
}

export default App;
