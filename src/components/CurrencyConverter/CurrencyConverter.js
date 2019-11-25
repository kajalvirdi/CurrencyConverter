import React, { Component } from "react";
import axios from "axios";
import Header from "../Header/Header";

import {
  Form,
  FormGroup,
  Label,
  Input,
  Row,
  Col
} from 'reactstrap';

class CurrencyConverter extends Component {

  state = {
    currencies: [],
    curCombination: {},
    fromCurrency: "EUR",
    toCurrency: "INR",
    amount: 0,
    result: 0,
  };

  componentDidMount(){
      axios.get("/latest")
        .then(response => {
            const currencyArr = ["EUR"]
            for (const key in response.data.rates) {
                currencyArr.push(key)
            }
            this.setState({ currencies: currencyArr.sort() })
        })
        .catch(err => {
            console.log("Server Error", err.message);
        });
  }

  toggle = () => {
    const { isOpen } = this.state;
    this.setState({
      isOpen: !isOpen
    });
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  convertCurrency = (event) => {
    if (event.target.name === "amount") {
        this.setState({ amount: event.target.value })
    }


    if(typeof this.state.curCombination[this.state.fromCurrency] != 'undefined' &&
      typeof this.state.curCombination[this.state.fromCurrency][this.state.toCurrency] != 'undefined'){
      const result = this.state.amount * (this.state.curCombination[this.state.fromCurrency][this.state.toCurrency][this.state.toCurrency]);
      this.setState({ result: result })
    } else {
      if (this.state.fromCurrency !== this.state.toCurrency) {
        axios
            .get(`/latest?symbols=${this.state.toCurrency}&base=${this.state.fromCurrency}`)
            .then(response => {
                let curCombination = {};
                curCombination[this.state.fromCurrency][this.state.toCurrency] = response.data.rates;
                const result = this.state.amount * (response.data.rates[this.state.toCurrency]);
                console.log(result);
                this.setState({ result: result, curCombination: curCombination })
            })
            .catch(err => {
                console.log("Server Error", err.message);
          });
        } else {
            this.setState({ result: "Source and Target Currency should not be same!" })
        }
    }




    };

  render(){
    return(
      <React.Fragment>
        <Header />

        <div className="container mt-5">
          <div className="col-sm-8 offset-sm-2 container">
            <h2>Currency Converter</h2>
            <Form>
              <FormGroup>
                <Label for="from">Source Currency</Label>
                <Row>
                  <Col xs="5">
                    <Input
                        type="select"
                        name="fromCurrency"
                        onChange={(event) => this.handleChange(event)}
                        value={this.state.fromCurrency}
                        >
                        {this.state.currencies.map(cur => (
                          <option key={cur}>{cur}</option>
                        ))}
                    </Input>
                  </Col>
                  <Col xs="7">
                    <Input type="text" name="amount" value={this.state.amount} onChange={this.convertCurrency} id="amount" placeholder="Amount" />
                  </Col>
                </Row>
              </FormGroup>

              <FormGroup>
                <Label for="from">Target Currency</Label>
                <Row>
                  <Col xs="5">
                  <Input
                      type="select"
                      name="toCurrency"
                      onChange={(event) => this.handleChange(event)}
                      value={this.state.toCurrency}
                      >
                      {this.state.currencies.map(cur => (
                        <option key={cur}>{cur}</option>
                      ))}
                  </Input>
                  </Col>
                  <Col xs="7">
                    <Input type="text" name="result" id="result" placeholder="Amount" readOnly value={this.state.result} />
                  </Col>
                </Row>
              </FormGroup>
              <Label for="examplePassword">Want to transfer money? Try Our </Label><a className="control-label" href="#"> Money Transfer Service</a>
            </Form>
          </div>
        </div>
      </React.Fragment>

    );
  }
}
export default CurrencyConverter;

