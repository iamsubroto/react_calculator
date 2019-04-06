import React, { Component } from 'react'
import Buttons from './Buttons'
import math from 'mathjs' 

class Calculator extends Component {
    state = {
      expression:'',
      total: 0
    }
    handleClick = (text) => {

      // because mathjs doesnt know x meaans multiply 
      // so we check first if x symbol comes.   we hardcode that and replace to * symbol
      switch(text) {
        case "AC": 
        this.setState({expression: '', total: 0});
        break;
        
        case "x": 
          this.setState({
            expression: this.state.expression + " * "
          });
          break;

          case "=": 
            let total = math.eval(this.state.expression);
            this.setState({
              total
            });
            break;

          case "+": 
            this.setState({
              expression: this.state.expression + " + "
            });
            break;

          case "/":
          this.setState({
            expression: this.state.expression + " / "
          });
          break;

          case "-":
          this.setState({
            expression: this.state.expression + " - "
          });
          break;

          default:
            this.setState({
              expression: this.state.expression + text
            });
      }
    }
  render() {
    return (
        <div className="calculator">
            <div className="calculator__screen">
            <span className="expression">{this.state.expression}</span>
            <span className="total">{this.state.total}</span>
            </div>
            <Buttons btnClick={this.handleClick} />
        </div>
    )
  }
}


export default Calculator;