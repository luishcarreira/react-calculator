import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Button } from './components/Button';

import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      display: ""
    }

    this.handleValue = this.handleValue.bind(this);
    this.clearDisplay = this.clearDisplay.bind(this);
    this.equal = this.equal.bind(this);
  }

  //fazendo a concatenação com o valor atual do display e o valor do input
  handleValue(event){
    this.setState({
      display: this.state.display + event.target.value
    })
  }

  clearDisplay(){
    this.setState({
      display: ""
    })
  }

  equal(){
    let values = this.state.display.split('');

    let count = 0;
    let number1 = "";
    let number2 = "";
    let operator = "";
    let witchNumber = 1;

    let checkNumber = (value) => {
      if(witchNumber === 1){
        witchNumber = 2;
      } 

      operator = value;
    }

    values.forEach((value) => {

      if(isNaN(value) ===false){
        if(witchNumber ===1){
          number1 += value;
        } else {
          number2 += value;
        }
      } else {
        checkNumber(value);
      }
    })

    switch(operator){
      case '+':
        count = parseInt(number1) + parseInt(number2);
        break;
      case '-':
        count = parseInt(number1) - parseInt(number2);
        break;
      case '*':
        count = parseInt(number1) * parseInt(number2);
        break;
      case '/':
        count = parseInt(number1) / parseInt(number2);
        break;
      }

      this.setState({
        display: count
      })
    }

  render() {

    return (
        <div className="App">
          <h1 className="title"> React Calculator </h1>
          <form className="calculator">
            <div className="header">
              <input type="text" value={this.state.display} className="display" readOnly />
            </div>
            <div className="body">
            <Row>
              <Col md={3}>
                <Button value="1" onClick={this.handleValue}/>
              </Col>
              <Col md={3}>
                <Button value="2" onClick={this.handleValue}/>
              </Col>
              <Col md={3}>
                <Button value="3" onClick={this.handleValue}/>
              </Col>
              <Col md={3}>
                <Button value="+" onClick={this.handleValue}/>
              </Col>
            </Row>
            <Row>
              <Col md={3}>
                <Button value="4" onClick={this.handleValue}/>
              </Col>
              <Col md={3}>
                <Button value="5" onClick={this.handleValue}/>
              </Col>
              <Col md={3}>
                <Button value="6" onClick={this.handleValue}/>
              </Col>
              <Col md={3}>
                <Button value="-" onClick={this.handleValue}/>
              </Col>
            </Row>
            <Row>
              <Col md={3}>
                <Button value="7" onClick={this.handleValue}/>
              </Col>
              <Col md={3}>
                <Button value="8" onClick={this.handleValue}/>
              </Col>
              <Col md={3}>
                <Button value="9" onClick={this.handleValue}/>
              </Col>
              <Col md={3}>
                <Button value="*" onClick={this.handleValue}/>
              </Col>
            </Row>
            <Row>
              <Col md={3}>
                <Button value="=" onClick={this.equal}/>
              </Col>
              <Col md={3}>
                <Button value="0" onClick={this.handleValue}/>
              </Col>
              <Col md={3}>
                <Button value="C" className="clear" onClick={this.clearDisplay}/>
              </Col>
              <Col md={3}>
                <Button value="/" onClick={this.handleValue}/>
              </Col>
            </Row>
          </div>
          </form>
        </div>
    );
  }
}

export default App;
